<template>
    <div class="min-h-screen bg-gray-100 dark:bg-gray-900 p-8">
        <div class="container mx-auto">
            <h1 class="text-3xl font-bold text-primary dark:text-primary-dark mb-8 animate-fadeIn">My GitHub
                Repositories</h1>

            <RepoSearch v-model="searchQuery" v-model:sort-by="sortBy" class="animate-fadeIn" />

            <div v-if="pending" class="flex justify-center items-center h-64 animate-fadeIn">
                <LoadingIndicator />
            </div>

            <div v-else-if="error"
                class="bg-red-100 dark:bg-red-900 border border-red-400 dark:border-red-600 text-red-700 dark:text-red-300 px-4 py-3 rounded animate-fadeIn">
                <p>Failed to load repositories. Please try again later.</p>
            </div>

            <div v-else-if="filteredRepos.length === 0" class="text-center py-12 animate-fadeIn">
                <p class="text-gray-600 dark:text-gray-400">No repositories found matching your search.</p>
            </div>

            <TransitionGroup v-else name="repo-list" tag="div"
                class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <RepoCard v-for="(repo, index) in filteredRepos" :key="repo.id" :repo="repo" />
            </TransitionGroup>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface Repository {
    id: number
    name: string
    html_url: string
    description: string | null
    language: string | null
    stargazers_count: number
    forks_count: number
    updated_at: string
}

const { data: repos, pending, error } = await useFetch<Repository[]>('https://api.github.com/users/xlmnxp/repos?per_page=100')

const searchQuery = ref('')
const sortBy = ref('stars')

const filteredRepos = computed(() => {
    if (!repos.value) return []

    let filtered = [...repos.value]

    // Apply search filter
    if (searchQuery.value) {
        const query = searchQuery.value.toLowerCase()
        filtered = filtered.filter(repo =>
            repo.name.toLowerCase().includes(query) ||
            (repo.description && repo.description.toLowerCase().includes(query))
        )
    }

    // Apply sorting
    filtered.sort((a, b) => {
        switch (sortBy.value) {
            case 'stars':
                return b.stargazers_count - a.stargazers_count
            case 'name':
                return a.name.localeCompare(b.name)
            case 'updated':
                return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
            default:
                return 0
        }
    })

    return filtered
})
</script>

<style scoped>
.repo-list-move,
.repo-list-enter-active,
.repo-list-leave-active {
    transition: all 0.1s ease;
}

.repo-list-enter-from,
.repo-list-leave-to {
    opacity: 0;
    transform: translateY(30px);
}

.repo-list-leave-active {
    position: absolute;
}
</style>
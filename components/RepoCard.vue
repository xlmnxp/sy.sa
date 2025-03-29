<template>
    <div
        class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
        <div class="flex justify-between items-start mb-4">
            <h2 class="text-xl font-semibold text-primary dark:text-primary-dark">
                <a :href="repo.html_url" target="_blank" rel="noopener noreferrer" class="hover:underline">
                    {{ repo.name }}
                </a>
            </h2>
            <div class="flex items-center">
                <span class="flex items-center text-gray-600 dark:text-gray-400 ms-2">
                    <svg class="w-4 h-4 me-1" fill="currentColor" viewBox="0 0 16 16">
                        <path
                            d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.75.75 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25z" />
                    </svg>
                    {{ repo.stargazers_count }}
                </span>
                <span class="flex items-center text-gray-600 dark:text-gray-400 ms-2">
                    <svg class="w-4 h-4 me-1" fill="currentColor" viewBox="0 0 16 16">
                        <path
                            d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z" />
                    </svg>
                    {{ repo.forks_count }}
                </span>
            </div>
        </div>

        <p class="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
            {{ repo.description || 'No description available' }}
        </p>

        <div class="flex flex-wrap gap-2">
            <span v-if="repo.language"
                class="px-2 py-1 text-sm rounded-full bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-dark">
                {{ repo.language }}
            </span>
            <span class="px-2 py-1 text-sm rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                {{ $t("repos.updated") }}: {{ formatDate(repo.updated_at) }}
            </span>
        </div>
    </div>
</template>

<script setup lang="ts">
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

defineProps<{
    repo: Repository
}>()

function formatDate(dateString: string) {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    }).format(date)
}
</script>

<style scoped>
.line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>
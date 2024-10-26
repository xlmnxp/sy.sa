<template>
    <div class="mb-6 flex flex-col sm:flex-row gap-4">
        <div class="relative flex-grow">
            <input type="text" :value="modelValue"
                @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
                placeholder="Search repositories..."
                class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark focus:border-transparent">
            <svg class="absolute right-3 top-2.5 h-5 w-5 text-gray-400 dark:text-gray-500" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        </div>

        <div class="relative">
            <select :value="sortBy" @change="$emit('update:sortBy', ($event.target as HTMLSelectElement).value)"
                class="appearance-none px-4 py-2 pr-10 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark focus:border-transparent">
                <option value="stars">Sort by Stars</option>
                <option value="name">Sort by Name</option>
                <option value="updated">Sort by Last Updated</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-300">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    modelValue: string
    sortBy: string
}>()

defineEmits<{
    'update:modelValue': [value: string]
    'update:sortBy': [value: string]
}>()
</script>
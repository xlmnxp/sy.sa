<template>
    <div class="flex flex-col items-center justify-center space-y-4">
        <div class="relative">
            <div
                class="w-16 h-16 border-4 border-primary dark:border-primary-dark border-t-transparent rounded-full animate-spin">
            </div>
            <div
                class="w-12 h-12 border-4 border-primary/60 dark:border-primary-dark/60 border-t-transparent dark:border-t-transparent rounded-full animate-spin absolute top-2 left-2">
            </div>
        </div>
        <p class="text-gray-600 dark:text-gray-400 animate-pulse">{{ $t("repos.loading") }}</p>
    </div>
</template>

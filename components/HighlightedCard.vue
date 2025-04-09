<script setup lang="ts">
import { HighlightPosition } from '~/common/enums';

const { highlightPosition } = defineProps<{
    highlightPosition:  HighlightPosition
}>();

</script>
<template>
    <div class="relative bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden h-full p-6">
        <div :class="'absolute border-primary dark:border-primary-dark transition-all duration-300 hover:shadow-xl animate-fadeIn top-0 left-0 w-full h-full ' + (highlightPosition === HighlightPosition.Top ? 'border-t-4' : '') + (highlightPosition === HighlightPosition.Bottom ? 'border-b-4' : '') + (highlightPosition === HighlightPosition.Start ? 'border-s-4' : '') + (highlightPosition === HighlightPosition.End ? 'border-e-4' : '')">
            <slot name="highlight"></slot>
        </div>
        <div class="relative">
            <slot></slot>
        </div>
    </div>
</template>
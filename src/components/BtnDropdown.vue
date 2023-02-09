<script setup>
import { ref } from "vue";

const props = defineProps(['countDataPaginate'])
const emit = defineEmits(['changeShowValue'])

const toggle = ref(false)

function onToggle() {
    toggle.value = !toggle.value
}
function setShowingData(value) {
    emit('changeShowValue', value)
    onToggle()
}

const values = ref([10, 25, 50])
</script>
<template>
    <div class="relative">
        <button @click.prevent="onToggle"
            class="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            type="button">
            <span class="sr-only">Action button</span>
            Show {{ countDataPaginate }}
            <svg class="w-3 h-3 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
        </button>
        <!-- Dropdown menu -->
        <div v-show="toggle"
            class="absolute top-10 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-32 dark:bg-gray-700 dark:divide-gray-600">
            <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownActionButton">
                <li v-for="value in values" :key="value" @click.prevent="setShowingData(value)">
                    <a href="#"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{{ value }}</a>
                </li>
            </ul>
        </div>
    </div>
</template>
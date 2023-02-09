<script setup>
import { computed, ref } from "vue";

const props = defineProps(['datas', 'total', 'pagination', 'countDataPaginate', 'countPagePaginate', 'isPrevious', 'isNext'])
const emit = defineEmits(['getList', 'onPrevious', 'onNext', 'getNumber'])

const start = computed(() => {
    return 1;
})
const end = computed(() => {
    return props.datas.length;
})

function activePaginate(number) {
    return number == props.pagination
}
function numberPaginate(number) {
    let start_number = props.pagination;
    let last_number = props.pagination+2;

    if(last_number > props.countPagePaginate) {
        last_number = props.countPagePaginate
    }

    if(start_number > props.countPagePaginate-2) {
        start_number = props.countPagePaginate-2;
    }

    return number >=  start_number && number <= last_number;
}
</script>
<template>
    <nav class="flex flex-wrap gap-4 items-center justify-between mx-6 py-4" aria-label="Table navigation">
        <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
            Showing <span class="font-semibold text-gray-900 dark:text-white">{{ start }}-{{ end }}</span> of <span class="font-semibold text-gray-900 dark:text-white">{{ total }}</span>
        </span>
        <ul class="inline-flex items-center">
            <li>
                <a @click.prevent="$emit('onPrevious')" href="#" :class="{ 'cursor-not-allowed opacity-50': !isPrevious }"
                    class="w-10 h-10 flex justify-center items-center ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    <span class="sr-only">Previous</span>
                    <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                            clip-rule="evenodd"></path>
                    </svg>
                </a>
            </li>
            <li v-for="number in countPagePaginate" :key="number">
                <a v-if="numberPaginate(number)" @click.prevent="$emit('getNumber', number)" href="#"
                    :class="{ 'text-blue-600 bg-blue-50 border border-blue-300 hover:bg-blue-100 hover:text-blue-700': activePaginate(number) }"
                    class="w-10 h-10 flex justify-center items-center leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">
                    {{ number }}
                </a>
            </li>
            <li>
                <a @click.prevent="$emit('onNext')" href="#" :class="{ 'cursor-not-allowed opacity-50': !isNext }"
                    class="w-10 h-10 flex justify-center items-center leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    <span class="sr-only">Next</span>
                    <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd"></path>
                    </svg>
                </a>
            </li>
        </ul>
    </nav>
</template>
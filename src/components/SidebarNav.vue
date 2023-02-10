<script setup>
import { Icon } from '@iconify/vue';
import { computed } from '@vue/runtime-core'

const props = defineProps(['toggle'])
defineEmits(['clickToggle', 'clickToggleResponsive'])

const toggleNav = computed(() => {
    if (props.toggle) {
        return 'left-0 w-3/4 md:w-[300px] lg:w-[60px]'
    }
    return '-left-[300px] lg:w-[300px]'
})

const displayBg = computed(() => {
    if (props.toggle) {
        return 'block'
    }
    return 'hidden'
})
</script>
<template>
    <div :class="displayBg" @click="$emit('clickToggle')" class="lg:hidden fixed z-40 top-0 left-0 w-full h-screen bg-gray-900 bg-opacity-60 backdrop-blur-sm"></div>

    <div :class="toggleNav" class="fixed lg:left-0 z-40 h-full bg-[#003147] overflow-hidden transition-all duration-500 ease-in-out">
        <ul class="flex flex-col text-white whitespace-nowrap">
            <li>
                <router-link :to="{name: 'Dashboard'}" class="nav-link mb-8">
                    <span class="mr-4">
                        <Icon class="w-8 h-8" icon="icon-park-outline:drone" />
                    </span>
                    <span class="text-lg font-semibold">Beehive Drones</span>
                </router-link>
            </li>
            <li @click.prevent="$emit('clickToggleResponsive')">
                <router-link :to="{name: 'Dashboard'}" class="nav-link hover:bg-[#03a9f4] transition-colors duration-200 ease-in-out">
                    <span class="mr-4">
                        <Icon class="w-7 h-7" icon="ion:speedometer" />
                    </span>
                    <span class="text-sm">Dashboard</span>
                </router-link>
            </li>
            <li @click.prevent="$emit('clickToggleResponsive')">
                <router-link :to="{name: 'Positions'}" class="nav-link hover:bg-[#03a9f4] transition-colors duration-200 ease-in-out">
                    <span class="mr-4">
                        <Icon class="w-7 h-7" icon="mdi:account-star" />
                    </span>
                    <span class="text-sm">Positions</span>
                </router-link>
            </li>
            <li @click.prevent="$emit('clickToggleResponsive')">
                <router-link :to="{name: 'Employees'}" class="nav-link hover:bg-[#03a9f4] transition-colors duration-200 ease-in-out">
                    <span class="mr-4">
                        <Icon class="w-7 h-7" icon="clarity:employee-group-solid" />
                    </span>
                    <span class="text-sm">Employees</span>
                </router-link>
            </li>
            <li @click.prevent="$emit('clickToggleResponsive')">
                <router-link :to="{name: 'Sallarys'}" class="nav-link hover:bg-[#03a9f4] transition-colors duration-200 ease-in-out">
                    <span class="mr-4">
                        <Icon class="w-7 h-7" icon="ri:money-dollar-circle-fill" />
                    </span>
                    <span class="text-sm">Sallarys</span>
                </router-link>
            </li>
        </ul>
    </div>
</template>

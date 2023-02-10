<script setup>
import { Icon } from '@iconify/vue';
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';

defineEmits(['clickToggle'])

const toggle = ref(false)
const router = useRouter()

function logout() {
    localStorage.removeItem('user')
    router.push({name: 'Login'})
}

</script>
<template>
    <div v-show="toggle" @click.prevent="toggle = !toggle" class="fixed top-0 left-0 w-full h-full z-40"></div>
    <div class="w-full bg-white h-[60px] flex justify-between items-center px-5 shadow">
        <div @click.prevent="$emit('clickToggle')" class="toggle cursor-pointer">
            <Icon class="w-6 h-6" icon="fontisto:nav-icon-a" />
        </div>
        <div class="relative w-11 h-11">
            <img @click.prevent="toggle = !toggle" class="w-full h-full object-cover border rounded-full cursor-pointer" src="../assets/profile.jpeg" alt="">

            <div v-show="toggle" class="absolute top-[120%] border right-0 min-w-[160px] p-5 rounded-lg shadow-md bg-white z-40">
                <ul class="flex flex-col gap-4">
                    <li>
                        <a href="javascript:;" class="flex items-center gap-3.5 group">
                            <Icon class="w-8 h-8 group-hover:text-blue-400 transition-colors" icon="healthicons:ui-user-profile" />
                            <div class="text-sm font-normal group-hover:text-blue-400 transition-colors">Profile</div>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;" class="flex items-center gap-3.5 group">
                            <Icon class="w-8 h-8 group-hover:text-blue-400 transition-colors" icon="icon-park-solid:setting" />
                            <div class="text-sm font-normal group-hover:text-blue-400 transition-colors">Settings</div>
                        </a>
                    </li>
                    <li>
                        <hr class="mb-4">
                        <a @click.prevent="logout" href="javascript:;" class="flex items-center gap-3.5 group">
                            <Icon class="w-8 h-8 group-hover:text-red-400 transition-colors" icon="material-symbols:logout-rounded" />
                            <div class="text-sm font-normal group-hover:text-red-400 transition-colors">Logout</div>
                        </a>
                    </li>
                </ul>
            </div>

        </div>
    </div>
</template>
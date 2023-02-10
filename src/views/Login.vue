<script setup>
import { Icon } from '@iconify/vue';
</script>
<template>
    <div class="w-full min-h-screen bg-white flex justify-center items-center px-4">
        <div class="bg-transparent w-full max-w-[450px] p-8 text-gray-900">
            <div class="w-full mb-8 text-center">
                <Icon class="w-28 h-28 mx-auto text-slate-900" icon="icon-park-outline:drone" />
                <span class="text-2xl font-normal">Beehive Drones</span>
            </div>
            <div>
                <form @submit.prevent="login">
                    <div v-if="errors.status && errors.status != 200" class="text-sm mb-8 bg-red-500 text-white p-5 rounded-sm">
                        <p class="font-semibold">{{ errors.message }}</p>
                        <ul v-if="errors.data" style="list-style-type: disc;" class="ml-8">
                            <li v-for="(error, idx) in errors.data" :key="idx" class="font-normal">{{ error.msg }}</li>
                        </ul>
                    </div>
                    <div class="text-sm mb-8">
                        <!-- <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label> -->
                        <div class="relative bg-red-400">
                            <input v-model="form.email" id="email" type="email" placeholder="Enter email"
                                class="border w-full p-4 focus:outline-none focus:border-blue-500 transition-colors" required>
                            <!-- <Icon class="absolute top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" icon="material-symbols:mail-outline-rounded" /> -->
                        </div>
                    </div>
                    <div class="text-sm mb-8">
                        <!-- <label for="password" class="block text-sm font-medium text-gray-700 mb-1">Password</label> -->
                        <div class="relative bg-red-400">
                            <input v-model="form.password" id="password" :type="getTypeInput" placeholder="Type your password"
                                class="border w-full p-4 focus:outline-none focus:border-blue-500 transition-colors" required>
                            <div @click.prevent="showPassword" class="absolute top-1/2 right-5 -translate-y-1/2 cursor-pointer group">
                                <Icon v-if="is_password" class="w-6 h-6 text-gray-400 group-hover:text-blue-400 transition duration-200 ease-in-out" icon="mdi:eye" />
                                <Icon v-else class="w-6 h-6 text-gray-400 group-hover:text-blue-400 transition duration-200 ease-in-out" icon="mdi:eye-off" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <button type="submit"
                            :disabled="isLoading"
                            :class="{'opacity-50 cursor-wait': isLoading}"
                            class="w-full py-3 bg-blue-500 text-base font-medium text-white text-center rounded-sm hover:bg-blue-500/90 focus:outline-none focus:ring-4 focus:ring-blue-500/50 transition-colors delay-75 duration-200 ease-in-out">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                email: '',
                password: ''
            },
            errors: [],
            isLoading: false,
            is_password: true
        }
    },
    computed: {
        getTypeInput() {
            return (this.is_password) ? 'password' : 'text'
        }
    },
    methods: {
        async login() {
            this.isLoading = true
            const API_URL = 'http://13.214.194.163:5400/api/v1/auth/login';

            await this.axios.post(API_URL, this.form).then((response) => {
                localStorage.setItem('user', JSON.stringify(response.data.data))
                this.$router.push({ name: 'Dashboard' })
            }).catch((err) => {
                this.errors = err.response.data;
                this.form.password = ''
            })

            this.isLoading = false
        },
        showPassword() {
            this.is_password = !this.is_password
        }
    }
}
</script>
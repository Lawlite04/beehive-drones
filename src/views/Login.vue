<script setup>
import { Icon } from '@iconify/vue';
</script>
<template>
    <div class="w-full min-h-screen bg-blue-400/75 flex justify-center items-center px-4">
        <div class="bg-white w-full max-w-[500px] p-8 rounded-2xl shadow-lg text-gray-900">
            <div class="w-full">
                <Icon class="w-32 h-32 mx-auto text-gray-600" icon="mdi:user-circle" />
            </div>
            <div class="text-center text-3xl font-bold mb-6">
                Login
            </div>
            <div>
                <div class="mb-3">
                    <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input id="email" type="email" class="bg-gray-100 w-full h-10 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                </div>
                <div class="mb-10">
                    <label for="password" class="block text-sm font-medium text-gray-700 mb-1">Password</label>
                    <input id="password" type="password" class="bg-gray-100 w-full h-10 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                </div>
                <div>
                    <button class="w-full py-3 bg-blue-500 text-base font-medium text-white text-center rounded-3xl hover:bg-blue-500/90 focus:outline-none focus:ring-4 focus:ring-blue-500/50 transition-colors delay-75 duration-200 ease-in-out">Login</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import NavbarVue from './components/Navbar.vue';
import SidebarNavVue from './components/SidebarNav.vue';
import TopbarNavVue from './components/TopbarNav.vue';

const toggle = ref(false)

function onToggle() {
  toggle.value = !toggle.value

  const content = document.getElementById('content');
  (toggle.value) ? content.classList.add('active') : content.classList.remove('active')
}
function onToggleResponsive() {
  if(window.matchMedia('screen and (max-width: 1024px)').matches) {
    onToggle()
  }
}
</script>
<template>
  <div id="wrapper" class="relative">
    <!-- sidebar -->
    <SidebarNavVue 
    :toggle="toggle" 
    @click-toggle="onToggle" 
    @click-toggle-responsive="onToggleResponsive" 
    />
    <!-- // sidebar -->
    <main id="content" class="content-main bg-[#f5f5f5]">
      <!-- topbar -->
      <TopbarNavVue 
      @click-toggle="onToggle" 
      />
      <!-- //topbar -->

      <!-- Router View -->
      <router-view></router-view>
      <!-- //Router View -->
    </main>
  </div>
</template>
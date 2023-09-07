<script setup lang="ts">
import { onMounted } from 'vue';
import Mobile from './screens/Mobile.vue'
import Desktop from './screens/Desktop.vue'

onMounted(() => {
  document.body.className = 'font-karla bg-grayish-blue/25'
})
</script>

<template>
  <Mobile class="desktop:hidden"></Mobile>
  <Desktop class="hidden desktop:flex"></Desktop>
</template>
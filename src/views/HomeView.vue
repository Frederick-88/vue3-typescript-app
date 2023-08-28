<script setup lang="ts">
import CompositionApiView from "@/components/CompositionApiView.vue";

// const onClick = (event: Event) => {
const onClick = () => {
  console.log("clicked");
};
</script>

<template lang="pug">
.home-container 
  .header 
    h1.header-title Welcome to Vue3 - Composition API Typescript Page
    h3.header-subtitle.mt-2 By Frederick Chen

    VBtn(variant="outlined" color="indigo-darken-2" href="https://github.com/Frederick-88/vue3-typescript-app" target="_blank").mt-5 Check Github Source Code
  
  hr.my-8

  .content
    CompositionApiView
</template>

<style lang="scss"></style>

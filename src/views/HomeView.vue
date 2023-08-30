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
    h1.header-title Vue3 - Composition API Typescript TodoList App
    h3.header-subtitle.mt-2
      | By&nbsp;
      a.text-blue-darken-2.font-italic(href="https://www.linkedin.com/in/frederick-chen" target="_blank") Frederick Chen

    h4.header-subtitle--small.mt-2.font-weight-medium.font-italic
      | API Integrated >&nbsp;
      a.text-blue-darken-2(href="https://jsonplaceholder.typicode.com/" target="_blank") https://jsonplaceholder.typicode.com

    VBtn(variant="outlined" color="indigo-darken-2" href="https://github.com/Frederick-88/vue3-typescript-app" target="_blank").mt-5 Check Github Source Code
  
  hr.my-8

  .content
    CompositionApiView
</template>

<style lang="scss">
.home-container {
  @media screen and (max-width: 600px) {
    .header {
      .header-title {
        font-size: 1.25rem;
      }

      .header-title {
        font-size: 1.25rem;
      }

      .header-subtitle {
        font-size: 1rem;
      }

      .header-subtitle--small {
        display: none;
      }
    }
  }
}
</style>

<script setup lang="ts"></script>

<template lang="pug">
main.app
  section.page-container
    RouterView
</template>

<style lang="scss">
.app {
  min-height: 100vh;
  padding: 80px;

  @media screen and (max-width: 600px) {
    padding: 30px;
  }
}
</style>

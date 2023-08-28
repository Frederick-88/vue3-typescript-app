<template>
  <div class="options-api__container">
    <router-link class="nav" to="/">Back to Home</router-link>
    <h1 class="title">Options API View</h1>

    <div class="content">
      <p>{{ name }} - {{ age }}</p>
      <button @click="changeName('Zelda')">Change Name</button>
      <button @click="changeAge(30)">Change Age</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { mapStores } from "pinia";
import { useGeneralStore } from "@/stores/general";

export default defineComponent({
  name: "App",
  components: {},
  data() {
    return {
      name: "Link",
      age: 25 as number | string,
    };
  },
  methods: {
    changeName(name: string) {
      this.name = name;
      return name;
    },
    changeAge(age: number | string) {
      this.age = age;
      return age;
    },
  },
  // computed: {
  //   ...mapStores(useGeneralStore)
  // },
  // watch: {},
  // onMounted(() => {
  //   console.log(this.generalStore);
  // })
});
</script>

<style lang="scss">
.options-api__container {
  .title {
    text-decoration: underline;
  }
}
</style>

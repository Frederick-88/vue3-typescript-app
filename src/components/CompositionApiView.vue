<script setup lang="ts">
import { useGeneralStore } from "@/stores/general";
import { onMounted } from "vue";
import { type ITodoObj } from "@/types/index";

const generalStore = useGeneralStore();

const getTodoById = (id: number) => {
  generalStore.getTodoById(id);
};

onMounted(() => {
  generalStore.getTodoList();
});
</script>

<template>
  <div class="composition-api-v2__container">
    <div class="todo-box__list v-row">
      <VCol
        v-for="(item, index) in generalStore.todoList"
        :key="index"
        cols="4"
        class="pa-3"
      >
        <VCard class="todo-box">
          <VImg
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            height="200px"
            cover
          />

          <VCardTitle>Todo Title: {{ item.title }}</VCardTitle>
          <VCardSubtitle
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna
            aliqua.</VCardSubtitle
          >
          <VCardSubtitle class="mt-6 font-weight-medium"
            >Status:
            {{ item.completed ? "Completed" : "Not Completed" }}</VCardSubtitle
          >

          <VCardActions>
            <VBtn
              color="indigo-darken-2"
              variant="text"
              @click="getTodoById(item.id)"
              >See More</VBtn
            >
          </VCardActions>
        </VCard>
      </VCol>
    </div>
  </div>
</template>

<style lang="scss">
.composition-api-v2__container {
  .todo-box {
    box-shadow: none;
    border: 1px solid $grey1;

    &:hover {
      box-shadow: 0 0 10px rgba($black, 0.3);
    }
  }
}
</style>

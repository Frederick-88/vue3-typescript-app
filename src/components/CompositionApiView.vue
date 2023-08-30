<script setup lang="ts">
import { onMounted, ref } from "vue";
import { type ITodoObj } from "@/types/index";

import { useGeneralStore } from "@/stores/general";
import Modal from "@/components/children/Modal.vue";

const generalStore = useGeneralStore();

const isShowModal = ref(false);

const getTodoById = async (id: number) => {
  await generalStore.getTodoById(id);
  isShowModal.value = true;
};

const hideModal = () => {
  generalStore.removeSelectedTodo();
  isShowModal.value = false;
};

onMounted(() => {
  generalStore.getTodoList();
});
</script>

<template>
  <div class="composition-api-v2__container">
    <span v-if="generalStore.isLoading" class="loader-text">Loading ...</span>
    <div v-else class="todo-box__list v-row">
      <VCol
        v-for="(item, index) in generalStore.todoList"
        :key="index"
        cols="12"
        sm="6"
        md="4"
        lg="3"
        class="pa-3"
      >
        <VCard class="todo-box">
          <VImg
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            height="200px"
            cover
          />

          <VCardTitle>Todo Title: {{ item.title }}</VCardTitle>
          <VCardSubtitle>{{ item.description }}</VCardSubtitle>
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

    <Modal :is-show="isShowModal" @close="hideModal" />
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

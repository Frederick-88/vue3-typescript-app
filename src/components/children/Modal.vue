<script setup lang="ts">
import { computed } from "vue";
import { useGeneralStore } from "@/stores/general";

const generalStore = useGeneralStore();

const props = defineProps({
  isShow: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits<{
  close: [];
}>();

const modalModel = computed({
  get() {
    return props.isShow;
  },
  set(value) {
    if (!value) {
      emit("close");
    }
  },
});

const getTodoTitle = computed<string>(() => {
  return `Todo Title: ${generalStore.selectedTodo.title}`;
});
</script>

<template>
  <v-dialog
    v-model="modalModel"
    transition="dialog-bottom-transition"
    width="600px"
    maxWidth="90%"
  >
    <v-card>
      <v-toolbar color="indigo-darken-2" :title="getTodoTitle"></v-toolbar>
      <v-card-text class="pa-12">
        <h6 class="text-h6 font-weight-bold">Details</h6>
        <hr class="my-5" />
        <p class="mb-2">Id: {{ generalStore.selectedTodo.id }}</p>
        <p class="mb-2">UserId: {{ generalStore.selectedTodo.userId }}</p>
        <p>Description: {{ generalStore.selectedTodo.description }}</p>
      </v-card-text>
      <v-card-actions class="justify-end">
        <v-btn variant="text" @click="emit('close')">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style scoped></style>

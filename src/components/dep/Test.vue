<script setup lang="ts">
import { ref, computed, onMounted, watch } from "vue";
import type { PropType } from "vue";
import { type ITodoObj } from "@/types/index";

let testDefine: string | number = 1;
let itemList: string[] = ["item-01", "item-02", "item-03"];

// ---
const props = defineProps({
  selectedTodo: {
    type: Object as PropType<ITodoObj>,
    default: () => {},
  },
  isShow: {
    type: Boolean,
    default: false,
  },
});

// ---
const emit = defineEmits<{
  (e: "click"): void;
}>();

// ---
const name = ref("Link");
const numberAge = ref(25);
const age = ref<string | number>(25);

// ---
const doubleAgeComputed = computed<number>(() => {
  return numberAge.value * 2;
});

// ---
const changeName = (value: string) => {
  emit("click");
  name.value = value;
};
const changeAge = (value: number | string) => {
  emit("click");
  age.value = value;
};

// ---
const doubleAgeWatch = ref<number>(0);
watch(numberAge, (newVal) => {
  doubleAgeWatch.value = newVal * 2;
});

// ---
onMounted(() => {});
</script>

<template>
  <div class="test-page">
    <p>{{ name }} - {{ age }}</p>
    <p>{{ doubleAgeComputed }}</p>
    <button @click="changeName('Zelda')">Change Name</button>
    <button @click="changeAge(30)">Change Age</button>
  </div>
</template>

<style lang="scss"></style>

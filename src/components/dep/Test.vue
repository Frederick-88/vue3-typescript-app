<script setup lang="ts">
import { ref, computed, onMounted, watch } from "vue";
import type { PropType } from "vue";
import { type ITodoObj } from "@/types/index";

let testDefine: string | number = 1;
let itemList: string[] = ["item-01", "item-02", "item-03"];
let person: { name: string; age: number; working: boolean } = {
  name: "John",
  age: 21,
  working: false,
};

// ---
export interface Props {
  isShow: boolean;
  selectedTodo: ITodoObj;
}

const props = withDefaults(defineProps<Props>(), {
  isShow: false,
  selectedTodo: () => {
    return {
      userId: -1,
      id: -1,
      title: "",
      description: "",
      completed: false,
    };
  },
});

// --- Optional Props Definition
// const props = defineProps({
//   selectedTodo: {
//     type: Object as PropType<ITodoObj>,
//     default: () => {},
//   },
//   isShow: {
//     type: Boolean,
//     default: false,
//   },
// });
// ---

const emit = defineEmits<{
  // --- note: "?" so it become okay if we dont pass any value
  // (e: "click", event: Event): void;
  (event: "click", value?: string): void;
}>();

// ---
const name = ref("Link");
const numberAge = ref(25);
const age = ref<string | number>(25);

// ---
// means should only return number
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

watch(
  () => props.selectedTodo,
  (newVal) => {
    console.log(newVal, "new selected todo");
  }
);

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

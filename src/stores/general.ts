import { defineStore } from "pinia";
import TodoAPI from "@/apis/todo";

import { type ITodoObj } from "@/types/index";

export const useGeneralStore = defineStore({
  id: "general",
  state: () => ({
    todoList: [] as ITodoObj[],
    selectedTodo: {
      userId: -1,
      id: -1,
      title: "",
      completed: false,
    } as ITodoObj,
  }),
  getters: {},
  actions: {
    async getTodoList() {
      try {
        const response = await TodoAPI.fetchTodoList();
        const data = response?.data || [];
        const formattedData = data.slice(0, 20);

        this.todoList = formattedData;
      } catch (error) {
        console.error("error occured.", error);
      }
    },
    async getTodoById(id: number | string) {
      try {
        const response = await TodoAPI.fetchTodoById(id);

        this.selectedTodo = response.data;
      } catch (error) {
        console.error("error occured.", error);
      }
    },
    setSelectedTodo(todo: ITodoObj) {
      this.selectedTodo = todo;
    },
    removeSelectedTodo() {
      this.selectedTodo = { userId: -1, id: -1, title: "", completed: false };
    },
  },
});

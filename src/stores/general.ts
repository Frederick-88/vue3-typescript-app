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
      description: "",
      completed: false,
    } as ITodoObj,
    isLoading: false,
  }),
  getters: {},
  actions: {
    async getTodoList() {
      this.setIsLoading(true);

      try {
        const response = await TodoAPI.fetchTodoList();
        const data = response?.data || [];
        let formattedData = data.slice(0, 20);

        formattedData.forEach((item: ITodoObj) => {
          item.description =
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
        });

        this.todoList = formattedData;
      } catch (error) {
        console.error("error occured.", error);
      }

      this.setIsLoading(false);
    },
    async getTodoById(id: number | string) {
      try {
        const response = await TodoAPI.fetchTodoById(id);
        let data = response.data;
        data.description =
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

        this.setSelectedTodo(data);
      } catch (error) {
        console.error("error occured.", error);
      }
    },
    setSelectedTodo(todo: ITodoObj) {
      this.selectedTodo = todo;
    },
    removeSelectedTodo() {
      this.selectedTodo = {
        userId: -1,
        id: -1,
        title: "",
        description: "",
        completed: false,
      };
    },
    setIsLoading(value: boolean) {
      this.isLoading = value;
    },
  },
});

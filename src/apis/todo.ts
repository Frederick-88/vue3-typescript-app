import axios from "axios";

const fetchTodoList = async () => {
  return await axios({
    method: "GET",
    url: "https://jsonplaceholder.typicode.com/todos",
  });
};

const fetchTodoById = async (id: number | string) => {
  return await axios({
    method: "GET",
    url: `https://jsonplaceholder.typicode.com/todos/${id}`,
  });
};

export default { fetchTodoList, fetchTodoById };

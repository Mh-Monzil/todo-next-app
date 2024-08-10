"use client";
import TodoList from "@/Components/TodoList";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const [todoData, setTodoData] = useState([]);

  const fetchTodos = async () => {
    const res = await axios.get(`/api`);
    setTodoData(res.data.todos);
  };

  const deleteTodo = async (id) => {
    const res = await axios.delete(`/api`, {
      params: { mongoId: id },
    });
    toast.success(res.data.message);
    fetchTodos();
  };

  const completeTodo = async (id) => {
    const res = await axios.put(
      `/api`,
      {},
      {
        params: { mongoId: id },
      }
    );
    toast.success(res.data.message);
    fetchTodos();
  };

  console.log(todoData);
  useEffect(() => {
    fetchTodos();
  }, []);

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData((form) => ({ ...form, [name]: value }));
    console.log(formData);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("api", formData);

      toast.success(response.data.message);
      setFormData({
        title: "",
        description: "",
      });
      fetchTodos();
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <main>
      <ToastContainer theme="dark" />
      <h1 className="text-5xl font-semibold bg-gradient-to-r from-[crimson] to-[tomato] text-transparent bg-clip-text w-fit mx-auto my-6">
        TODO Next App
      </h1>

      <form
        onSubmit={onSubmitHandler}
        className="flex items-start flex-col gap-2 w-[80%] max-w-[600px] mt-24 px-2 mx-auto text-black"
      >
        <input
          value={formData.title}
          onChange={onChangeHandler}
          type="text"
          name="title"
          placeholder="Enter Title"
          className="px-3 py-2 border-2 w-full"
        />
        <textarea
          value={formData.description}
          onChange={onChangeHandler}
          name="description"
          placeholder="Enter Description"
          className="px-3 py-2 border-2 w-full"
        ></textarea>
        <button
          type="submit"
          className="bg-gradient-to-r from-[crimson] to-[tomato] px-11 py-3 text-white"
        >
          Add Todo
        </button>
      </form>

      {/* table  */}

      <div className="relative overflow-x-auto mt-24 w-[80%] mx-auto">
        <table className="w-full text-sm border-2  text-center">
          <thead className="text-xs uppercase bg-black text-white  border-b-2 border-b-gray-600">
            <tr>
              <th scope="col" className="px-6 py-3">
                Id
              </th>
              <th scope="col" className="px-6 py-3">
                start
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Status
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {todoData.map((todo, idx) => (
              <TodoList
                key={idx}
                todo={todo}
                id={idx}
                deleteTodo={deleteTodo}
                completeTodo={completeTodo}
              />
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

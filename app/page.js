'use client'
import TodoList from "@/Components/TodoList";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

export default function Home() {

  const [formData, setFormData] = useState({
    title: "",
    description: "",
  })

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData(form => ({...form, [name]: value}));
    console.log(formData);
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      
      toast.success("Success")
    } catch (error) {
      toast.error(error)
    }
  }

  return (
    <main>
      <ToastContainer theme="dark" />
      <h1 className="text-5xl font-semibold bg-gradient-to-r from-[crimson] to-[tomato] text-transparent bg-clip-text w-fit mx-auto my-6">
        TODO Next App
      </h1>

      <form onSubmit={onSubmitHandler} className="flex items-start flex-col gap-2 w-[80%] max-w-[600px] mt-24 px-2 mx-auto text-black">
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

      <div className="relative overflow-x-auto mt-24 w-[60%] mx-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Id
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
            </tr>
          </thead>
          <tbody>
            <TodoList />
          </tbody>
        </table>
      </div>
    </main>
  );
}

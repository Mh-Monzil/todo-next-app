export default function Home() {
  return (
    <main>
      <h1 className="text-5xl font-semibold bg-gradient-to-r from-[crimson] to-[tomato] text-transparent bg-clip-text w-fit mx-auto my-6">
        TODO Next App
      </h1>

      <form className="flex items-start flex-col gap-2 w-[80%] max-w-[600px] mt-24 px-2 mx-auto">
        <input
          type="text"
          name="title"
          placeholder="Enter Title"
          className="px-3 py-2 border-2 w-full"
        />
        <textarea
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
    </main>
  );
}

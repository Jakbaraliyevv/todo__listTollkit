import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { deletData, editData, getdata } from "../../redux/todoSlice";
function TodoComponents() {
  const { data } = useSelector((state) => state.todoSlice);

  const dispatch = useDispatch();

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();

  const submit = (e) => {
    dispatch(getdata(e));
    reset();
  };

  const [newValue, setNewvalue] = useState("");

  return (
    <section className="w-[60%] mt-2 m-auto">
      <div className=" flex flex-col gap-[20px] justify-center items-center">
        <h1 className="text-2xl text-slate-950"> To Do List</h1>
        <input
          className="border-[1px] border-gray-500 w-[60%] rounded-[5px] outline-none pl-2 pr-2 h-[30px] text-gray-700"
          type="search"
          placeholder="Search"
        />

        <form
          onSubmit={handleSubmit(submit)}
          className="w-[60%] border-[1px] border-gray-500 h-[30px] rounded-md"
        >
          <div className="w-[100%] h-[100%]">
            <input
              {...register("todo", { required: "Iltimos ma'lumot kiriting" })}
              className="w-[80%] h-[!100%] pl-2 outline-none rounded-md text-gray-700"
              type="text"
              placeholder="Enter text"
            />
            <button
              className="w-[20%] h-[100%] bg-green-500 outline-none rounded-tr-md rounded-br-md border-none text-white "
              type="submit"
            >
              Add
            </button>
          </div>
          {errors.todo && <p className="text-red-600">{errors.todo.message}</p>}
        </form>

        {data.map((value) => (
          <div
            key={value.id}
            className="w-[60%] h-[30px] flex items-center justify-between  pl-2 pr-1 border-gray-500 border-[1px] rounded-md "
          >
            {value.isActive ? (
              <input
                value={newValue}
                name="newData"
                onChange={setNewvalue((e) => e.target.value)}
              />
            ) : (
              <p className="text-[16px] text-gray-500">{value.todo}</p>
            )}
            <div className="flex items-center gap-1">
              <button
                onClick={() =>
                  dispatch(editData({ id: value.id, list: newValue }))
                }
                className="w-[50px] bg-green-500 text-[12px] text-white border-none outline-none h-[24px] rounded-md"
              >
                Edit
              </button>

              <button
                onClick={() => dispatch(deletData(value.id))}
                className="w-[50px] text-[12px] bg-red-500 text-white border-none outline-none h-[24px] rounded-md"
              >
                Delet
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TodoComponents;

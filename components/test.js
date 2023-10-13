"use client";
import Container from "@/components/container";
import { useState } from "react";

export default function Test({ data }) {
  //states and variables
  const [item, setItem] = useState(data[0]);

  //functions
  const handleNext = () =>
    item.id < data.length && setItem(data[Number(item.id)]);
  const handleCancel = () => setItem(data[0]);

  return (
    <Container>
      <div className="flex justify-between  ">
        <h1 className=" text-4xl font-extrabold">سلام</h1>
        <label className="border  font-bold track self-center text-black bg-white flex py-2 px-4 rounded absolute top-[-20px] left-10 ">
          {item.id} / {data?.length}
        </label>
      </div>

      <p className=" text-justify ">{item.name}</p>

      <div className="flex justify-between">
        <button
          className="p-1 px-5 border text-black bg-white rounded hover:bg-slate-100 duration-300"
          onClick={handleCancel}
        >
          انصراف
        </button>

        <div className="gap-[2px] flex">
          <button
            className="p-1 px-5 bg-black text-white rounded ring-4 ring-transparent   hover:ring-blue-200 hover:bg-blue-600  duration-300"
            onClick={handleNext}
          >
            بعدی
          </button>
        </div>
      </div>
    </Container>
  );
}

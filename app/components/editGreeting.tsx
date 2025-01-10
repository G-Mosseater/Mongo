"use client";

import { useState } from "react";
import Delete from "@/app/components/delete"

type Props = {
  greetingObj: {
    _id: string;
    greeting: string;
    greet: string;
  };
};

const EditGreeting = ({ greetingObj }: Props) => {
  const [greet, setGreeting] = useState(greetingObj.greet);
  const changeGreeting = () => {
    fetch("/api", {
      method: "PUT",
      body: JSON.stringify({ greet, id: greetingObj._id }),
    });
  };

  return (
    <>
    <div
      className="flex justify-center space-between  items-center  gap-2"
      key={greetingObj._id.toString()}
    >
      <input
        className=" flex align-center items-center  text-center w-auto  h-9 rounded-full "
        value={greet || ""}
        
        onChange={(e) => setGreeting(e.target.value)}
      ></input>
      <button
        className="className= text-white h-8 bg-slate-600 rounded-md active:bg-slate-700  hover:bg-slate-500 text-[13px] px-2"
        onClick={changeGreeting}
      >
        Change text
      </button>
      <Delete greetingObj={greetingObj} key={greetingObj._id.toString()}></Delete>

    </div>
    </>
  );
};
export default EditGreeting;

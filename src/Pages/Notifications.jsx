 import React from "react";
import Nav from "../Components/Nav";
import { useGlobal } from "../context";
function Notifications() {
  const {localData} = useGlobal()
  return (
    <div className="min-h-screen py-4 px-4 bg-gray-900 w-screen  ">
      <h3 className="font-bold text-[22px]">Notifications</h3>

      {/* Notifications */}
      <section className="flex mt-4 flex-col gap-4 " >
        <div className="flex items-center justify-center  gap-4 px-2 ">
          <section className="" >
            <img className="h-[60px] w-[60px] rounded-[50%] shadow-sm " src={localData.img} alt="" />
          </section>
          <section className="flex flex-col">
            <span>Welcome Note</span>
          <p className=" w-[70%] text-[18px]" >Welcome to ConnectEd {localData.name} </p>
          </section>
        </div>
      </section>
      <Nav />
    </div>
  );
}

export default Notifications;

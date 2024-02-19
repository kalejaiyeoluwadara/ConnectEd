import React from "react";
import Nav from "../Components/Nav";
import { useGlobal } from "../context";
function Notifications() {
  const {localData} = useGlobal()
  return (
    <div className="min-h-screen py-4 px-4 bg-black w-screen  ">
      <h3 className="font-bold text-[22px]">Notifications</h3>

      {/* Notifications */}
      <section className="flex mt-4 flex-col gap-4 " >
        <div className="flex px-2 ">
          <p>Welcome to ConnectEd {localData.name} </p>
        </div>
      </section>
      <Nav />
    </div>
  );
}

export default Notifications;

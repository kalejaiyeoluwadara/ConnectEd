import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { GoLink } from "react-icons/go";
function EditProfile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Add logic to update user profile data
    console.log("Updating profile...");
  };

  return (
    <div className="h-screen w-screen bg-black flex justify-center items-center">
      <div className=" p-8 rounded-lg shadow-md max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-semibold">Edit Profile</h1>
          <button
            className="text-gray-600"
            onClick={() => window.history.back()}
          >
            <AiOutlineClose size={24} />
          </button>
        </div>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-1 font-bold">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder=""
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border bg-black border-gray-600  rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="bio" className="block mb-1 font-bold">
              Bio
            </label>
            <textarea
              id="bio"
              placeholder="Brief description"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="w-full border bg-black border-gray-600 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
              rows="4"
            ></textarea>
          </div>
          <div className="mb-4 flex items-center gap-2 ">
            <label htmlFor="email" className="block mb-1 font-medium">
              <CiLocationOn className="opacity-[0.7]" size={20} />
            </label>
            <input
              type="email"
              id="email"
              placeholder="hall name"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border bg-black border-gray-600  rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <h3 className="font-bold">Social Accounts</h3>
            <section className="flex flex-col gap-2 my-3">
              <div className="flex items-center gap-2">
                <GoLink size={20} />
                <input
                  type="email"
                  className="w-full border bg-black border-gray-600  rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="flex items-center gap-2">
                <GoLink size={20} />
                <input
                  type="email"
                  className="w-full border bg-black border-gray-600  rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="flex items-center gap-2">
                <GoLink size={20} />
                <input
                  type="email"
                  className="w-full border bg-black border-gray-600  rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                />
              </div>
            </section>
          </div>
          <div className="flex justify-between w-full " >
            <button
              type="submit"
              className="bg-black border border-gray-400 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditProfile;

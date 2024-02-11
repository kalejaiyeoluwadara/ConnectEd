import React, { useState } from "react";
import Nav from "../Components/Nav";
import ShadowDropdown from "../Components/Dropdown";
// import
function UploadPage() {
  const [image, setImage] = useState(null);
  const [courseTitle, setCourseTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isFree, setIsFree] = useState(true);

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  const handleTitleChange = (e) => {
    setCourseTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleFreeChange = (e) => {
    setIsFree(e.target.checked);
  };

  return (
    <div className="w-screen min-h-screen bg-black flex flex-col  text-white">
      <div className="w-full max-w-md  rounded-md p-6">
        <div className="flex w-full items-center justify-center ">
          <input
            type="file"
            id="imageInput"
            accept="image/*"
            onChange={handleImageChange}
            className="mt-2 p-2 w-full  appearance-none bg-transparent border-none text-white placeholder-gray-400 focus:outline-none focus:border-none"
          />
        </div>

        <input
          type="text"
          placeholder="Course Title"
          value={courseTitle}
          onChange={handleTitleChange}
          className="bg-transparent  p-2 w-full mb-4"
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={handleDescriptionChange}
          className="bg-transparent  p-2 w-full mb-4 resize-none h-32"
        />
        <div></div>
      </div>
      <Nav />
    </div>
  );
}

export default UploadPage;

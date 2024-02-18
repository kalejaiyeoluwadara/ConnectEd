import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { GoLink } from "react-icons/go";
import { useGlobal } from "../context";
import { doc, getDoc, updateDoc,addDoc, getDocs,collection,query,where } from "firebase/firestore";
import { db } from "../firebase-config"; // Assuming db is your Firestore instance


function EditProfile() {
  const { setPage, img, localData, setLocalData } = useGlobal();
  const [name, setName] = useState(localData.name);
  const [email, setEmail] = useState(localData.email);
  const [bio, setBio] = useState("Student at Babcok University");
  const [hall,setHall] = useState();
  const [whatsapp, setWhatsapp] = useState(); // Added state for whatsapp
  const [linkedin, setLinkedin] = useState(""); // Added state for linkedin
  // console.log(localData);
  // const handleFormSubmit = async () => {
  //   try {
  //     // Query Firestore to get the user document by ID
  //     const userDocRef = doc(db, "users", img.id);
  //     console.log("User document reference:", userDocRef.path); // Debug log
  //     const userDocSnapshot = await getDoc(userDocRef);
  //     console.log("User document snapshot:", userDocSnapshot.data());
  //     if (userDocSnapshot.exists()) {
  //       // If user document exists, update its fields
  //       await updateDoc(userDocRef, {
  //         name: name || userDocSnapshot.data().name,
  //         description: bio || userDocSnapshot.data().description,
  //         email: email || userDocSnapshot.data().email,
  //         whatsapp: whatsapp || userDocSnapshot.data().whatsapp, // Update whatsapp
  //         linkedin: linkedin || userDocSnapshot.data().linkedin, // Update linkedin
  //         // Update other fields similarly
  //       });

  //       console.log("Profile updated successfully!");
  //     } else {
  //       console.log("User not found in the database.");
  //     }
  //   } catch (error) {
  //     console.error("Error updating profile:", error.message);
  //   }
  // };

    const userInfo = {
      name: name || localData.name,
      img: localData.img,
      email: localData.email,
      id: localData.id,
      whatsapp: whatsapp,
      linkedin: linkedin,
      hall: hall ,
      // posts: [],
    };
 const handleAddUser = async (user) => {
   // Check if the document with the given ID exists
   const usersCollection = collection(db, "users");
   const userQuery = query(usersCollection, where("id", "==", user.id));
   const querySnapshot = await getDocs(userQuery);

   if (querySnapshot.empty) {
     // If the document doesn't exist, add it to the collection
     await addDoc(collection(db, "users"), {
       name: user.name,
       id: user.id,
       description: user.description || "",
       img: user.img ,
       whatsapp: user.whatsapp || "",
       linkedin: user.linkedin || "",
       email: user.email || "",
       hall: user.hall || "Babcock, Ogun",
      //  posts: user.posts || [],
     });
   } else {
     console.log("User with this ID already exists.");
     //Write code to delete former data then add new data
   }
 };
 const handleFormSubmit =() =>{
  handleAddUser(userInfo);
  setPage('profile')
 }
// const updateUser = async (id,age) =>{
// const userDoc = doc(db,"ages",id);
//   const newFields = {age:age+1}
//   await updateDoc(userDoc,newFields)
// }
  return (
    <div className="h-screen w-screen bg-black sm:pt-40 flex justify-center items-center">
      <div className=" p-8 rounded-lg shadow-md max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-semibold">Edit Profile</h1>
          <button
            className=" hover:text-white transition-all text-gray-600"
            onClick={() => {
              setPage("profile");
            }}
          >
            <AiOutlineClose size={24} />
          </button>
        </div>
        <div onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-1 font-bold">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder={img.id}
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
          <div className="flex flex-col items-start mb-4 gap-2">
            <label htmlFor="bio" className="block mb-1 font-bold">
              Whatsapp number
            </label>
            <input
              type="text"
              value={whatsapp}
              onChange={(e) => {
                setWhatsapp(e.target.value);
              }}
              className="w-full border bg-black border-gray-600  rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <h3 className="font-bold">Social Accounts</h3>
            <section className="flex flex-col gap-2 my-3">
              <div className="flex items-center gap-2">
                <GoLink size={20} />
                <input
                  type="text"
                  value={linkedin}
                  onChange={(e) => {
                    setLinkedin(e.target.value);
                  }}
                  placeholder="Linkedin Link"
                  className="w-full border bg-black border-gray-600  rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="flex items-center gap-2">
                <GoLink size={20} />
                <input
                  type="text"
                  placeholder="X"
                  className="w-full border bg-black border-gray-600  rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="flex items-center gap-2">
                <GoLink size={20} />
                <input
                  type="text"
                  className="w-full border bg-black border-gray-600  rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                />
              </div>
            </section>
          </div>
          <div className="flex justify-between sm:mt-6 mt-3 w-full ">
            <button
              onClick={() => {
                setPage("profile");
              }}
              type="submit"
              className="bg-black border border-gray-400 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
            >
              Cancel
            </button>

            <button
              onClick={handleFormSubmit}
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;

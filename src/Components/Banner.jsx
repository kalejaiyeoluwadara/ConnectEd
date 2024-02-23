import React,{useState,useEffect} from 'react'

function Banner() {
    const [modal,setModal] = useState(true)
  return (
    <>
      modal && {
        <div className="w-full z-50  fixed top-0 left-0 flex items-center justify-center ">
          <div className="flex flex-col rounded-[12px] px-3 mt-3 bg-blue-400 gap-2 py-2 ">
            <p className="text-end text-[20px] ">x</p>
            <p className="text-[16px] w-[300px] ">
              Edit your profile, let others know more about you, include your
              social accounts and numbers.
            </p>
            <section className="flex justify-center">
              <button className="px-4 py-1 border border-white rounded-[16px]  ">
                Edit Profile
              </button>
            </section>
          </div>
        </div>
      }
    </>
  );
}

export default Banner

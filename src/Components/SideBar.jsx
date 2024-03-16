import React from 'react'
import SearchComp from './Search'
function SideBar() {
  return (
    <div className="  sm:flex flex-col fixed px-6 right-4 top-2 bg-gray-900 h-screen w-[400px] ">
      <SearchComp />
      <div className="bg-gray-800 px-4 py-2 rounded-[15px] ">
        <h1 className="font-[600] text-[20px]   ">Subscribe to Premium</h1>
        <p>
          Subscribe to unlock new features and if eligible, receive a share of
          ads revenue.
        </p>
        <button className="bg-blue-500 text-[16px] px-4 py-1 mt-2 text-white rounded-[20px]">
          Subscribe
        </button>
      </div>
      <footer className="px-4 py-4 ">© 2024 Team ConnectEd.</footer>
    </div>
  );
}

export default SideBar

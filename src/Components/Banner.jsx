import React from 'react'

function Banner() {
  return (
    <div className='w-screen  fixed top-0 left-0 flex items-center justify-center '>
      <div className='flex flex-col px-3 bg-blue-400 py-2 '>
        <p className='text-start'>cancel</p>
        <p>Edit your profile, let others know more about you, include your social accounts and numbers</p>
        <section className=''>
        <button className='px-2 py-2 rounded-[16px]  '>Edit Profile</button>
        </section>
            
      </div>
    </div>
  )
}

export default Banner

import React from 'react'
import { useGlobal } from '../context'
function Modal() {
  return (
    <div className='absolute mt-4 z-50  w-screen flex items-center justify-center ' >
      <div className='bg-blue w-[100px] text-center px-4 rounded-[8px] bg-blue-400 py-2 font-medium ' >Modal</div>
    </div>
  )
}

export default Modal

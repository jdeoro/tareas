import React from 'react'
import { IoLogoNodejs } from "react-icons/io5";

export const Titulo = () => {
  return (
      <>
          <IoLogoNodejs
              className="mt-2 ml-2"
              size={30} width={30} />

          <div className='flex flex-1 justify-center'>
              <span>TAREAS</span>
          </div>

      </>
  )
}

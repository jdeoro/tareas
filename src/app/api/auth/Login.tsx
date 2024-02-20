
import React, { useState } from 'react'
import { DiGroovy } from 'react-icons/di'
import { IoPeopleCircle } from 'react-icons/io5'
import { useGlobalstate} from '@/store/global/storeState'
import axios from 'axios'

export const Login = () => {

  const islogin = useGlobalstate( state => state.isLogin)
  const user = useGlobalstate( state => state.loginPerson)

  const [  credentials , setCredentials] = useState({
    nombre:"",
    password:""
  })

  const handleChange = (e : React.ChangeEvent<HTMLInputElement> ) => {
  
    setCredentials( {
        ...credentials,
        [e.target.name] :  e.target.value 
            
    } )

  }  
  const handleSubmit = async  (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const login = await axios.post("api/login",credentials)

    console.log(login)

  }


  return (
      <>
          <form  className="flex h-[600px] flex-1 flex-col justify-center px-6 py-12 lg:px-8" onSubmit={handleSubmit}>
              <div className="flex h-[600px] flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                      <IoPeopleCircle
                          size={50} width={60}
                          className=' items-center text-violet-400' />

                      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                          Ingreso al sistema
                      </h2>
                  </div>

                  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                      <div className="space-y-6" >
                          <div>
                              <label htmlFor="usuario" className="block text-sm font-medium leading-6 text-gray-900">
                                  Usuario
                              </label>
                              <div className="mt-2">
                                  <input
                                      id="usuario"
                                      name="usuario"
                                      type="text"
                                      onChange={ handleChange}
                                      required
                                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                  />
                              </div>
                          </div>

                          <div>
                              <div className="flex items-center justify-between">
                                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                      Password
                                  </label>
                                  <div className="text-sm">
                                      <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                          Forgot password?
                                      </a>
                                  </div>
                              </div>
                              <div className="mt-2">
                                  <input
                                      id="password"
                                      name="password"
                                      type="password"
                                      autoComplete="current-password"
                                      onChange={ handleChange}                                      
                                      required
                                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                  />
                              </div>
                          </div>

                          <div>
                              <button
                                  type="submit"
                                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                              >
                                  Sign in
                              </button>
                          </div>
                      </div>

                  </div>
              </div>

          </form>

      </>

  )
}

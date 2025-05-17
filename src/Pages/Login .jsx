import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ChangeRouter } from '../store/LoginSlice';

const Login  = () => {
  // use the login silce --->>>>
  let loginSlice = useSelector((slice)=> slice.Login)
  // console.log(loginSlice)
  let dispatch = useDispatch();

  let emailRef = useRef();
  let passRef = useRef();

  let navigate =  useNavigate()


  let arr = JSON.parse(localStorage.getItem('arr'))
  // console.log(arr)

  const handleSubmit = (e)=>{
    e.preventDefault()
    let obj = {
      email : emailRef.current.value    ,
      pass : passRef.current.value
    }
    if(!obj.email || !obj.pass){
      return toast.info("Please enter the all feilds",{position :'top-center'})
    }

    let arrFind = arr.find((item)=> item.email === obj.email)
    // console.log(arrFind) 
    console.log(obj)
    console.log("Hello")
    if(arrFind){
      if(arrFind.pass === obj.pass){
        return (
          toast.success("User Login  succesfully"),
          localStorage.setItem(
            "Login",
            JSON.stringify({ email: obj.email, Login: true })
          ),
          dispatch(ChangeRouter({ email: obj.email, Login: true }))
          // navigate('/products')
        );
        
      }
      else{
        toast.info("Wrong password!")
      }
    }
    else{
      toast.warning("You d'nt have any account ,Please  first signUp the account")
    }

  }

  return (
    <section className="">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto mt-15 lg:py-0">
       
        <div className="w-full bg-[#00000075] rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-black">Your email</label>
                <input ref={emailRef} type="email" name="email" id="email" className=" border border-gray-300 text-gray-300 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-black">Password</label>
                <input ref={passRef} type="password" name="password" id="password" placeholder="••••••••" className=" border border-gray-300 text-black rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5   dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                 
                  <div className="ml-3 text-sm">
                  </div>
                </div>
               
              </div>
              <button onClick={(e)=>handleSubmit(e)} type="submit" className="w-full text-white border-2 border-r-gray-100 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>

              <Link to={'/signUp'} className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login 

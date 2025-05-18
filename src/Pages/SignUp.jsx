import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {Link} form "react-router-dom"
const SignUp = () => {
  const [arr, setarr] = useState(JSON.parse(localStorage.getItem('arr'))||[]); ///
  let nameRef = useRef();
  let passRef = useRef();
  let emailRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let obj = {
      Name: nameRef.current.value,
      email: emailRef.current.value,
      pass: passRef.current.value,
    };
    console.log(obj);

    if (!obj.Name || !obj.pass || !obj.email) {
      return alert("Please fill the all fields");
    }

    let find = arr.find((item) => item.email === obj.email);
    if (find) {
      return alert("User already registered");
    } else {
      let copyArr = [...arr,obj]
      console.log(copyArr)
      setarr(copyArr)
      localStorage.setItem("arr", JSON.stringify(copyArr));
      return navigate('/login')
    }
  };

  return (
    <div>
      <section className="">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto  mt-15 lg:py-0">
          <div className="w-full rounded-lg shadow dark:border  bg-[#00000052] md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create an account
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label
                    htmlFor="confirm-password"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    UserName
                  </label>
                  <input
                    ref={nameRef}
                    type="text"
                    id="confirm-password"
                    placeholder="Enter the Name "
                    className=" border text-white  text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Your email
                  </label>
                  <input
                    ref={emailRef}
                    type="email"
                    name="email"
                    id="email"
                    className=" border border-gray-300 text-white text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="name@company.com"  
                    required 

                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Password
                  </label>
                  <input
                    ref={passRef}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className=" border border-gray-300 text-white text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    required
                  />
                </div>

               
                <button
                  onClick={(e) => handleSubmit(e)}
                  type="submit"
                  className="w-full text-white border-2 border-gray-200 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Create an account
                </button>
                <p className="text-sm font-light    text-white ">
                  Already have an account?{" "}
                  <Link to={"/login"}
                    
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Login here
                  <Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;

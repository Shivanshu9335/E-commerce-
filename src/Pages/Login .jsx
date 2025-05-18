import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ChangeRouter } from '../store/LoginSlice';

const Login = () => {
  const loginSlice = useSelector((slice) => slice.Login);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const emailRef = useRef();
  const passRef = useRef();

  // Get users from localStorage
  const arr = JSON.parse(localStorage.getItem('arr')) || [];

  const handleSubmit = (e) => {
    e.preventDefault();

    const obj = {
      email: emailRef.current.value.trim(),
      pass: passRef.current.value.trim()
    };

    // Field validation
    if (!obj.email || !obj.pass) {
      return toast.info("Please enter all fields", { position: 'top-center' });
    }

    const arrFind = arr.find((item) => item.email === obj.email);

    if (arrFind) {
      if (arrFind.pass === obj.pass) {
        // Successful login
        toast.success("User logged in successfully", { position: 'top-center' });

        // Save login info in localStorage
        localStorage.setItem("Login", JSON.stringify({ email: obj.email, Login: true }));

        // Update Redux store
        dispatch(ChangeRouter({ email: obj.email, Login: true }));

        // Navigate to products page
        navigate('/products');
      } else {
        toast.error("Wrong password!", { position: 'top-center' });
      }
    } else {
      toast.warning("You don't have an account. Please sign up first.", { position: 'top-center' });
    }
  };

  return (
    <section className="">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto mt-15 lg:py-0">
        <div className="w-full bg-[#00000075] rounded-lg shadow dark:border sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-black">Your email</label>
                <input
                  ref={emailRef}
                  type="email"
                  name="email"
                  id="email"
                  className="border border-gray-300 text-gray-300 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-black">Password</label>
                <input
                  ref={passRef}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="border border-gray-300 text-black rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full text-white border-2 border-r-gray-100 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Sign in
              </button>

              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?
                <Link to="/signUp" className="font-medium text-primary-600 hover:underline dark:text-primary-500 ml-1">
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;

import { Avatar, Box, Skeleton, Typography } from '@mui/material'
import React from 'react'
import Stack from '@mui/material/Stack';
import Typed from 'typed.js'

const Home = () => {
    const el = React.useRef(null);
    React.useEffect(() => {
      const typed = new Typed(el.current, {
        strings: ["<i>I am Freelancer</i> .", "Web-developer ", '&My portfolio'],
        typeSpeed: 100,
        loop:true,
        backSpeed:50
      });

      return () => {
        // Destroy Typed instance during cleanup to stop animation
        typed.destroy();
      };
    }, []);
  return (
    <div className="text-center text-3xl text-amber-100 mt-3">
      <h1>This is Home page ! click the Ecom-shop go to the Products page </h1>

      <h2 className='text-white text-left'>
        <span ref={el} />
      </h2>
    </div>
  );
}

export default Home
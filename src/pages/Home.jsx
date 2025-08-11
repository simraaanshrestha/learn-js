import React, { useEffect, useState } from 'react'
import UseState from '../components/UseState'
import UseEffect from '../components/UseEffect'
import Loader from '../components/Loader'
import Login from '../components/Login'
import FetchData from '../components/FetchData'

const Home = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Simulate a 3 second loading time

    // return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }
  , []);
  if (loading){
    return <Loader />
  }else {
    return (
      <div>
        {/* <UseState /> */}
        {/* <UseEffect /> */}
        {/* <Login/> */}
        <FetchData/>
      </div>
    )
  }
  // return (
  //   <div>
  //     <UseState/>
  //     <UseEffect/>
  //     <Loader/>
  //   </div>
  // )
}

export default Home
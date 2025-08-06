import React, { useEffect, useState } from 'react'

const UseState = () => {
const [toggle, setToggle]= useState(true);
const [count, setCount] = useState(0);
function on(){
    setToggle(!toggle);
}
    function inc(){
        setCount(count + 1);
    }
    function dec(){
        if(count > 0)
        setCount(count - 1);
    }
    useEffect (() => {
            console.log("The component mounted ");
        }, [count]);

    console.log(count);

  return (
    <div>{count}
    <br />
    <button onClick={inc}> Increase</button>
    <button onClick={dec}> Decrease</button>
    <br />
    {toggle ? "ON" : "OFF"}
    <br />
    <button onClick={on}> Togggle</button>
    </div>
  )
}

export default UseState
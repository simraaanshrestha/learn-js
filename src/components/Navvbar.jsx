import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { Link } from 'react-router-dom';
import NavItem from './data/NavItem';
import { useTheme } from '../context/ThemeProvider';
const Navvbar = () => {
  const {theme, setTheme}= useTheme();

  const handleClick = () => {
    function handleClick(){}
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }
  return (


    <div className='nav'>
      <div className='daraz'>
        <img src="https://lzd-img-global.slatic.net/us/domino/3b870cb043c7f8a9741cbf66329e294e.png" alt="daraz" className='daraz1'
        />
        {/* <img src="/public/daraz.png" alt="" /> */}
      </div>
      <div className='nav-links'>
        <ul>
          {/* <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/movies">Movies</Link></li>
          <li><Link to="/login">Login</Link></li> */}
          {NavItem.map((item, i) => {
            return (
              <li key={i}>
                <Link to={item.to}> <item.icon/>{item.title}</Link>
              </li>
            );
          })}
          <button onClick={handleClick}>{theme}</button>
        </ul>
        <div>
          <div className="abs"><input type="text" name="" id="" placeholder='Search in Daraz' />
            {/* <div className="icon">
              <IoIosSearch className='search' />
            </div> */}
            {/* <PiShoppingCartSimpleLight className='cart' /> */}
          </div>

        </div>
      </div>

    </div>

  )
}

export default Navvbar
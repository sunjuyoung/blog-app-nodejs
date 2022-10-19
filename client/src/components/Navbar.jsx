import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../img/teddy-bear-co.png"

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='container'>
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="links">
          <Link className='link' to="/?cat=art" >ART </Link>
          <Link className='link' to="/?cat=movie" >MOVIE </Link>
          <Link className='link' to="/?cat=tech" >TECH </Link>
          <span>SUN</span>
          <span>LOGOUT</span>
          <span className='write'>
            <Link  className='link' to="/write">Write</Link>
          </span>
        </div>
      </div>
      </div>
  )
}




export default Navbar
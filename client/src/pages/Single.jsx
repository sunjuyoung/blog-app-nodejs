import React from 'react'
import { Link } from 'react-router-dom'
import Menu from '../components/Menu'
import Logo from "../img/ench.png"
const Single = () => {
  return (
    <div className='single'>
        <div className="content">
          <img src={Logo} alt="en" />
        <div className="user">
        <img src={Logo} alt="en" />
          <div className="info">
            <span>SUN</span>
            <p>Posted 2day ago</p>
          </div>

          <div className='edit'>
            <Link to={`/write?edit=2`}>
          <button class="btn btn-edit">
            <span>Edit</span>
          </button>
          </Link>
          <button class="btn btn-delete">
            <span>Delete</span>
          </button>
          </div>

        </div>
        <h1> TITLE </h1>
        <p> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type 
        </p>
        </div>

        <Menu />
    </div>
  )
}

export default Single
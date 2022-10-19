import React from 'react'
import { Link } from 'react-router-dom'
import Logo1 from "../img/ench.png"
import Logo2 from "../img/dummy3.webp"

const Home = () => {

  const posts = [
    {
      id:1,
      title:"Lorem ipsum is placeholder text commonly used in the graphic, ",
      desc: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem Ipsum Generator.",
      img : "../img/ench.png"
    },
    {
      id:2,
      title:"Lorem ipsum is placeholder text commonly used in the graphic, print, ",
      desc: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem Ipsum Generator.",
      img : {Logo2}
    },
    {
      id:3,
      title:"Lorem ipsum is placeholder text commonly used in the graphic, print, ",
      desc: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem Ipsum Generator.",
      img : "http://qnimate.com/wp-content/uploads/2014/03/images2.jpg"    
    },
  ]

  return (
    <div className='home'>
      <div className='posts'>
        {posts.map(post=>(
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="" />
            </div>
            <div className="content">
              <Link className='link' to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
                <p>{post.desc}</p>
                <button>Read More..</button>
              </Link>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Home
import React from 'react'

const Menu = () => {
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
          img : "http://qnimate.com/wp-content/uploads/2014/03/images2.jpg"    
        },
        {
          id:3,
          title:"Lorem ipsum is placeholder text commonly used in the graphic, print, ",
          desc: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem Ipsum Generator.",
          img : "http://qnimate.com/wp-content/uploads/2014/03/images2.jpg"    
        },
      ]
  return (
    <div className='menu'>
        <h1>other post you may like</h1>
        {posts.map(post=>(
            <div className="post" key={post.id}>
                <img src="" alt="" />
                <h2>{post.title}</h2>
                <button>read more</button>
            </div>
        ))}
    </div>
  )
}

export default Menu
import React from 'react'
import { NavLink } from 'react-router-dom';

const About = () => {
  return (
    <div>
        <h1>About Page</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ratione voluptatibus ipsam, atque modi distinctio provident omnis magnam, accusamus, veritatis molestias dolores neque necessitatibus amet numquam aut error veniam aperiam. Laborum dolore quas nihil odio placeat eligendi unde nostrum, corporis, sequi soluta vero suscipit, omnis dignissimos impedit laudantium pariatur vitae!
        </p>
        <button><NavLink to="/">Go back</NavLink></button>
    </div>
  )
}

export default About

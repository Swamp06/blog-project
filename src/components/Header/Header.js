import React from 'react'
import "./Header.css"

export default function Header() {
  return (
    <header>
        <div className='header_left'>
            <img src='./images/logo.png' />
        </div>
        <div className='header_right'>
            <a href='#'>Blog</a>
            <a href='#'>About</a>
            <img src='./images/search.png' />
            <button>Contact Us</button>
        </div>
    </header>
  )
}

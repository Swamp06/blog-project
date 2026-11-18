import React from 'react'
import "./Content.css"
import CardList from '../Cards/CardList/CardList'
export default function Content() {
  return (
    <>
    
    <div className='blog'>
        <span>
            OUR BLOGS
        </span>
        <h1>Find our all blogs from here</h1>
        <p>our blogs are written from very research research and well known writers writers so that  we can provide you the best blogs and articles articles for you to read them all along</p>
    </div>
    
    <CardList/>

    <div className='stories_box'>
        <h1>Get our stories delivered From us to your inbox weekly.</h1>
        <div className='input_box'>
            <input placeholder='Your Email'/>
            <button>Get started</button>
        </div>
        <span>
            Get a response tomorrow if you submit by 9pm today. If we received after 9pm will get a reponse the following day.
        </span>
    </div>

    <div className='contacts'>
        <img src='./images2/logo.png'/>
        <div className='contacts_nav'>
            <a href='#'>Home</a>
            <a href='#'>Blog</a>
            <a href='#'>About</a>
            <a href='#'>Contact Us</a>
        </div>
        <div className='social'>
            <div>FB</div>
            <div>IG</div>
            <div>LN</div>
            <div>YT</div>
        </div>
    </div>
    <span className='copy'>
        Copyright Ideapeel Inc © 2023. All Right Reserved
    </span>
    </>
  )
}

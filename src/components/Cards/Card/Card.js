import React from 'react'
import "./Card.css"
export default function Card({elem}) {
  return (
    <div className='card'>
        <div className="card_top">
            <img src={elem.image}/>
        </div>
        <div className="card_bot">
            <div className='card_info_line'>
                <span>{elem.category}</span>
                <span>{elem.date}</span>
            </div>
            <span className='card_title'>{elem.title}</span>
            <span className='card_desc'>{elem.description}</span>
            <a>Read More...</a>
        </div>
    </div>
  )
}

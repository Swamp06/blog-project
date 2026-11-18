import React from 'react'
import { articles } from '../../../data'
import Card from '../Card/Card'
import "./CardList.css"

export default function CardList() {
  return (
    <div>
        <div className="card_box">
            {articles.map(elem => {
                return(
                    <Card key={elem.id} elem={elem} />
                )
            })}
        </div>
    </div>
  )
}

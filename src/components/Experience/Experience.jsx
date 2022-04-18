import React from 'react'
import "./Experience.css"

export default function Experience({experience}) {
  return (
    <div className='more'>
    <div className="cardEducation">
    {experience.map((item)=>
    <div className="espacio" key = {JSON.stringify(item)}>
    <p className="name">💼 {item.name}</p>
            <p>{item.where}</p>
            <p className='date'>{item.date}</p>
    </div>)}
</div>
</div>
  )
}


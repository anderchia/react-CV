import React from 'react'
import './More.css'

export default function More({languages, habilities, volunteer}) {
  return (
    <div className='more'>
    <div className='idiomas'>
    <h4 className='underline'>Idiomas</h4>
      {languages.map((item) => {
        return (
          <div>
         
            <p>{item.language}</p>
          </div>
        );
      })}
    </div>
    <div className="cardInformatica">
    <h4 className='underline'>Informática</h4>
      {habilities.map((item) => {
        return (
          <div>
            <p>{item}</p>
          </div>
        );
      })}
    </div>
    <div className='voluntariado'>
    <h4 className='underline'>Voluntariado</h4>
      {volunteer.map((item) => {
        return (
          <div>
            <p>{item.name}</p>
            <p>{item.where}</p>
          </div>
        );
      })}
    </div>
  </div>
  )
}
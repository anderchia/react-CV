import React from 'react'
import './Education.scss'

export default function Education({education}) {
  return (
    <div className='more'>
    <div className="cardEducation">
      {education.map((item) => {
        return (
          <div className="espacio" key={JSON.stringify(item)}>
            <p className="name">📕 {item.name}</p>
            <p>{item.where}</p>
            <p className='date'>{item.date}</p>
          </div>
        );
      })}
    </div>
  </div>
);
};

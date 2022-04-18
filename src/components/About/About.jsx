import React from 'react'
import "./About.css"

export default function About({hero}) {
  return (
      <div>
      {hero.aboutMe.map((hero) => {
        return (
          <div className='about' key={JSON.stringify(hero)}>
            <p>{hero.info}</p>
          </div>
        );
     
      })}
      </div>

  )
    }
      
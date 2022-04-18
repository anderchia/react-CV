import React from 'react'
import "./Hero.css"

export default function Hero({hero}) {
  return (
    <div className="hero">
    <img src={hero.image} alt="{hero.name}" />
    <div className="card">
    <h2>
      {hero.name}
    </h2>
      <p>
        📧 <a href={"mailto:" + hero.email}>
        anderazp@gmail.com
        </a>
      </p>
      <p>📞  {hero.phone}</p>
      <p>💻 <a href={hero.linkedin}>
          LinkedIn
        </a></p>
      <p>💾 <a href={hero.gitHub}>
          GitHub
        </a></p>
    </div>
  </div>
);
};




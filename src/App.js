import './App.scss';
import { useState } from "react";
import { CV } from "./CV/CV";
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import More from './components/More/More';

const { hero, education, experience, languages, habilities, volunteer } = CV;

function App() {
  const [showEducation, setShowEducation] = useState(true);

  return (
    <div className="App">
    <Hero hero={hero} />
    <About hero={hero} />
    <div className='cajabotones'>
            <button
              className="custom-btn btn-4 button-84"
              onClick={() => setShowEducation(true)}
            >
              Education
            </button>
            <button
              className="custom-btn btn-4 button-84"
              onClick={() => setShowEducation(false)}
            >
              Experience
            </button>
            </div>
      <div>
        {showEducation ? (
          <Education education={education} />
        ) : (
          <Experience experience={experience} />
        )}
      </div>

    <More
    languages={languages}
    habilities={habilities}
    volunteer={volunteer}
    />
    <div className='cajaFirma'>
      <img className='firma' src='images/thumbnail_anderchianegro.png' alt="signature"/>
    </div>
</div>
  );
}

export default App;

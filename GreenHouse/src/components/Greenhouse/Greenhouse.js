import dayImage from './images/greenhouse-day.jpg';
import nightImage from './images/greenhouse-night.jpg';
import './Greenhouse.css';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

import LightSwitch from './LightSwitch';
import ClimateStats from './ClimateStats';

function Greenhouse() {
  const { themeName, setThemeName } = useContext(ThemeContext);

  return (
    <section>
      <img  className='greenhouse-img'
            src={themeName === 'day' ? dayImage : nightImage}
            alt='greenhouse' 
      />
      <LightSwitch />
      <ClimateStats />
    </section>
  );
}

export default Greenhouse;
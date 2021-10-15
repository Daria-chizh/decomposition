import React from 'react';
import InfoBlock from './InfoBlock';

// Отображение блока "Погода"
const Weather = () => (
  <InfoBlock title="Погода">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdrHdmICJLqPVsXpUlxZAvnaxdS2vth3LxqA&usqp=CAU" className="weather" />
    <span className="temperature">+17</span>
    <span className="morning">Утром +17,</span>
    <div className="afternoon">Днём + 20</div>
  </InfoBlock>
);

export default Weather;

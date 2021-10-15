import React from 'react';
import InfoBlock from './InfoBlock';
import TvItem from './TvItem';

// Отображение блока "Телепрограмма"
const Tv = () => (
  <InfoBlock title="Телепрограмма">
    <TvItem time='02:00' title='ТНТ. Best' text='THT international' />
    <TvItem time='02:15' title='Наедине со всеми' text='Первый' />
  </InfoBlock>
);

export default Tv;

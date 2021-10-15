import React from 'react';
import InfoBlock from './InfoBlock';
import EtherItem from './EtherItem';

// Отображение блока "Эфир"
const Ether = () => (
  <InfoBlock title="Эфир">
    <EtherItem img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdrHdmICJLqPVsXpUlxZAvnaxdS2vth3LxqA&usqp=CAU' title='Управление как искусство' text='Успех' />
    <EtherItem img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdrHdmICJLqPVsXpUlxZAvnaxdS2vth3LxqA&usqp=CAU' title='Ночь. Мир в это время' text='earth TV' />
  </InfoBlock>
);

export default Ether;

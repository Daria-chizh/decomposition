import React from 'react';
import InfoBlock from './InfoBlock';
import VisitedItem from './VisitedItem';

// Отображение блока "Посещаемое"
const Visited = () => (
  <InfoBlock title="Посещаемое">
    <VisitedItem title='Недвижимость' text='о сталинках' />
    <VisitedItem title='Маркет' text='люстры и светильники' />
  </InfoBlock>
);

export default Visited;

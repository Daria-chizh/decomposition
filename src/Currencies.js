import React from 'react';
import CurrencyItem from './CurrencyItem';

// Список всех валют
function Currencies(props)  {
  const { currencies } = props;
  return (
    currencies.map((item, idx) => <CurrencyItem item={item} key={idx} />)
  );
}

export default Currencies;

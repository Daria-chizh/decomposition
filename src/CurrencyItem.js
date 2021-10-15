import React from 'react';

// Отображение одной валюты
function CurrencyItem(props) {
  const { item } = props;
  return (
    <div className="currency">
      <span className="currency-title">{item.name}</span>
      <span className="currency-price">{item.price}</span>
      <span className="coefficient"> {item.percent}</span>
    </div>
  );
}

export default CurrencyItem;

import React from 'react';

// Отображение заголовка бокового рекламного блока
function AdvertItem(props) {
  return (
    <a href="#" className="link-advertising">
      <div>{props.title}></div>
    </a>
  );
}
export default AdvertItem;

import React from 'react';
import AdvertItem from './AdvertItem';

// Отображение бокового рекламного блока
function SideAdvert(props)  {
  const { advert } = props;
  return (
    <div className="advertising-body">
      <img src={advert.img} className="card-advertising" />
      <a href="#" className="link-advertising">
        <AdvertItem title={advert.text} />
      </a>
      <div>Смотрите на Яндексе и запоминайте</div>
    </div>
  );
}

export default SideAdvert;

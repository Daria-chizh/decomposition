import React from 'react';

// Основная(центральная) реклама
function CenterAdvert(props)  {
  const { poster } = props;
  return (
    <div>
      <a href="#">
        <img src={poster} className="center-advert" />
      </a>
    </div>
  );
}

export default CenterAdvert;

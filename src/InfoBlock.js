import React from 'react';

// Правила отображения заголовка
function InfoBlock(props) {
  return (
    <div className="container">
      <a href="#" className="container-link">
        <span className="title-link">{props.title}</span>
      </a>
      <div>{props.children}</div>
    </div>
  );
}

export default InfoBlock;

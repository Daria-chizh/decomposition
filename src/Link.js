import React from 'react';

// Отображение заголовка одной категории
function Link(props) {
  return (
    <a href="#" className="link-advertising">
      <span className="content-link">{props.title}</span>
    </a>
  );
}
export default Link;

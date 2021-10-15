import React from 'react';

// Отображение одной новости
function NewsItem(props) {
  const { item } = props;
  return (
    <div className="news-body">
      <img src={item.img} className="card-img" />
      <a href="#" className="link">
        <span>{item.text}</span>
      </a>
    </div>
  );
}

export default NewsItem;

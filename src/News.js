import React from 'react';
import NewsItem from './NewsItem';

// Отображение всех новостей
function News(props) {
  const { news, date } = props;
  return(
    <div className="news">
      <span className="today-info">Сейчас в СМИ</span>
      <a href="#" className="link">
        <span className="recommendation">Рекомендуем</span>
      </a>
      <span className="date">{date}</span>
      {
        news.map((item, idx) => <NewsItem item={item} key={idx} />)
      }
    </div>
  );
}

export default News;

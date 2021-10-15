import React from 'react';
import Link from './Link';

// Отображение поле поиска
function SearchBar() {
  return (
    <div>
      <div className="category">
        <Link title="Видео" />
        <Link title="Картинки" />
        <Link title="Новости" />
        <Link title="Карты" />
        <Link title="Маркет" />
        <Link title="Переводчик" />
        <Link title="Эфир" />
        <Link title="Ещё" />
      </div>
      <div className="field">
        <input type="text" className="field-input" />
        <button className="search">Найти</button>
      </div>
      <div className="prompt">Найдется всё. Например,
        <span className="prompt-word">фаза луны сегодня</span>
      </div>
    </div>
  );
}

export default SearchBar;

import React from "react";

// Отображение одного пункта в блоке "Телепрограмма"
const TvItem = (props) => (
  <div>
    <span>{props.time}</span>
    <span>{props.title}</span>
    <span className="hide">{props.text}</span>
  </div>
);

export default TvItem;

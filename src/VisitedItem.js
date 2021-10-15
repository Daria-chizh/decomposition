import React from "react";

// Отображение одного пункта в блоке "Посещаемое"
const VisitedItem = (props) => (
  <div>
    <span>{props.title} - </span>
    <span>{props.text}</span>
  </div>
);

export default VisitedItem;

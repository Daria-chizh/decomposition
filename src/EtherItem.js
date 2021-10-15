import React from "react";

// Отображение одного пункта в блоке "Эфир"
const EtherItem = (props) => (
  <div>
    <img src={props.img} />
    <span>{props.title}</span>
    <span className="hide">{props.text}</span>
  </div>
);

export default EtherItem;

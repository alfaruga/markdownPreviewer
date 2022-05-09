import React, { useState } from "react";
import "./OutputBox.css"
const outputBox = (props) => {
  return (
    <div className="OutputBox-box">
      <p>This is outputBox</p>

      <h1>{props.h1}</h1>
      <h2>{props.h2}</h2>
    <a exact href={"http://"+props.link} target="_blank">This is the link</a>
    </div>
  );
};

export default outputBox;

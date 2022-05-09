import React, { useState } from "react";
import OutputBox from "../OutputBox/OutputBox";

function InputBox() {
  const [h1Input, seth1Input] = useState("a heading element (H1 size),");
  const [h2Input, seth2Input] = useState(" a sub heading element (H2 size), ");
  const [linkInput, setlinkInput] = useState(
    "www.google.com"
  );

  const handleh1Input = (event) => {
    seth1Input(event.target.value);
  };
  const handleh2Input = (event) => {
    seth2Input(event.target.value);
  };
  const handlelinkInput = (event) => {
    setlinkInput(event.target.value);
  };
  return (
    <div>
      <p>This is input pox</p>
      <input onChange={handleh1Input} value={h1Input}></input>
      <input onChange={handleh2Input} value={h2Input}></input>
      <input onChange={handlelinkInput} value={linkInput}></input>
      
      <OutputBox h1={h1Input} h2={h2Input} link={linkInput}/>
    </div>
  );
}

export default InputBox;

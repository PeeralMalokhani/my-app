import React, { useState } from "react";
export default function TextForm(props) {
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.Text = Text;
    window.speechSynthesis.speak(msg);
  };
  const CopyText = () => {
    let text=document.getElementById("exampleFormControlTextarea1");
    text.select();
    navigator.clipboard.writeText(text.value);
  };
  const ExtraSpace = () => {
    let Newtext=Text.split(/[ ]+/);
    settext(Newtext.join(" "));
    
  };
  // It is targetted by the button 'speak':

  const Capitalize = () => {
    let newText = Text.toUpperCase();
    settext(newText);
    props.showAlert("converted to uppercase","success");
  };
  const ClrText = () => {
    let newText = "";
    settext(newText);
  };

  const ToUpperCase = () => {
    let firstChar = Text.slice(0, 1);
    let UCaseFirstchar = firstChar.toUpperCase();

    let LastChar = Text.slice(1, Text.length);
    let LCharLowerCase = LastChar.toLowerCase();

    let C_Name = UCaseFirstchar + LCharLowerCase;
    settext(C_Name);
  };
  const handleOnChange = (event) => {
    settext(event.target.value);
  };
  const [Text, settext] = useState("enter the text here");
  return (
    <>
      <div className="container"  style={{ color:props.mode==='dark'?"white":"black"}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control" style={{ backgroundColor:props.mode==='light'?"white":"grey" ,color:props.mode==='dark'?"white":"black"}}
            value={Text}
            onChange={handleOnChange}
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>

        <button className="btn btn-primary mx-1" onClick={ToUpperCase} >
          CamelCase
        </button>
        <button className="btn btn-primary mx-1" onClick={Capitalize}>
          Capitalize
        </button>
        <button className="btn btn-primary mx-1" onClick={ClrText}>
          Clear Text
        </button>
        <button
          type="submit"
          onClick={speak}
          className="btn btn-warning mx-2 my-2"
        >
          Speak
        </button>
        <button
          type="submit"
          onClick={CopyText}
          className="btn btn-warning mx-2 my-2"
        >
          Copy
        </button>
        <button
          type="submit"
          onClick={ExtraSpace}
          className="btn btn-warning mx-2 my-2"
        >
          ExtraSpace
        </button>
      </div>
      <div className="container my-3 " style={{ color:props.mode==='dark'?"white":"black"}}>
        <h2 >your text summary</h2>
        <p>
          {(Text.split(" ").length)-1} words and {Text.length} characters
        </p>
        <p> {0.008 * Text.split(" ").length} minutes to read </p>
        <h2> Preview</h2>
        <p> {Text.length>0?Text:"please enter something in text box"} </p>
      </div>
    </>
  );
}

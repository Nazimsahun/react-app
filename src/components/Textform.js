import React, { useState } from 'react';
export default function Textform(props) {
   const ConverttoUpCase =()=>{
        // console.log('Convert to Upper case ');
        let newtext = text.toUpperCase();
        SetText(newtext);
    } 
    const ConverttoLoCase =()=>{
        // console.log('Convert to Upper case ');
        let newtext = text.toLowerCase();
        SetText(newtext);
    } 
    const handleOnChange =(event)=>{
        console.log('handle On Change ');
        SetText(event.target.value);
    } 
    const[text,SetText] = useState('EnterTextHere');
  return (
    <>
    <div className='container' style={{color:props.mode=== 'dark'?'while':'black'}} >
        <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control"  value={text} onChange={handleOnChange} id="MyBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={ConverttoUpCase} >Convert to UpperCase </button>
<button className="btn btn-primary mx-2" onClick={ConverttoLoCase} >Convert to LowerCase </button>
<h2>Your Text summary</h2>
<p>{text.split(" ").length }words and {text.length} character</p>
    </div>
    </>
  )
}

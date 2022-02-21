import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        console.log("Uppercase was clicked"+ text);
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleLoClick=()=>{
        console.log("Uppercase was clicked"+ text);
        let newText=text.toLowerCase();
        setText(newText);
    }
    const handleClearClick=()=>{
        console.log("Uppercase was clicked"+ text);
        let newText='';
        setText(newText);
    }
    const handleOnChange=(event)=>{
        console.log("On Change");
        setText(event.target.value);
    }
    const [text, setText]=useState('');
  return (
      <>
    <div className='container'>
      <h1>{props.heading}</h1>
<div class="mb-3">
  
  <textarea class="form-control" id="mybox" value={text} onChange={handleOnChange} rows="9"></textarea>
</div>
<button type="button" className="btn btn-primary mx-2"  onClick={handleUpClick}>Convert to Uppercase</button>

<button type="button" className="btn btn-primary mx-2"  onClick={handleLoClick}>Convert to Uppercase</button>

<button type="button" className="btn btn-primary mx-2"  onClick={handleClearClick}>Clear Text</button>
  
    </div>
    <div className='container'>
        <h3>Your text summary</h3>
        <h5>{text.split(" ").length} Words and {text.length} Characters</h5>
        <p>{0.008 * text.split(" ").length} Miniute Read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}

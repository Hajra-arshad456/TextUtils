import React ,{useState}from 'react'

export default function TextForm(props) {

    const handleUpClick = () =>{
        // console.log("Uppercase button was clicked " + text)
        let UpperText = text.toUpperCase();

        setText(UpperText)
        props.showAlert('Converted to Upper Case' , 'success')
    }
    const handleLowerCase =() =>{
        let lowerText = text.toLowerCase();
        setText(lowerText)
        props.showAlert('Converted to Lower case' , 'success')
    }
    const handelClearText = () =>{
      let newText = "";
      setText(newText);
      props.showAlert('Text Cleared' , 'success')
    }

    const handleReverse = () =>{
      let reverseText = text.split("").reverse().join("");
      setText(reverseText);
      props.showAlert('Text Reversed' , 'success')
    }
    const handleOnChange = (event) =>{
        setText(event.target.value)
    }
    const handleCopy = () =>{
      // let text = document.getElementById("myBox")
      // text.select();
      // document.getSelection().removeAllRanges();
      navigator.clipboard.writeText(text)
      props.showAlert('Text copied to cliboard' ,'success')
    }
  const [text, setText] = useState("")
  // text ="new text" // wrong way to set text
//   setText ("new text");// correct way to set text
  return (
    <>
    <div className='container'style = {{color: props.mode ==='dark'? 'white' : 'black'}}>

  <h3 className = 'mb-3'>{props.heading} </h3>
<div className="mb-3">
  <textarea className="form-control" value={text} id="myBox" rows="8" onChange={handleOnChange} style = {{backgroundColor: props.mode === 'dark' ? '#212529' : 'white' , color: props.mode ==='dark' ? 'white' :'black'}}></textarea>
</div> 





<button disabled={text.length===0} className="btn btn-primary mx-2 my-2"  onClick={handleUpClick}>Convert to UpperCase</button>
<button disabled={text.length===0}  className="btn btn-primary mx-2 my-2 " onClick={handleLowerCase}>Convert to LowerCase</button>
<button disabled={text.length===0}  className="btn btn-primary mx-2 my-2" onClick={handelClearText}>Clear Text</button>
<button disabled={text.length===0}  className="btn btn-primary mx-2 my-2" onClick={handleReverse}>Reverse Text</button>
<button disabled={text.length===0}  className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
</div>
    <div className="container my-2" style = {{color: props.mode ==='dark'? 'white' : 'black'}}>
        <h3>Your text Summary</h3>
        <p>{text.split(/\s+/).filter((element)=>{return  element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return  element.length!==0}).length} Minutes read</p>
        <h3>Preview</h3>
        <p>{text.length > 0? text : 'Nothing to preview!'}</p>

    </div>
    </>
  )
}

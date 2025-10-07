import React  from 'react'

export default function About(props) {
 
  let  myStyle = {
    color: props.mode === 'dark' ? 'white' : '#3e444a',
    backgroundColor: props.mode === 'dark' ? '#3e444a' : 'white'
  }
// 
  // const [btnText,setBtnText] = useState("Enable Dark Mode")
//  const toggleBtn = () =>{
//     if(myStyle.color === "white")
//     {
//         setStyle({
//             backgroundColor: "white",
//             color:"black"
//         })
//         setBtnText("Enable Dark Mode")
//     }
//     else{
//          setStyle({
//             backgroundColor: "black",
//             color:"white",
//             border: "1px solid white"
//         })
//         setBtnText("Enable Light Mode")
//     }
//   }

  return (
    <div className='container' style={myStyle}>
        <h2 className='my-3'>About Us</h2>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Analyze your text
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body"  style={myStyle}>
       TextUtils helps you analyze your text efficiently. You can count words and characters,
        convert text to uppercase or lowercase, clear it, and copy it to the clipboard with one click.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Free to Use
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body"  style={myStyle} >
    TextUtils is completely free to use. It’s designed for students, writers, and anyone who needs 
        quick text transformations without installing heavy software.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Browser Compatible
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body"  style={myStyle}>
        This app works in any modern browser including Chrome, Firefox, Edge, and Safari. 
        It also supports light and dark themes for better user experience.
      </div>
    </div>
  </div>
</div>
{/* <div className="container my-3">

<button onClick={toggleBtn}  type='button' className="btn btn-primary my-3" >{btnText}</button>
</div> */}
    </div>
  )
}

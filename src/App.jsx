import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import TextForm from './components/textform'
// import About from './components/About'
import Alert from './components/alert'



// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
  
// } from "react-router-dom";



function App() {
const[mode,setMode] = useState('light')  //whether dark mode is enabled or not
const[alert,setAlert] = useState(null)

const showAlert = (message,type) =>{
  setAlert({
    msg: message,
    type : type
  })
  setTimeout(()=>{
    setAlert(null)
  },1500)
}
const toggleMode = () =>{
  if(mode === 'light'){
    setMode('dark')
    document.body.style.backgroundColor = '#212529'
    showAlert(' Dark Mode has been enabled' , 'success')

    document.title = 'Text Utils - Dark Mode'


  }
  else {
    setMode('light')
    document.body.style.backgroundColor = 'white'
    showAlert(' Light Mode has been enabled' , 'success')
    document.title = 'Text Utils - Light Mode'
  }
}
  return (
   <>
   {/* <Router> */}


<Navbar title = "TextUtils" about = "aboutTextUtils" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3">
        {/* <Routes> */}
          {/* <Route exact path="/" element={ */}
            <TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} />
            
            {/* } /> */}
          {/* <Route exact path="/about" element={<About />} /> */}
        {/* </Routes> */}
      </div>
    {/* </Router> */}


 </>
  );
}

export default App

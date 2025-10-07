import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import About from './components/About'
import Alert from './components/alert'




import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



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

    // document.title = 'Text Utils - Dark Mode'


  }
  else {
    setMode('light')
    document.body.style.backgroundColor = 'white'
    showAlert(' Light Mode has been enabled' , 'success')
    // document.title = 'Text Utils - Light Mode'
  }
}
  return (
   <>
   <Router basename="/TextUtils">


<Navbar title = "TextUtils" about = "aboutTextUtils" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3">
      <Routes>

 <Route 
  path="/" 
  element={<TextForm heading="Try TextUtils- Word Counter , Character Counter, LowerCase to UpperCase , UpperCase to Lowercase" mode={mode} showAlert={showAlert} />} 
/>
<Route 
  path="/about" 
  element={<About mode={mode} />} 
/>

</Routes>

        
      </div>
    </Router> 


 </>
  );
}

export default App

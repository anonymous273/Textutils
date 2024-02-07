
import './App.css';
import Aboutus from './components/Aboutus';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
}from "react-router-dom"
function App() {
  const [Mode,setMode]=useState('light')
  const [alert,setalert]=useState(null);
  const showalert = (message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setalert(null)
    }, 1000);
  }
  const Togglemode = ()=>{
    if(Mode ==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#090c1f';
      showalert('Dark mode has been enabled','Success');
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
      showalert('Light mode has been enabled','Success');
    }
  }
  return (
    <>
    <Router>
     <Navbar title="Text Utils"  abouttext="About" mode={Mode} toggle={Togglemode}/>
     <Alert alert={alert}/>
     <div className='container'>
      <Routes>
       <Route exact path='/about' element={ <Aboutus mode={Mode}/>}></Route>
       <Route exact path='/' element={ <Textform heading="Enter text to analyze"mode={Mode} showalert={showalert}/>}> </Route>
      </Routes>
     </div>
    </Router>
    </>
  );
}

export default App;

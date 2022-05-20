// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';

import React from "react";
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";

// let name="Kamil"

function App() {
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }

  const removeBodyClass=()=>{
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-info')


  }

  const toggleMode = (cls) => {
    removeBodyClass();
    document.body.classList.add('bg-'+cls);
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled ", "Success");
      // document.title = ' TextUtils - Dark Mode';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled ", "Success");
      // document.title = 'TextUtils - Light Mode';
    }

  }


  return (
    <>

      <BrowserRouter>

        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />

        <Alert alert={alert} />

        <div className="container my-3" >
          <Routes> 
            <Route exact path="/about" element={<About mode={mode}/>} />
            
             {/* <About /> */}

            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils - Word counter, Character counter and Remove extra spaces " mode={mode} />} />

            {/* <TextForm showAlert={showAlert} heading="Enter the text to analyse below" mode={mode} /> */}

          </Routes>

        </div>

      </BrowserRouter>



    </>
  );
}


export default App;

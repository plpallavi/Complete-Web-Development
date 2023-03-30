import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react';

function App() {
  const [mode, setmode] = useState('light'); // whether dark mode is enable or not

  const toggleMode=()=>{
    if(mode === 'light'){
      setmode ('dark');
    }

    else{
      setmode ('light');
    }
  }
  return (
  <>
  <Navbar title="TextUtils" mode={mode} toggleMode ={toggleMode} /> 
  <div className="container my-3"> 
    <TextForm heading="Enter The Text To Analyze Below" />
    {/* <About/> */}
  </div>
  </>
    
  );
}
export default App;

import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react';
import Alert from './components/Alert';
// import{
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   // Link 
// } from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light'); // whether dark mode is enable or not
  const [alert, setAlert] = useState(null);

  const showAlert =(message, type)=>{
      setAlert({
        msg : message,
        type : type
      })

      setTimeout(() => {
        setAlert(null);
      },2000);
  }

  // const removeBodyClasses =()=>{
  //   document.body.classList.remove('bg-light')
  //   document.body.classList.remove('bg-dark')
  //   document.body.classList.remove('bg-danger')
  //   document.body.classList.remove('bg-warning')
  //   document.body.classList.remove('bg-success')
  //   }

const toggleMode =()=>{
  // const toggleMode=(cls)=>{
  //   removeBodyClasses();
  //   console.log(cls)
  //   document.body.classList.add('bg-' + cls)
    if(mode === 'light'){
      setmode ('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enable","Success: ");
      // document.title = "TextUtils -Dark"
    }

    else{
      setmode ('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enable","Success: ");
      // document.title = "TextUtils -Light"
    }
  }
  
  return (
  <>
  {/* <Router> */}
    <Navbar title="TextUtils" mode={mode} toggleMode ={toggleMode} /> 
      <Alert alert={alert}/>
        <div className="container my-3"> 
          {/* <Switch>
            <Route path ="/about">
              <About mode={mode}/>
            </Route> */}

          {/* <Route path="/"> */}
            <TextForm 
            showAlert={showAlert} 
            heading="Try TextUtils - Word Counter, Character Counter, Remove extra spaces" 
            mode={mode}
            />
          {/* </Route>
        </Switch> */}
      </div>
  {/* </Router> */}
  </>
    
  );
}

export default App;

import React, {useState} from 'react';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  const [currentForm, setCurrentForm] = useState("login")
  const toggleForm = (formName)=>{
    setCurrentForm(formName)
  }
  return (
    
    <div>
      {
      (currentForm === "login")? <Login OnFormSwicth={toggleForm}/> : <Register OnFormSwicth={toggleForm}/>
    }
    </div>
  );
}

export default App;

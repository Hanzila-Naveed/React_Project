import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [userName, setUserName] = useState('');
  useEffect(()=>{
    getNames();
  }, [])
  const getNames = async() => {
    const response = await axios.get('/names')
    console.log(response)
    setUserName(response.data)
  }
  return (
      <>
      <h1>
        My frontend
      </h1>
        <h3> My name is {userName} Latest changes for productions</h3>

      </>
  )
}

export default App;

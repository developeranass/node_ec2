import { useState, useEffect } from "react";
import "./App.css";

function App() {
  
  const [message, setMessage] = useState("");
  
  useEffect(()=> {
    fetch("http://65.2.189.112:4000/api/message")
    .then((res) => res.json())
    .then((data) => setMessage(data.message));
  
  }, []);

  return (
  <>
      <h1>Anas Sartaj</h1>
      <h2>data from server is comming  {message} </h2>
    </>
  )
}

export default App

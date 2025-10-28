import { useEffect, useState } from 'react'
import './App.css'

function App() {
   const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch("/api/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage("Error connecting to backend"));
  }, []);


  return (
    <>
     <h1>{message}</h1>
    </>
  )
}

export default App

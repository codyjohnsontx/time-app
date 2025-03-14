import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  useEffect(function () {
    setInterval(function () {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);

  return (
    <>
      <h1>You got the watch but we got the time</h1>
      <button>Boop button</button>
      <h1>Its currently {time}</h1>
    </>
  );
}

export default App;

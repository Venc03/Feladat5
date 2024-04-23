import { useEffect, useState } from 'react';
import './App.css';
import Legorulo from './pages/Legordulo';
import Kerdesek from './pages/Kerdesek';
import axios from 'axios';

function App() {
  
  let [tesztek, setTesztek] = useState([]);
  let [kat, setKat] = useState([]);
  useEffect(() => {
    async function getTesztek() {
      try {
        const response = await axios.get("http://localhost:8000/api/teszt");
        setTesztek(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    async function getKat() {
      try {
        const response = await axios.get("http://localhost:8000/api/kat");
        setKat(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    getKat();
    getTesztek();
  }, []);

  console.log(kat);


  return (
    <div className="App">

      <Legorulo kateg={kat} />

      <div className='kerdesek'>
        <Kerdesek tesztek={tesztek} />
      </div>

    </div>
  );
}

export default App;

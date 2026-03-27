import React, { Suspense, useState } from 'react'; 
import Navbar from './Components/Nabvar';
import Player from './Components/Players/Player';

const fetchPlayer = async () => {
  const res = await fetch("/data.json");
  return res.json(); 
}

const App = () => {
  const playersPromise = fetchPlayer();
  const [coin, setCoin] = useState(15000);
  
  return (
    <>
      <Navbar coin={coin}/>
      <Suspense fallback={<span className="loading loading-spinner text-warning"></span>}>
        <Player playersPromise={playersPromise} setCoin={setCoin} coin={coin}/>
      </Suspense>
    </>
  );
};

export default App;
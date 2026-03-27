import React, { Suspense } from 'react'; 
import Navbar from './Components/Nabvar';
import Player from './Components/Players/Player';

const fetchPlayer = async () => {
  const res = await fetch("/data.json");
  return res.json(); 
}

const App = () => {
  const playersPromise = fetchPlayer();
  
  return (
    <>
      <Navbar />
      <Suspense fallback={<span className="loading loading-spinner text-warning"></span>}>
        <Player playersPromise={playersPromise} />
      </Suspense>
    </>
  );
};

export default App;
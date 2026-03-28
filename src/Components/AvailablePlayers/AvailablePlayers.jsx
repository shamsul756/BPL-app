import React from 'react';

import Card from '../ui/Card';
const AvailablePlayers = ({ player, setCoin, coin, selectedPlayer, setSelectedPlayer }) => {
    console.log("players", player);
    return (
        <div className='container mx-auto px-4'>
          <div className='grid md:grid-cols-3 gap-4'>
            {player.map((player) => {
                console.log(player);
                return (
               <Card key={player.playerId} player={player} setCoin={setCoin} coin={coin} setSelectedPlayer={setSelectedPlayer} selectedPlayer={selectedPlayer}/>
                )
            })}

       </div>

        </div>
    );
};

export default AvailablePlayers;
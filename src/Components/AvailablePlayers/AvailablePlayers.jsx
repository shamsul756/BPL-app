import React from 'react';

import Card from '../ui/Card';
const AvailablePlayers = ({ player }) => {
    console.log("players", player);
    return (
        <div className='container mx-auto px-4'>
          <div className='grid md:grid-cols-3 gap-4'>
            {player.map((player) => {
                console.log(player);
                return (
                <Card player={player} />
                )
            })}

       </div>

        </div>
    );
};

export default AvailablePlayers;
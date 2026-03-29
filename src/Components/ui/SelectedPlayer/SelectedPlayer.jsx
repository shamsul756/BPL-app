import React from 'react';
import { FaUser } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

const SelectedPlayer = ({ SelectedPlayer, setSelectedPlayers, setCoin, coin }) => {
    console.log("selectedPlayer", SelectedPlayer);
    console.log(SelectedPlayer);

    const handleDeleteSelectedPlayer = (player) => {
        // ✅ fixed: was (player) => player.playerName !== player.playerName
        const filteredPlayers = SelectedPlayer.filter((p) => p.playerId !== player.playerId);
        setSelectedPlayers(filteredPlayers);
        setCoin(coin + player.price)
    }

    return (
        <div className='space-y-4'>
            <div className='px-8 font-semibold text-2xl'>
                {SelectedPlayer.map((player, ind) => {
                    return (
                        <div key={ind} className='flex items-center gap-6 justify-between p-5 m-5 rounded-2xl border'>
                            <div className='flex gap-6'>
                                <img src={player.image} alt={player.name} className='h-[110px] w-[110px]'/>
                                <div className='flex flex-col justify-center gap-1'>
                                    <h2 className=' flex gap-2 font-bold text-2xl'>
                                        <FaUser></FaUser>{player.name}
                                    </h2>
                                    <p>{player.player_type}</p>
                                </div>
                            </div>
                            <div>
                                <button className='btn text-blue-600' onClick={()=> handleDeleteSelectedPlayer(player)}>
                                    <MdDelete className='text-2xl'/>
                                </button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default SelectedPlayer;
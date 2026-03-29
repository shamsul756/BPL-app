import React from 'react';
import { FaFlag } from "react-icons/fa";
import { MdOutlineMan3 } from "react-icons/md";
import { toast } from 'react-toastify';

const Card = ({ player, setCoin, coin, selectedPlayer, setSelectedPlayer }) => {
    
    // ✅ removed local useState, check from array instead
    const isSelected = selectedPlayer.some(p => p.playerId === player.playerId);

    const handleChoosePlayer = () => {
        let newCoin = coin - player.price;
        if(newCoin >= 0){
            setCoin(coin - player.price);
        } else {
            toast.error("Not Enough coin to purchase this player");
            return;
        }
        toast(`${player.name} is selected`)
       
        setSelectedPlayer([...selectedPlayer, player])
    }

    return (
        <div>
            <div className="card bg-base-100 shadow-2xl">
                <figure className='px-10 pt-10'>
                    <img src={player.image} alt={player.name} className="rounded-xl h-60 w-full object-cover"/>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        <img src={player.role_icon} alt={player.country} className=" h-8 object-cover"/>
                        <img src={player.flag} alt={player.country} className=" h-10 object-cover"/>
                        <button className='btn'>{player.name}</button>
                    </h2>
                    <div className='flex justify-between gap-2 items-center'>
                        <div className='flex gap-2 items-center'>
                            <FaFlag />
                            <p className='font-bold'>{player.country}</p>
                        </div>
                        <button className='btn'>{player.player_type}</button>
                    </div>
                    <div className="divider"></div>
                    <h2 className='font-bold'>rating: {(player.rating)}</h2>
                    <div className='flex justify-between gap-4 font-bold'>
                        <p>{player.batting_style}</p>
                        <p className='text-right'>{player.bowling_style}</p>
                    </div>
                    <div className="card-actions justify-between items-center">
                        <p className='font-semibold'>price : ${player.price}</p>
                        <button className="btn" onClick={handleChoosePlayer} disabled={isSelected}>
                            {isSelected ? "Selected" : "Choose Player"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
import React, { useState } from 'react';
import { FaFlag } from "react-icons/fa";
import { MdOutlineMan3 } from "react-icons/md";
const Card = ({ player, setCoin, coin }) => {
    const [isSelected, setIsSelected] = useState(false);
    const handleChoosePlayer = () => {
        let newCoin = coin - player.price;
        if(newCoin>= 0){
            setCoin(coin - player.price);
        }
        else{
            alert("Not Enough coin to purchase this player");
            return;
        }
        alert(`${player.name} is selected`)
        setIsSelected(true);
    }
    return (
        <div>
            <div className="card bg-base-100 shadow-2xl">
                <figure className='px-10 pt-10'>
                    {/* Use an img tag and set the src attribute */}
                    <img
                        src={player.image}
                        alt={player.name}
                        className="rounded-xl h-60 w-full object-cover"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        <img
                            src={player.role_icon}
                            alt={player.country}
                            className=" h-8  object-cover"
                        />
                        <img
                            src={player.flag}
                            alt={player.country}
                            className=" h-10  object-cover"
                        />
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
                        <button className="btn" onClick={handleChoosePlayer}
                            disabled={isSelected}>
                            {isSelected ? "Selected" : "Choose Player"}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
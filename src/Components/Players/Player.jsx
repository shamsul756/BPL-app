import { use, useState } from "react";
import AvailablePlayers from "../AvailablePlayers/AvailablePlayers";
import SelectedPlayer from "../ui/SelectedPlayer/SelectedPlayer";


const Player = ({ playersPromise, coin, setCoin }) => {

    const player = use(playersPromise);

    const [selectedType, setSelectedType] = useState("available");
    console.log(selectedType);

    return (
        <div className="container mx-auto px-4 my-[60px]">
            <div className="flex justify-between gap-4 items-center">
                {selectedType === "available" ? <h2 className="px-8 text-3xl font-bold">Available Players</h2> : <h2 className="px-8 text-3xl font-bold">Selected Players (2/6)</h2>}
                <div className="px-6">
                    <button onClick={() => setSelectedType("available")}
                        className={`btn ${selectedType === "available" ? "bg-[#e7fe29]" : ""}  rounded-r-none rounded-l-xl`}>Available</button>
                    <button onClick={() => setSelectedType("selected")}
                        className={`btn ${selectedType === "selected" ? "bg-[#e7fe29]" : ""} rounded-l-none rounded-r-xl`}>Selected 0</button>
                </div>
            </div>

           
            {selectedType === "available" ? (
                <AvailablePlayers player={player} setCoin={setCoin} coin={coin}/>
            ) : (
                <SelectedPlayer />
            )}
        </div>
    );
};

export default Player;
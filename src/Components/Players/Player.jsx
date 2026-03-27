import { use } from "react";
import AvailablePlayers from "../AvailablePlayers/AvailablePlayers";


const Player = ({ playersPromise }) => {

    const player = use(playersPromise);


    return (
        <div className="container mx-auto px-4">

            player: {player.length}
            <AvailablePlayers player={player}>

            </AvailablePlayers>
        </div>
    );
};

export default Player;
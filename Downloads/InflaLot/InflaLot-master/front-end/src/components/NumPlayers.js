import React from "react";
import { ethers } from "ethers";
import { contractABI, contractAddress } from "../utils/contract";

export default function NumPlayers({signer}) {
    const [numPlayers, setNumPlayers] = React.useState(null);

    const contract = new ethers.Contract(contractAddress, contractABI, signer);

    async function getNumPlayers() {
        try {
            const nPlayers = await contract.getTicketNumbers();
            return nPlayers.toString();
        } catch (error) {
            console.error("Error:", error);
        }
    }

    React.useEffect(() => {
        async function fetchNumPlayers() {
            try {
                const nPlayers = await getNumPlayers(); 
                setNumPlayers(Number(nPlayers));
            } catch (error) {
                console.error("Error:", error);
            }
        }
        fetchNumPlayers();
    }, [numPlayers, signer]);

    return (
        <div className="Num_Players">
            {/* <img src="" alt="num_players" /> */}
            <h2>NUM OF PLAYERS:</h2>
            <h3>{numPlayers ? numPlayers : <h4>There are no players yet</h4>}</h3>
        </div>
    );
}

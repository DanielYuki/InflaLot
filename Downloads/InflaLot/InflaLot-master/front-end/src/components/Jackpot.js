import React from "react";
import { ethers } from "ethers";
import { contractABI, contractAddress } from "../utils/contract";

export default function Jackpot({ signer }) {
    const contract = new ethers.Contract(contractAddress, contractABI, signer);

    const [jackpot, setJackpot] = React.useState(null);

    async function getPool() {
        try {
            const pool = await contract.seePool();
            // Convert the pool value from Wei to Ether and return it as a string
            return ethers.utils.formatEther(pool.toString());
        } catch (error) {
            console.error("Error:", error);
        }
    }

    React.useEffect(() => {
        async function fetchPool() {
            try {
                const pool = await getPool(); // Wait until getPool resolves
                setJackpot(pool); // Update the jackpot state
            } catch (error) {
                console.error("Error:", error);
            }
        }
        fetchPool();
    }, [jackpot, signer]);

    return (
        <div className="Jackpot">
            <h3 className="Jackpot_title">NEXT JACKPOT:</h3>
            <h2 className="Jackpot_value">
                {jackpot ? jackpot : ( signer ? "Loading..." : "Error")}
                <b>ETH</b>
            </h2>
        </div>
    );
}

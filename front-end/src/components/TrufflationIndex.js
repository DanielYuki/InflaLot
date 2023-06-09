import React from "react";
import { ethers } from "ethers";
import { contractABI, contractAddress } from "../utils/contract";

export default function TrufflationIndex({signer}) {
    const [trufflationIndex, setTrufflationIndex] = React.useState(null);

    const contract = new ethers.Contract(contractAddress, contractABI, signer);

    async function getInflationIndex() {
        try {
            const inflation = await contract.inflationWei();
            // Convert the inflation value from Wei to Ether and return it as a string
            return ethers.utils.formatEther(inflation.toString());
        } catch (error) {
            console.error("Error:", error);
        }
    }

    React.useEffect(() => {
        async function fetchInflation() {
            try {
                const inflation = await getInflationIndex(); 
                setTrufflationIndex(inflation);
            } catch (error) {
                console.error("Error:", error);
            }
        }
        fetchInflation();
    }, [trufflationIndex, signer]);

    return (
        <div className="TrufflationIndex">
            <h2>LATEST TRUFFLATION INDEX:</h2>
            <h3>{Number(trufflationIndex).toFixed(4)} %</h3>
        </div>
    );
}
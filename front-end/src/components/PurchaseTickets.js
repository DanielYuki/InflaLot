import React from "react";
import { ethers } from "ethers";
import { contractABI, contractAddress } from "../utils/contract";

export default function PurchaseTickets({ signer, canBet }) {
    const contract = new ethers.Contract(contractAddress, contractABI, signer);

    async function buyTicket() {
        const betValue = prompt(
            "What is your guess for the next month inflation ? (xx.xxxx)%"
        );
        betValue ? console.log(betValue) : console.log("No value");
        try {
            //rever essa goiaba aq
            const options = { value: ethers.utils.parseEther("0.01") };
            const tx = await contract.buyTicket(
                ethers.utils.parseEther(betValue),
                options
            );
            await tx.wait();
        } catch (error) {
            console.error("Error:", error);
        }
    }

    return (
        <div className="PurchaseTickets">
            {canBet ? (
                <>
                    <p>
                        Pay only <span>0.01</span> ETH
                    </p>
                    <p>
                        To have a chance to <b>HIT</b> the <b>JACKPOT</b>
                    </p>
                    <button className="buy_tickets_btn" onClick={buyTicket}>
                        Buy Tickets
                    </button>
                </>
            ) : (
                <>
                    <p>Please, wait for the next</p>
                    <p>round to buy <span>Tickets</span></p>
                </>
            )}
        </div>
    );
}

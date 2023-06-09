import React from "react";
import "./Main.css";
import Jackpot from "../../components/Jackpot";
import Timer from "../../components/Timer";
import PurchaseTickets from "../../components/PurchaseTickets";
import TrufflationIndex from "../../components/TrufflationIndex";
import { ethers } from "ethers";
import { contractABI, contractAddress } from "../../utils/contract";

export default function Main({signer}) {
    const contract = new ethers.Contract(contractAddress, contractABI, signer);
    
    const today = new Date();
    const [targetDate, setTargetDate] = React.useState(today.getTime());

    async function getTime() {
        try {
            const time = await contract.getTimeLeft();
            return time.toString();
        } catch (error) {
            console.error("Error:", error);
        }
    }

    React.useEffect(() => {
        async function fetchTime() {
            try {
                const time = await getTime(); 
                console.log(time);
                setTargetDate((prevTime) => {
                    if (time !== prevTime) {
                        // setTimeLeft(time);
                        return today.getTime() + time*1000;
                    }
                    return prevTime;
                });
            } catch (error) {
                console.error("Error:", error);
            }
        }
        fetchTime();
    }, [signer]);

    return (
        <div className="Main">
            <Jackpot signer={signer}/>
            <div className="main_section">
                <div className="main_section_left">
                    <Timer targetDate={targetDate} />
                    <TrufflationIndex signer={signer} />
                </div>
                <div className="main_section_right">
                    <PurchaseTickets signer={signer} />
                </div>
            </div>
        </div>
    );
}

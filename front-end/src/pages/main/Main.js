import React from "react";
import "./Main.css";
import Jackpot from "../../components/Jackpot";
import Timer from "../../components/Timer";
import PurchaseTickets from "../../components/PurchaseTickets";
import TrufflationIndex from "../../components/TrufflationIndex";

export default function Main() {
    
    const today = new Date();
    const [targetDate, setTargetDate] = React.useState(today.getTime() + 518400000);

    React.useEffect(() => {
        setTargetDate(today.getTime() + 518400000);
    }, []);

    return (
        <div className="Main">
            <Jackpot />
            <div className="main_section">
                <div className="main_section_left">
                    <Timer targetDate={targetDate} />
                    <TrufflationIndex />
                </div>
                <div className="main_section_right">
                    <PurchaseTickets />
                </div>
            </div>
        </div>
    );
}

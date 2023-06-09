import React from "react";

export default function Ticket({ bet, date }) {
    return (
        <div className="Ticket">
            <div className="ticket_content">
                {/* <h3>Owner: {owner}</h3> */}
                <h4>Bet: <span>{bet}</span>%</h4>
                <h5>Date: <span>{date}</span></h5>
            </div>
        </div>
    );
}

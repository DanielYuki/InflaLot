import React from "react";
import "./TicketsSection.css";
import NumPlayers from "../../components/NumPlayers";
import UserTickets from "../../components/UserTickets";

export default function TicketsSection() {

    const tickets = [
        {
            // owner: " 1",
            bet: " 13.094",
            date: "04/20/23",
        },
        {
            // owner: " 2",
            bet: " 16.395",
            date: "04/20/23",
        },
        {
            // owner: " 3",
            bet: " 11.085",
            date: "04/20/23",
        },
        {
            // owner: " 4",
            bet: " 13.089",
            date: "04/20/23",
        },
        // Add more ticket objects as needed
    ];

    return (
        <div className="Tickets_Section">
            <NumPlayers />
            <UserTickets tickets={tickets}/>
        </div>
    );
}

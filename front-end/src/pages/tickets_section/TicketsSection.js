import React from "react";
import "./TicketsSection.css";
import NumPlayers from "../../components/NumPlayers";
import UserTickets from "../../components/UserTickets";

export default function TicketsSection() {

    const tickets = [
        {
            owner: "Card 1",
            bet: "This is card 1.",
            date: "2021-04-20",
        },
        {
            owner: "Card 2",
            bet: "This is card 2.",
            date: "2021-04-20",
        },
        {
            owner: "Card 3",
            bet: "This is card 3.",
            date: "2021-04-20",
        },
        {
            owner: "Card 4",
            bet: "This is card 4.",
            date: "2021-04-20",
        },
        {
            owner: "Card 5",
            bet: "This is card 5.",
            date: "2021-04-20",
        },
        {
            owner: "Card 6",
            bet: "This is card 6.",
            date: "2021-04-20",
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

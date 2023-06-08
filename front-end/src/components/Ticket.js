import React from 'react';

export default function Ticket({ owner, bet, date }){
    return (
        <div className="Ticket">
            <h3>Owner: {owner}</h3>
            <h4>Bet: {bet}</h4>
            <h5>Date: {date}</h5>
        </div>
    );
}
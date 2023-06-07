import React from 'react';

export default function Jackpot(){
    const [jackpot, setJackpot] = React.useState(9999999.99);

    return(
        <div className="Jackpot">
            <h3 className='Jackpot_title'>
                NEXT JACKPOT:
            </h3>
            <h2 className='Jackpot_value'>
                {jackpot}<b>ETH</b>
            </h2>
        </div>
    )
}
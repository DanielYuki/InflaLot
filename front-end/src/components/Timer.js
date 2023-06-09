import React from "react";

export default function Timer({ targetDate, canBet }) {
    // const [timeLeft, setTimeLeft] = React.useState(0);
    const [days, setDays] = React.useState(0);
    const [hours, setHours] = React.useState(0);
    const [minutes, setMinutes] = React.useState(0);
    const [seconds, setSeconds] = React.useState(0);

    React.useEffect(() => {
        const intervalId = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance < 0) {
                // The countdown is over
                console.log("Countdown Over!");
                clearInterval(intervalId);
                // setTimeLeft("Countdown Over!");
            } else {
                // Calculate days, hours, minutes, and seconds
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                setDays(days);

                const hours = Math.floor(
                    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                );
                setHours(hours);

                const minutes = Math.floor(
                    (distance % (1000 * 60 * 60)) / (1000 * 60)
                );
                setMinutes(minutes);

                const seconds = Math.floor((distance % (1000 * 60)) / 1000);
                setSeconds(seconds);

                // setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
            }
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, [targetDate]);

    return (
        <div className="Timer">
            <h3 className="Timer_title">
                {canBet ? "TIME LEFT TO BET:" : "Betting Time is Over!"}
            </h3>
            {canBet ? (
                <h2 className="Timer_value">
                    {/* {timeLeft} */}
                    <div className="value_section">
                        <h2>{String(days).padStart(2, "0")}</h2>
                        <h4>DAYS</h4>
                    </div>
                    :
                    <div className="value_section">
                        <h2>{String(hours).padStart(2, "0")}</h2>
                        <h4>HOURS</h4>
                    </div>
                    :
                    <div className="value_section">
                        <h2>{String(minutes).padStart(2, "0")}</h2>
                        <h4>MINUTES</h4>
                    </div>
                    :
                    <div className="value_section">
                        <h2>{String(seconds).padStart(2, "0")}</h2>
                        <h4>SECONDS</h4>
                    </div>
                </h2>
            ) : (
                <div className="value_section">
                    <h4>
                        Keep an eye on your wallet. 
                        The next Trufflation Index will
                        soon be revealed !!
                    </h4>
                </div>
            )}
        </div>
    );
}

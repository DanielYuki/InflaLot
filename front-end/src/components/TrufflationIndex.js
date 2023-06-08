import React from "react";

export default function TrufflationIndex() {
    const [trufflationIndex, setTrufflationIndex] = React.useState(2.834);

    return (
        <div className="TrufflationIndex">
            <h2>LATEST TRUFFLATION INDEX:</h2>
            <h3>{trufflationIndex} %</h3>
        </div>
    );
}
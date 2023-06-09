import React from "react";
import Slider from "react-slick";
import Ticket from "./Ticket";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function UserTickets({ tickets, address }) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const headingStyle = {
        marginTop: "70px",
    };

    return (
        <div className="UserTickets">
            <h2>YOUR TICKETS:</h2>
            <div className="Tickets">
                {address ? (
                    tickets != null ? (
                        tickets.length > 0 ? (
                            <Slider {...settings}>
                                {tickets.map((ticket, index) => (
                                    <div key={index}>
                                        <Ticket {...ticket} />
                                    </div>
                                ))}
                            </Slider>
                        ) : (
                            <h3 style={headingStyle}>
                                You don't have any tickets yet
                            </h3>
                        )
                    ) : (
                        <h3 style={headingStyle}>
                            You don't have any tickets yet
                        </h3>
                    )
                ) : (
                    <h3 style={headingStyle}>
                        Connect your wallet to see your tickets
                    </h3>
                )}
            </div>
        </div>
    );
}

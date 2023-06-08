import React from "react";
import Slider from "react-slick";
import Ticket from "./Ticket";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function UserTickets({ tickets }) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className="UserTickets">
            <h2>YOUR TICKETS:</h2>
            <div className="Tickets">
                <Slider {...settings}>
                    {tickets.map((ticket, index) => (
                        <div key={index}>
                            <Ticket {...ticket} />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

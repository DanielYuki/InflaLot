import React from "react";
import "./TicketsSection.css";
import NumPlayers from "../../components/NumPlayers";
import UserTickets from "../../components/UserTickets";
import { ethers } from "ethers";
import { contractABI, contractAddress } from "../../utils/contract";

export default function TicketsSection({ address, signer }) {
    const contract = new ethers.Contract(contractAddress, contractABI, signer);

    const [tickets, setTickets] = React.useState([
        {
            bet: "",
            date: "",
        },
    ]);

    async function mergeArrays(arr1, arr2) {
        let result = [], days, hours, remainingSeconds;

        for (var i = 0; i < arr1.length; i++) {
            days = Math.floor(arr2[i] / (24 * 60 * 60))
            remainingSeconds = arr2[i] % (24 * 60 * 60)
            hours = remainingSeconds / (60 * 60)
            result.push({ bet: ethers.utils.formatEther(arr1[i].toString()), date: days.toFixed(0)+"d "+hours.toFixed(0)+"h" });
        }
        // console.log(result);

        setTickets(result);

        return result;
    }

    async function getTickets() {
        try {
            const ticketsArray = await contract.getAddressTickets();
            const ticketsObjects = await mergeArrays(ticketsArray[0], ticketsArray[1]);
            console.log(ticketsObjects);
            return ticketsObjects;
        } catch (error) {
            console.error("Error:", error);
        }
    }

    React.useEffect(() => {
        async function fetchTickets() {
            try {
                const ticketsArray = await getTickets();
                setTickets(ticketsArray);
            } catch (error) {
                console.error("Error:", error);
            }
        }
        fetchTickets();
    }, [signer]);

    // const tickets = [
    //     {
    //         // owner: " 1",
    //         bet: " 13.094",
    //         date: "04/20/23",
    //     },
    //     {
    //         // owner: " 2",
    //         bet: " 16.395",
    //         date: "04/20/23",
    //     },
    //     {
    //         // owner: " 3",
    //         bet: " 11.085",
    //         date: "04/20/23",
    //     },
    //     {
    //         // owner: " 4",
    //         bet: " 13.089",
    //         date: "04/20/23",
    //     },
    //     // Add more ticket objects as needed
    // ];

    return (
        <div className="Tickets_Section">
            <NumPlayers signer={signer} />
            <UserTickets tickets={tickets} address={address} />
        </div>
    );
}

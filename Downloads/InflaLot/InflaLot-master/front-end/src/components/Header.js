import React from "react";
import logo from "../img/logo.png";
// import { connectToMetaMask } from "../utils/connectMetamask";

export default function Header({handleConnect, address}) {

    return (
        <div className="Header">
            <img className="logo" src={logo} alt="Infralot_logo" />
            <button className="connect_wallet" onClick={handleConnect}>
                {address
                    ? "Wallet Connected: " +
                      address.substring(0, 5) +
                      "..." +
                      address.substring(39, 42)
                    : "Connect Wallet"}
            </button>
        </div>
    );
}

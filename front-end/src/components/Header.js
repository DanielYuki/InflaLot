import React from "react";
import { ethers } from "ethers"; //using ethers 5.7

export default function Header() {
    const [currentAccount, setCurrentAccount] = React.useState(null);

    React.useEffect(() => {
        connectToMetaMask();
    }, []);

    async function connectToMetaMask() {
        try {
            // Check if MetaMask is available
            if (window.ethereum) {
                // Request access to MetaMask
                await window.ethereum.request({
                    method: "eth_requestAccounts",
                });

                // Create an ethers.js provider using MetaMask's provider
                const provider = new ethers.providers.Web3Provider(
                    window.ethereum
                );

                // Get the signer (current account)
                const signer = provider.getSigner();

                // Use the signer to interact with the blockchain
                // Example: get the current account address
                const address = await signer.getAddress();

                setCurrentAccount(address);

                console.log("Connected to MetaMask!");
                console.log("Current address:", address);

                // You can now use the signer to send transactions, interact with contracts, etc.
            } else {
                console.error("Please install MetaMask!");
            }
        } catch (error) {
            console.error("Error connecting to MetaMask:", error);
        }
    }

    return (
        <div className="Header">
            <h1>
                Infla<b>Lot</b>
            </h1>
            <button className="connect_wallet" onClick={connectToMetaMask}>
                {currentAccount
                    ? "Wallet Connected: " + currentAccount.substring(0, 5) +
                      "..." +
                      currentAccount.substring(39, 42)
                    : "Connect Wallet"}
            </button>
        </div>
    );
}

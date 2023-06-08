import { ethers } from "ethers"; //using ethers 5.7

export async function connectToMetaMask() {
    try {
        // Check if MetaMask is available
        if (window.ethereum) {
            // Request access to MetaMask
            await window.ethereum.request({
                method: "eth_requestAccounts",
            });

            // Create an ethers.js provider using MetaMask's provider
            const provider = new ethers.providers.Web3Provider(window.ethereum);

            // Get the signer (current account)
            const signer = provider.getSigner();

            // Use the signer to interact with the blockchain
            // Example: get the current account address
            const address = await signer.getAddress();

            // setCurrentAccount(address);

            console.log("Connected to MetaMask!");
            console.log("Current address:", address);
            // console.log("Current provider:", provider);
            // console.log("Current signer:", signer);

            return {
                provider,
                signer,
                address,
            };

            // You can now use the signer to send transactions, interact with contracts, etc.
        } else {
            console.error("Please install MetaMask!");
        }
    } catch (error) {
        console.error("Error connecting to MetaMask:", error);
    }
}

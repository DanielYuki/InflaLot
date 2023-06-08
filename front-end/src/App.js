import "./App.css";
import React from 'react';
import Header from "./components/Header.js";
import Main from "./pages/main/Main.js";
import TicketsSection from "./pages/tickets_section/TicketsSection.js";
import { connectToMetaMask } from "./utils/connectMetamask";

function App() {
    const [address, setCurrentAddress] = React.useState(null);
    // const [provider , setProvider] = React.useState(null);
    const [signer , setSigner] = React.useState(null);

    React.useEffect(() => {
        handleConnect();
    }, []);

    async function handleConnect() {
        try {
            const { signer, address } = await connectToMetaMask();
            setCurrentAddress(address);
            setSigner(signer);
        } catch (error) {
            console.error("Error:", error);
        }
    }

    return (
        <div className="App">
            <Header handleConnect={handleConnect} address={address}/>
            <Main signer={signer}/>
            <TicketsSection address={address}/>
        </div>
    );
}

export default App;

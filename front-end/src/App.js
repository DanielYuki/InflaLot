import './App.css';
import Header from './components/Header.js';
import Main from './pages/main/Main.js';
import TicketsSection from './pages/tickets_section/TicketsSection.js';

function App() {
  return (
    <div className="App">
        <Header />
        <Main />
        <TicketsSection />
    </div>
  );
}

export default App;

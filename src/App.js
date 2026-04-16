import logo from './logo.svg';
import './App.css';
import AddParkingTicket from './Components/AddParkingTicket';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewAllParkingTickets from './Components/ViewAllParkingTickets';
import Login from './Components/Login';

function App() {
  return (
    <BrowserRouter>
    <Routes>
<Route path="/Add" element = {<AddParkingTicket />} />
<Route path="/ViewAll" element = {<ViewAllParkingTickets />} />
<Route path="/" element = {<Login />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;

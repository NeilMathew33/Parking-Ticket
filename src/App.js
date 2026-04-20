import logo from './logo.svg';
import './App.css';
import AddParkingTicket from './Components/AddParkingTicket';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewAllParkingTickets from './Components/ViewAllParkingTickets';
import Login from './Components/Login';
import SignUp from './Components/SignUp';

function App() {
  return (
    <BrowserRouter>
    <Routes>
<Route path="/Add" element = {<AddParkingTicket />} />
<Route path="/ViewAll" element = {<ViewAllParkingTickets />} />
<Route path="/" element = {<Login />} />
<Route path="/SignUp" element = {<SignUp />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;

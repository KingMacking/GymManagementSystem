import { BrowserRouter, Routes, Route} from "react-router-dom";

import NavBar from './components/NavBar/NavBar';
import Main from './components/Pages/Main/Main';
import AddNewClient from "./components/Pages/Administration/Dashboard/AddNewClient/AddNewClient";
import FindClient from "./components/Pages/Administration/Dashboard/FindClient/FindClient";
import ViewAllClients from "./components/Pages/Administration/Dashboard/ViewAllClients/ViewAllClients";
import AssistConfirmation from "./components/Pages/TurnConfirmation/AssistConfirmation";
import Dashboard from "./components/Pages/Administration/Dashboard/Dashboard";
import UserContextProvider from "./context/UserContext";
import ClientDetailContainer from "./components/Pages/Administration/Dashboard/ClientDetail/ClientDetailContainer";
import DebtorsListContainer from "./components/Pages/Administration/Dashboard/Debtors/DebtorsListContainer";
import RegisterPayment from "./components/Pages/Administration/Dashboard/RegisterPayment/RegisterPayment";
import Plans from "./components/Pages/Plans/Plans";

import './App.css'

function App() {
    return (
        <UserContextProvider>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/plans" element={<Plans />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/assistconfirmation" element={<AssistConfirmation />} />
                    <Route path="/addclient" element={<AddNewClient />} />
                    <Route path="/findclient" element={<FindClient />} />
                    <Route path="/registerpayment" element={<RegisterPayment />} />
                    <Route path="/debtors" element={<DebtorsListContainer />} />
                    <Route path="/clients" element={<ViewAllClients />} />
                    <Route path="/clients/:clientId" element={<ClientDetailContainer />} />
                </Routes>
            </BrowserRouter>
        </UserContextProvider>
    )
}

export default App

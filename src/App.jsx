import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";

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
import Contact from "./components/Pages/Contact/Contact";
import TheMethod from "./components/Pages/TheMethod/TheMethod";
import AboutUs from "./components/Pages/AboutUs/AboutUs";
import Footer from "./components/Footer/Footer";
import { ToastContainer } from "react-toastify";

import './App.css'
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <UserContextProvider>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Navigate to="/main" />}/>
                    <Route path="/main" element={<Main />} />
                    <Route path="/plans" element={<Plans />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/the-method" element={<TheMethod />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/assistconfirmation" element={<AssistConfirmation />} />
                    <Route path="/addclient" element={<AddNewClient />} />
                    <Route path="/findclient" element={<FindClient />} />
                    <Route path="/registerpayment" element={<RegisterPayment />} />
                    <Route path="/debtors" element={<DebtorsListContainer />} />
                    <Route path="/clients" element={<ViewAllClients />} />
                    <Route path="/clients/:clientId" element={<ClientDetailContainer />} />
                </Routes>
                <Footer />
            </BrowserRouter>
            <ToastContainer />
        </UserContextProvider>
    )
}

export default App

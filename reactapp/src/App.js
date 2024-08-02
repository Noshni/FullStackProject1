import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from './components/Register';
import Taxcal from "./components/Taxcal";
import Taxcal2 from "./components/Taxcal2";
import Taxcal3 from "./components/Taxcal3";
import Taxcal4 from "./components/Taxcal4";

function App() {
    return (
        <div>

        <Router>
            <Navbar />
            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route exact path='/login' element={<Login/>}/>
                <Route exact path='/register' element={<Register/>}/>
                <Route exact path='/taxcal' element={<Taxcal/>}/>
                <Route exact path='/taxcal2' element={<Taxcal2/>}/>
                <Route exact path='/taxcal3' element={<Taxcal3/>}/>
                <Route exact path='/taxcal4' element={<Taxcal4/>}/>
            </Routes>
        </Router>
        </div>
    );
}

export default App;
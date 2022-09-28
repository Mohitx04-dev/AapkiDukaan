import React from 'react'
import { Route, Routes } from 'react-router-dom';
import About from './Components/About';
import BecomeExecutive from './Components/BecomeExecutive';
import Home from './Components/Homepage';
import Navbar from './Components/Navbar';
import Pricing from './Components/Pricing';
import SignUp from './Components/SignUp';

function PublicMain() {
    return (
        <div>
        <Navbar />
        <Routes>
        
        <Route path="" element={<Home />} ></Route>
        <Route path="about" element={<About />} ></Route>
        <Route path="pricing" element={<Pricing />} ></Route>
        {/* <Route path="login" element={<Login />} ></Route> */}
        <Route path="signup" element={<SignUp />} ></Route>
        <Route path="BecomeExecutive" element={<BecomeExecutive />} ></Route>
        </Routes>
        </div>

    )
}

export default PublicMain

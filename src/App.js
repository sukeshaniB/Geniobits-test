import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterAndLogin from "./PassLoginWithFirebase/RegisterAndLogin";
import HomeScreen from "./PassLoginWithFirebase/Home"; 
import ForgotPassword from "./PassLoginWithFirebase/ForgotPassword";

function PasswordLoginWithFirebase(){
    return(
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path="/" element={<RegisterAndLogin/>} />
                    <Route path="/home" element={<HomeScreen/>} />
                    <Route path="/reset" element={<ForgotPassword/>} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}
export default PasswordLoginWithFirebase;
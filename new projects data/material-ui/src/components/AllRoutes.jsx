
import { Route, Routes } from "react-router-dom"
import { Home } from "./HomePage/HomePage"
import SigninPage1 from "./SigninPage/SigninPage1"
import SigninPage2 from "./SigninPage/SigninPage2"
import SignupPage1 from "./SignupPage/SignupPage1"
import SignupPage2 from "./SignupPage/SignupPage2"
import SignupPage3 from "./SignupPage/SignupPage3"
import SignupPage4 from "./SignupPage/SignupPage4"


export const AllRoutes = () =>{
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/signup" element={<SignupPage1/>}/>
            <Route path="/signup/password" element={<SignupPage2/>}/>
            <Route path="/signup/email/otp" element={<SignupPage3/>}/>
            <Route path="/signup/mobile/otp" element={<SignupPage4/>}/>
            <Route path="/signin" element={<SigninPage1/>}/>
            <Route path="/signin/email/password" element={<SigninPage2/>}/>
        </Routes>
    )
}
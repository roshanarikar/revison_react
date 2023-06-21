import { Route, Routes } from "react-router-dom"
import { HomePage } from "./HomePage/HomePage"
import { SigninPage1 } from "./SigninPage/SigninPage"
import { SigninPage2 } from "./SigninPage/SigninPage2"
import { SigninPage3 } from "./SigninPage/SigninPage3"
import  SignupPage1  from "./SignupPage/SignupPage1"
import { SignupPage2 } from "./SignupPage/SignupPage2"
import { SignupPage3 } from "./SignupPage/SignupPage3"
import { SignupPage4 } from "./SignupPage/SignupPage4"


export const AllRoutes = () =>{
    return(
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/signup" element={<SignupPage1/>}/>
            <Route path="/signup/password" element={<SignupPage2/>}/>
            <Route path="/signup/otp" element={<SignupPage3/>}/>
            <Route path="/signin" element={<SigninPage1/>}/>
            <Route path="/signin/otp" element={<SigninPage2/>}/>
            <Route path="/signin/password" element={<SigninPage3/>}/>
            <Route path="/signup/otp2" element={<SignupPage4/>}/>
        </Routes>
    )
}
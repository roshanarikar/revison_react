import { Route, Routes } from "react-router-dom"
import { Home } from "./Home/Home"
import { Signin1 } from "./Signin/Signin1"
import { Signin2 } from "./Signin/Signin2"
import { Signin3 } from "./Signin/Signin3"
import { Signin4 } from "./Signin/Signin4"
import SignInForm from "./Signin/SigninForm"
import { SigninPage } from "./Signin/SigninPage"
import { SignupPage } from "./Signup/SignupPage"


export const AllRoutes = () =>{
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/signup" element={<SignupPage/>}/>
            <Route path="/signin" element={<SigninPage/>}/>
            <Route path="/signin/password" element={<Signin2/>}/>
            <Route path="/signin/email/otp" element={<Signin3/>}/>
            <Route path="/signin/mobile/otp" element={<Signin4/>}/>
        </Routes>
    )
}
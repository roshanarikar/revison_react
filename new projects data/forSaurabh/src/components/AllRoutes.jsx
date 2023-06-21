import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home/Home"
import { TopicDetails } from "../pages/TopicDetails/TopicDetails"
import { TutorialDetails } from "../pages/TutorialDetails/TutorialDetails"
import { Tutorials } from "../pages/Tutorials/Tutorials"
import { Page2 } from "./SearchInput/SearchResult"
import { SigninPage } from "./Signin/SigninPage"
import { SignupPage } from "./Signup/SignupPage"
import { UserDetail } from "./UserDetails/UserDetails"


export const AllRoutes = () =>{
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/signup" element={<SignupPage/>}/>
            <Route path="/signin" element={<SigninPage/>}/>
            <Route path="/tutorials" element={<Tutorials/>}/>
            <Route path="/tutorials/javascript-tutorial" element={<TutorialDetails/>}/>
            <Route path="/tutorials/javascript-tutorial/introduction-to-javascript" element={<TopicDetails/>} />
            <Route path="/search" element={<Page2/>}/>

            <Route path="/navbar" element={<UserDetail/>}/>
        </Routes>
    )
} 
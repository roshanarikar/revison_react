import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home/Home"
import { TopicDetails } from "../pages/TopicDetails/TopicDetails"
import { FigmaTopic } from "../pages/TopicDetails/TopicFigma/FigmaTopic"
import { HelloWorldTopic } from "../pages/TopicDetails/TopicJavaScriptPage/HelloWorldTopic"
import { WhyJavaScriptTopic } from "../pages/TopicDetails/TopicJavaScriptPage/WhyJavaScriptTopic"
import { AnalyticsTutorialDetail } from "../pages/TutorialDetails/AnalyticsTutorialDetail"
import { AndroidTutorialDetail } from "../pages/TutorialDetails/AndroidTutorialDetail"
import { BasicPythonTutorialDetail } from "../pages/TutorialDetails/BasicPythonTutorialDetails"
import { FigmaTutorialDetail } from "../pages/TutorialDetails/FigmaTutorialDetail"
import { TutorialDetails } from "../pages/TutorialDetails/TutorialDetails"
import { WebTutorialDetail } from "../pages/TutorialDetails/WebTutorialDetail"
import { Tutorials } from "../pages/Tutorials/Tutorials"
import { Page2 } from "./SearchInput/SearchResult"
import { SigninPage } from "./Signin/SigninPage"
import { SignupPage } from "./Signup/SignupPage"


export const AllRoutes = () =>{
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/signup" element={<SignupPage/>}/>
            <Route path="/signin" element={<SigninPage/>}/>
            <Route path="/tutorials" element={<Tutorials/>}/>

            <Route path="/tutorials/javascript-tutorial" element={<TutorialDetails/>}/>
            <Route path="/tutorials/figma-for-developers" element={<FigmaTutorialDetail/>}/>
            <Route path="/tutorials/basics-of-web-development" element={<WebTutorialDetail/>}/>
            <Route path="/tutorials/basics-of-python-in-hindi" element={<BasicPythonTutorialDetail/>}/>
            <Route path="/tutorials/basics-of-data-analytics" element={<AnalyticsTutorialDetail/>}/>
            <Route path="/tutorials/basics-of-android-app-development" element={<AndroidTutorialDetail/>}/>
            
            <Route path="/tutorials/javascript-tutorial/introduction-to-javascript" element={<TopicDetails/>} />
            <Route path="/tutorials/javascript-tutorial/why-learn-javascript" element={<WhyJavaScriptTopic/>} />
            <Route path="/tutorials/javascript-tutorial/hello-world-program-in-javascript" element={<HelloWorldTopic/>} />
            <Route path="/tutorials/figma-for-developers/intro-to-figma-for-developers" element={<FigmaTopic/>} />
            
            <Route path="/search" element={<Page2/>}/>

        </Routes>
    )
} 
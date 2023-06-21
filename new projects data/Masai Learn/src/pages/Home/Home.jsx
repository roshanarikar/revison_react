import { AboutSection } from "../../components/AboutSection/AboutSection"
import { AllTab } from "../../components/AllTabs/AllTab"
import { DetailsLearn } from "../../components/DetailsLearn/DetailsLearn"
import { Footer } from "../../components/Footer/Footer"
import { Navbar } from "../../components/Navbar/Navbar"
import { ProgramOffer } from "../../components/ProgramOffer/ProgramOffer"
import { SearchBox } from "../../components/SearchBox/SearchBox"



export const Home = () =>{
    return(
        <div>
            <Navbar/>
            <SearchBox/>
            <DetailsLearn/>
            <AboutSection/>
            <ProgramOffer/>
            <AllTab/>
            <Footer/>
        </div>
    )
}
import { Footer } from "../../components/Footer/Footer"
import { Navbar } from "../../components/Navbar/Navbar"
import { TutorialDetailJavaScript } from "../../components/TutorialDetailsComponents/TutorialDetailJavaScript"


export const TutorialDetails = () =>{
    return(
        <>
        <Navbar/>
        <TutorialDetailJavaScript/>
        <Footer/>
        </>
    )
}
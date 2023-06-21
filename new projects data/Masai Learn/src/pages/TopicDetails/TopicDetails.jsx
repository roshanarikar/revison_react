import { Footer } from "../../components/Footer/Footer";
import { Navbar } from "../../components/Navbar/Navbar";
import { TopicIntroJavaScript } from "../../components/TopicDetailSection/JavaScriptTopic/TopicIntroJavaScript";



export const TopicDetails = () =>{
   
    return(
       <>
        <Navbar/>
        <TopicIntroJavaScript/>
        <Footer/>
       </>
    )
}
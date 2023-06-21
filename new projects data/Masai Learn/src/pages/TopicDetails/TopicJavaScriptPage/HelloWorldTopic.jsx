import { Footer } from "../../../components/Footer/Footer";
import { Navbar } from "../../../components/Navbar/Navbar";
import { TopicHelloWorld } from "../../../components/TopicDetailSection/JavaScriptTopic/TopicHelloWorld";



export const HelloWorldTopic = () =>{
   
    return(
       <>
        <Navbar/>
        <TopicHelloWorld/>
        <Footer/>
       </>
    )
}
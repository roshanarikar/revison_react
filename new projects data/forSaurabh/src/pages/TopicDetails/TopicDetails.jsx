import { Footer } from "../../components/Footer/Footer";
import { Navbar } from "../../components/Navbar/Navbar";
import { IntroJavaScriptTopic } from "../../components/TopicDetailSection/IntroJavaScriptTopic";



export const TopicDetails = () =>{
   
    return(
       <div>
        <Navbar/>
        <IntroJavaScriptTopic/>
        <Footer/>
       </div>
    )
}
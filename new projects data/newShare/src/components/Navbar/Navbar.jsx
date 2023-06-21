import { Link } from "react-router-dom"
import "./Navbar.css"


export const Navbar = () =>{
    return(
        <div className="navDiv">
            <div><Link  className="navText" to={"/"}>Home</Link></div>
            <div><Link  className="navText" to={"/signup"}>Signup</Link></div>
            <div><Link  className="navText" to={"/signin"}>Signin</Link></div>
        </div>
    )
}
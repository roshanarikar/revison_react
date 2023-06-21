import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";
import { GoogleBtn } from "../SignupPage/GoogleBtn/GoogleBtn";
import "./SigninPage.css"


export const SigninPage1 = () => {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');

  const validate = (value) => {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const phoneRegex = /^\d{10}$/;

    if (emailRegex.test(value) || phoneRegex.test(value)) {
      setError('');
      return true;
    }

    setError('Please enter a valid email or phone number.');
    return false;
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleBlur = () => {
    validate(inputValue);
  };


   
  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <div className="SignupDiv">
        <div className="SignupText"><p>Sign In</p></div>
        <div>
      
              <div className="inputDiv">
                  <label className="label">Phone number or email address</label>
                  <input className="inputBox" onBlur={handleBlur} value={inputValue} onChange={handleChange} type="text" placeholder="Phone number or email address"/>
                  <p className="danger">{error}</p>
              </div>
              <div>
                  <button className="BlueBtn"><Link className="btnDecor" to={"/signin/otp"}>CONTINUE</Link></button>
              </div>
            <div className="orLine">----------------------- OR -----------------------</div>
        </div>
         <GoogleBtn/>
        <div className="alreadyText">Already have an account? <span><Link className="btnDecorS" to={"/signin"}>sign In</Link></span></div>
      </div>
    </div>
  );
};


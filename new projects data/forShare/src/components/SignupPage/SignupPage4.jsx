import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";
import { GoogleBtn } from "../SignupPage/GoogleBtn/GoogleBtn";
import "./SignupPage.css"


export const SignupPage4 = () => {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');

  const validate = (value) => {
    const OTPRegex = /^\d{6}$/;

    if (OTPRegex.test(value)) {
      setError('');
      return true;
    }

    setError('Please enter a valid 6 digits OTP');
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
                <label className="label">Enter OTP sent to mobile number or <span className="blueText">change mobile number</span></label>
                <input className="inputBox" onBlur={handleBlur} value={inputValue} onChange={handleChange} type="number" placeholder="Enter 6 digit OTP"/>
                <p className="danger">{error}</p>
            </div>
            <div>
                <button className="BlueBtn"><Link className="btnDecor" to={"/"}>Sign Up</Link></button>
            </div>
            <span className="blueText"><Link className="btnDecorS" to={"/signin/password"}>Sign in with password</Link></span>
            <div className="orLine">----------------------- OR -----------------------</div>
        </div>
         <GoogleBtn/>
        <div className="alreadyText">Already have an account? <span><Link className="btnDecorS" to={"/signin"}>sign In</Link></span></div>
      </div>
    </div>
  );
};

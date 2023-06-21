import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";
import { GoogleBtn } from "./GoogleBtn/GoogleBtn";
import "./SignupPage.css";

export const SignupPage1 = () => {
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    otp: "",
  });
  const [page, setPage] = useState(1);
  const [emailExists, setEmailExists] = useState(false);
  const [mobileExists, setMobileExists] = useState(false);
  const [count, setCount] = useState(60);
  const navigate = useNavigate();

  // send otp counter
  useEffect(() => {
    if(page===3){
      const timerId = setTimeout(() => {
        setCount(count - 1);
      }, 1000);
      if(count===0){
        setCount(60)
      }
      return () => clearTimeout(timerId);
    }
  }, [count]);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    if (page === 2  && ((formData.email.length > 10 || formData.email.length < 10) || (formData.mobile.length > 10 || formData.mobile.length < 10))) {
      //Check email existing
      const checkEmail = async () => {
        console.log("pending request");
        const response = await fetch(
          `https://beec-2409-4043-2399-566b-6d6b-9bf1-c00b-6865.in.ngrok.io/user/existuser/${formData.email}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
          }
        );
        const data = await response.json();
        console.log(" email inner checkmail", data);
        setEmailExists(data.email);
        if (!(data === false)) {
          setError("Email already exists");
        }
      };
      console.log("outer checkmail");
      checkEmail();
    } else if (page === 3 && (formData.email.length === 10 || formData.mobile.length === 10)) {
      //check mobile existing
      const checkMobile = async () => {
        console.log("pending request");
        const response = await fetch(
          `https://beec-2409-4043-2399-566b-6d6b-9bf1-c00b-6865.in.ngrok.io/user/existuser/${formData.mobile}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
          }
        );
        const data = await response.json();
        console.log(" mobile inner checkmail", data);
        setMobileExists(data.mobile);
        if (!(data === false)) {
          setError("Mobile number already exists");
        }
      };
      console.log("outer checkmail");
      checkMobile();
    }
  }, [page, formData.email,formData.mobile]);

  //submiting form data
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (page === 1 && (formData.email.length > 10 || formData.email.length < 10))  {
      setPage(2);
   
    } else if (page === 1 && ( formData.mobile.length === 10)) {
      setPage(3);
    
    } else if (!emailExists && ((formData.email.length > 10 || formData.email.length < 10) || (formData.mobile.length > 10 || formData.mobile.length < 10))) {
      //Submitting Form email data
      localStorage.setItem("formData", JSON.stringify(formData));
      console.log("Sign-up form data has been stored in local storage.");

      const response = await fetch(
        "https://beec-2409-4043-2399-566b-6d6b-9bf1-c00b-6865.in.ngrok.io/user/signup/email/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      const data = await response.json();
      navigate("/");
      console.log("email api", data);
      console.log("api fetching");
   
    } else if (!mobileExists && (formData.email.length === 10 || formData.mobile.length === 10)) {
      //Submitting Form mobile data
      localStorage.setItem("formData", JSON.stringify(formData));
      console.log("Sign-up form data has been stored in local storage.");

      const response = await fetch(
        "https://beec-2409-4043-2399-566b-6d6b-9bf1-c00b-6865.in.ngrok.io/user/signup/mobile/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      const data = await response.json();
      if (formData.otp === 1234) {
        navigate("/");
      }
      console.log("mobile api calls", data);
      console.log("api fetching");
    } else if (emailExists === true) {
      console.log("Email address already exists.");
    }
  };

  // error handling of emails and mobile number

  const validate = (value) => {
    const emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const phoneRegex = /^\d{10}$/;

    if (emailRegex.test(value)) {
      setError("");
      console.log("email")
    }
    else if(phoneRegex.test(value)){
      setError("");
      console.log("mobile")
    } else {
      setError("Please enter a valid email or phone number."); 
    }
  };

  //for error handles
  const handleBlur = () => {
    var check = validate(formData.email,formData.mobile);
    console.log(check);
  };

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="SignupDiv">
        <div className="SignupText">
          <p>Sign Up</p>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            {page === 1 && (
              <>
                <div className="inputDiv">
                  <label className="label">Full Name</label>
                  <input
                    className="inputBox"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Enter Full Name"
                  />
                </div>
                <div className="inputDiv">
                  <label className="label">Phone number or email address</label>
                  <input
                    className="inputBox"
                    type="text"
                    name={"email" || "mobile"}
                    value={formData.email || formData.mobile}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Phone number or email address"
                  />
                  <Link onClick={()=>setPage(2)}>sign with otp</Link>
                  <p className="danger">{error}</p>
                </div>

                <div className="agreeText">
                  <p>
                    By signing up, I accept the Preleaf{" "}
                    <Link className="btnDecorS">Terms of Service</Link> and
                    acknowlegde the{" "}
                    <Link className="btnDecorS">Privacy Policy</Link>
                  </p>
                </div>
                <div>
                  <button className="BlueBtn">
                    <Link className="btnDecor">CONTINUE</Link>
                  </button>
                </div>
              </>
            )}
            {page === 2 && (
              <>
                <div className="inputDiv">
                  <label className="label">
                    Enter password for firstname@gmail.com or{" "}
                    <span className="blueText">change email address</span>
                  </label>
                  <input
                    className="inputBox"
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="To keep your profile safe"
                  />
                  <span className="greyText">Minimum 8 characters</span>
                  {/* <p className="danger">{error}</p> */}
                </div>
                <div>
                  <button className="BlueBtn">
                    <Link className="btnDecor">Sign Up</Link>
                  </button>
                </div>
              </>
            )}
            {page === 3 && (
              <>
                <div className="inputDiv">
                  <label className="label">
                    <span className="labelMobile">
                      Enter OTP sent to mobile number or{" "}
                      <span className="blueText">change number</span>
                    </span>
                    <span className="otpTimer">Resend OTP in {count} sec</span>
                  </label>

                  <input
                    className="inputBox"
                    type="text"
                    name="otp"
                    onBlur={handleBlur}
                    value={formData.otp}
                    onChange={handleChange}
                    placeholder="Enter 6 digit OTP"
                  />
                </div>
                <div>
                  <button className="BlueBtn">
                    <Link className="btnDecor">Sign Up</Link>
                  </button>
                </div>
              </>
            )}
          </form>
          <div className="divider">
            <div className="divider-line"></div>
            <div className="divider-text">OR</div>
            <div className="divider-line"></div>
          </div>
        </div>
        <GoogleBtn />
        <div className="alreadyText">
          Already have an account?{" "}
          <span>
            <Link className="btnDecorS" to={"/signin"}>
              sign In
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

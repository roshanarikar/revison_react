import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";
import { GoogleBtn } from "../SignupPage/GoogleBtn/GoogleBtn";

import "./SigninPage.css";

export const SigninPage1 = () => {
  // const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [page, setPage] = useState(1);
  const [emailExists, setEmailExists] = useState(false);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

 useEffect(() => {
      if (page === 2) {
        const checkEmail = async () => {
          console.log("pending request")
          const response = await fetch(
            `https://947d-2409-4043-2b1e-b220-2c02-2e31-bea-b4ca.in.ngrok.io/user/existuser/${formData.email}`
          );
          const data = await response.json();
          console.log("inner checkmail",data)
          setEmailExists(data.email)
  
        }
        console.log("outer checkmail")
        checkEmail()
      }
  }, [page, formData.email]);



  const handleSubmit = async (event) => {
    event.preventDefault();

    if (page === 1) {
        setPage(2)
    } else if (!emailExists) {
      localStorage.setItem("formData", JSON.stringify(formData));
      console.log("Sign-up form data has been stored in local storage.");

      const response = await fetch(
        "https://947d-2409-4043-2b1e-b220-2c02-2e31-bea-b4ca.in.ngrok.io/user/signin/email/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      const data = await response.json();
      navigate("/");
      console.log(data);
      console.log("api fetching")
    } else if(emailExists===true){
      console.log("Email address already exists.");
    }
  };

  // error handling of emails and mobile number

  const validate = (value) => {
    const emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const phoneRegex = /^\d{10}$/;

    if (emailRegex.test(value) || phoneRegex.test(value)) {
      setError("");
      return true;
    } else {
      setError("Please enter a valid email or phone number.");
      return false;
    }
  };

  const handleBlur = () => {
    validate(formData.email);
  };

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="SignupDiv">
        <div className="SignupText">
          <p>Sign In</p>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            {page === 1 && (
              <>
                <div className="inputDiv">
                  <label className="label">Phone number or email address</label>
                  <input
                    className="inputBox"
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Phone number or email address"
                  />
                  <p className="danger">{error}</p>
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
                    Enter Phone number or email address or{" "}
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
                  
                </div>
                <div>
                  <button className="BlueBtn">
                    <Link className="btnDecor">Sign In</Link>
                  </button>
                </div>
              </>
            )}
          </form>
          <div className="orLine">
            ---------------------- OR ------------------------
          </div>
        </div>
        <GoogleBtn/>
        <div className="alreadyText">
          Already have an account?{" "}
          <span>
            <Link className="btnDecorS" to={"/signin"}>
              Sign Up
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

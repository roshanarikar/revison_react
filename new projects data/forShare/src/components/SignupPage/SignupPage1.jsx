import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";
import { GoogleBtn } from "./GoogleBtn/GoogleBtn";
import "./SignupPage.css";

export const SignupPage1 = () => {
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    password: "" || "Roshanarika@123",
    otp: "",
  });
  const [mobilUser, setMobilUser] = useState({
    name: "",
    mobile: "",
    password: "" || "Roshanarika@123",
    otp: "",
  });
  const [emailUser, setemailUser] = useState({
    name: "",
    email: "",
    password: "" || "Roshanarika@123",
    otp: "",
  });
  const [page, setPage] = useState(1);
  const [emailExists, setEmailExists] = useState(false);
  const [mobileExists, setMobileExists] = useState(false);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
    setMobilUser({
      ...mobilUser,
      [event.target.name]: event.target.value,
    });
    setemailUser({
      ...emailUser,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    if (page === 2) {
      const checkEmail = async () => {
        console.log("pending request");
        const response = await fetch(
          `https://941f-2409-4043-2392-1e65-ed82-7145-ffec-a8c7.in.ngrok.io/user/existuser/${formData.mobile}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
          }
        );
        const data = await response.json();
        console.log(" email inner checkmail", data);
        setEmailExists(data.mobile);
        if (!(data === false)) {
          setError("Email already exists");
        }
      };
      console.log("outer checkmail");
      checkEmail();
    } else if (page === 3) {
      const checkMobile = async () => {
        console.log("pending request");
        const response = await fetch(
          `https://941f-2409-4043-2392-1e65-ed82-7145-ffec-a8c7.in.ngrok.io/user/existuser/${formData.mobile}`,
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
  }, [page, formData.mobile]);

  //submiting form data
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (
      page === 1 &&
      (emailUser.mobile.length > 10 || emailUser.mobile.length < 10)
    ) {
      setPage(2);
    } else if (page === 1 && emailUser.mobile.length === 10) {
      setPage(3);
    } else if (
      !emailExists &&
      (emailUser.email.length > 10 || emailUser.email.length < 10) &&
      validate() === "email"
    ) {
      localStorage.setItem("formData", JSON.stringify(emailUser));
      console.log("Sign-up form data has been stored in local storage.");

      const response = await fetch(
        "https://941f-2409-4043-2392-1e65-ed82-7145-ffec-a8c7.in.ngrok.io/user/signup/email/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(emailUser),
        }
      );
      const data = await response.json();
      navigate("/");
      console.log("email api", data);
      console.log("api fetching");
    } else if (
      !mobileExists &&
      mobilUser.mobile.length === 10 &&
      validate() === "mobile"
    ) {
      localStorage.setItem("formData", JSON.stringify(mobilUser));
      console.log("Sign-up form data has been stored in local storage.");

      const response = await fetch(
        "https://941f-2409-4043-2392-1e65-ed82-7145-ffec-a8c7.in.ngrok.io/user/signup/mobile/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(mobilUser),
        }
      );
      const data = await response.json();
      if (mobilUser.otp === 1234) {
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
      return "email";
    } else if (phoneRegex.test(value)) {
      setError("");
      return "mobile";
    } else {
      setError("Please enter a valid email or phone number.");
    }
  };

  //for error handles
  const handleBlur = () => {
    var a = validate(formData.mobile);
    console.log(a);
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
                    value={mobilUser.name || emailUser.name}
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
                    name="mobile"
                    value={mobilUser.mobile || emailUser.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Phone number or email address"
                  />
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
                    Enter Phone number or email address or{" "}
                    <span className="blueText">change email address</span>
                  </label>
                  <input
                    className="inputBox"
                    type="password"
                    name="password"
                    value={mobilUser.password || emailUser.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="To keep your profile safe"
                  />
                  <span className="greyText">Minimum 8 characters</span>
                  <p className="danger">{error}</p>
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
                    Enter Phone number or email address or{" "}
                    <span className="blueText">change email address</span>
                  </label>
                  <input
                    className="inputBox"
                    type="text"
                    name="otp"
                    onBlur={handleBlur}
                    value={mobilUser.otp}
                    onChange={handleChange}
                    placeholder="Enter 6 digit OTP"
                  />
                  <p className="danger">{error}</p>
                </div>
                <div>
                  <button className="BlueBtn">
                    <Link className="btnDecor">Sign Up</Link>
                  </button>
                </div>
              </>
            )}
          </form>
          <div className="orLine">
            ----------------------- OR -----------------------
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

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignInForm = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [userNameError, setUserNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let emailValid = true;
    let passwordValid = true;

    if (!userName) {
      emailValid = false;
      setUserNameError("Email is required");
    } else if (!/\S+@\S+\.\S+/.test(userName)) {
      emailValid = false;
      setUserNameError("Email is invalid");
    }

    if (!password) {
      passwordValid = false;
      setPasswordError("Password is required");
    }

    if (emailValid && passwordValid) {
        setLoading(true);
        // Check with the API
        fetch("https://f9d7-2409-4043-70a-1a52-a8ad-e51e-8830-9ff7.in.ngrok.io/authenticate", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userName, password }),
        })
          .then((res) => res.json())
          
          .then((data) => {
            setLoading(false);
            if (data.error) {
              setPasswordError(data.error);
            } else {
              // Redirect to the homepage
              console.log(data)
              navigate("/");
            }
          }
          )
          .catch((error) => {
            setLoading(false);
            console.error(error);
          });
      }
    };
  
    const handleUserNameChange = (e) => {
      setUserName(e.target.value);
      setUserNameError("");
    };
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setPasswordError("");
      };
    
      if (page === 1) {
        return (
          <div>
            <h2>Email Address</h2>
            {userNameError && <p style={{ color: "red" }}>{userNameError}</p>}
            <input type="text" value={userName} onChange={handleUserNameChange} />
            <button onClick={() => setPage(2)}>Next</button>
          </div>
        );
      }
    
      if (page === 2) {
        return (
          <div>
            <h2>Password</h2>
            {passwordError && <p style={{ color: "red" }}>{passwordError}</p>}
            <input type="password" value={password} onChange={handlePasswordChange} />
            {loading ? (
              <p>Signing in...</p>
            ) : (
              <button onClick={handleSubmit}>Submit</button>
            )}
          </div>
        );
      }
    };
    export default SignInForm;
    
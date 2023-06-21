import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const initialState = { username: "", email: "", password: "" };
  const [formValues, setFormvalues] = useState(initialState);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit,setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormvalues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  }

  useEffect(() => {
    if(Object.keys(formErrors).length ===0 && isSubmit){
      console.log(formValues)
    }
  });

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if(!values.email){
      errors.email = "Email is required"
    }
    if(!values.username){
      errors.username = "username is required"
    }
    else if(!regex.test(values.email)){
      errors.email = "This is not valid email format"
    }
    if(!values.password){
      errors.password = "Password is required"
    }
    else if(values.password.length < 4){
      errors.password = "password must be more than 4 charcters"
    }
    else if(values.password.length > 10){
      errors.password = "password cannot exceed more than 10 charcters"
    }
    return errors
  }
  return (
    <div className="App">
      {Object.keys(formErrors).length ===0 && isSubmit ? (<div>Sign in Successfully</div>) : (  <pre>{JSON.stringify(formValues, undefined,2)}</pre>)}
    
      <form onSubmit={handleSubmit}>
        <h1>Login Form</h1>
        <div></div>
        <div>
          <div>
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formValues.username}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.username}</p>
          <div>
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.email}</p>
          <div>
            <label>Password</label>
            <input
              type="text"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.password}</p>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;

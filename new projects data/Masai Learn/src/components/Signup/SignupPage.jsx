import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Signup.css";
import { GoogleBtn } from "../GoogleBtn/GoogleBtn";
import { useEffect, useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

export const SignupPage = () => {
  const [page, setPage] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [errorName, setErrorName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    mobileOrEmail: "",
    password: "",
    otp: "",
  });
  const [emailExists, setEmailExists] = useState(false);
  const [mobileExists, setMobileExists] = useState(false);
  const [count, setCount] = useState(60);
  const navigate = useNavigate();

  
  // send otp counter
  useEffect(() => {
    const timerId = setTimeout(() => {
      setCount(count - 1);
    }, 1000);
    if (count === 0) {
      setCount(60);
    }
    return () => clearTimeout(timerId);
  }, [count]);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    if (
      (page === 2 || page === 3) &&
      validate(formData.mobileOrEmail) === "email"
    ) {
      //Check email existing
      const checkEmail = async () => {
        console.log("pending request");
        const response = await fetch(
          `http://13.232.130.207/user/exist/${formData.mobileOrEmail}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
          }
        );
        const data = await response.json();
        console.log(" email inner checkmail", data);
        setEmailExists(data.mobileOrEmail);
        if (!(data === false)) {
          setErrorEmail("Account already exists");
          return 
        }
      };
      console.log("outer checkmail");
      checkEmail();
    } else if (page === 3 && validate(formData.mobileOrEmail) === "mobile") {
      //check mobile existing
      const checkMobile = async () => {
        console.log("pending request");
        const response = await fetch(
          `http://13.232.130.207/user/exist/${formData.mobileOrEmail}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
          }
        );
        const data = await response.json();
        console.log(" mobile inner checkmail", data);
        setMobileExists(data.mobileOrEmail);
        if (!(data === false)) {
          setErrorEmail("Account is already exists");
        }
      };
      console.log("outer checkmail");
      checkMobile();
    }
  }, [page, formData.mobileOrEmail]);

  //submiting form data
  const handleSubmit = async (event) => {
    console.log(validate(formData.mobileOrEmail));
    event.preventDefault();
    if (page === 1 && validate(formData.mobileOrEmail) === "email") {
      setPage(2);
    } else if (page === 1 && validate(formData.mobileOrEmail) === "mobile") {
      setPage(3);
    } else if (
      !emailExists &&
      validate(formData.mobileOrEmail) === "email" &&
      page === 2 &&
      validatePassword(formData.password) === false
    ) {
      setError(
        "at least one uppercase letter, one lowercase letter, one digit, and one special character."
      );
    } else if (
      !emailExists &&
      validate(formData.mobileOrEmail) === "email" &&
      page === 4
    ) {
      verifyOtpEmail();
    } else if (
      !emailExists &&
      validate(formData.mobileOrEmail) === "email" &&
      page === 2 &&
      validatePassword(formData.password) === true
    ) {
      //Submitting Form email data
      localStorage.setItem("formData", JSON.stringify(formData));
      console.log("Sign-up form data has been stored in local storage.");

      const response = await fetch(
        "http://13.232.130.207/user/signup/email",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      const data = await response.json();
      console.log("email api", data);
      navigate("/");

      console.log("api fetching");
    } else if (
      !mobileExists &&
      validate(formData.mobileOrEmail) === "mobile" &&
      page === 3
    ) {
      //Submitting Form mobile data
      localStorage.setItem("formData", JSON.stringify(formData));
      console.log("Sign-up form data has been stored in local storage.");

      if (formData.otp === "123456") {
        const response = await fetch(
          "http://13.232.130.207/user/signup/email",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
          }
        );

        const data = await response.json();
        console.log("mobile api calls", data);
        navigate("/");
      }

      console.log("api fetching");
    } else if (emailExists === true) {
      console.log("Email address already exists.");
    }
  };

  // error handling of emails and mobile number

  const validate = (value) => {
    const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    const phoneRegex = /^\d{10}$/;

    if (emailRegex.test(value)) {
      setError("");
      return "email";
    } else if (phoneRegex.test(value)) {
      setError("");
      return "mobile";
    } else {
      setError("Please enter a valid email or phone number.");
      return "invalid input";
    }
  };

  const validatePassword = (value) => {
    const passwordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
    if (passwordRegex.test(value)) {
      return true;
    } else {
      return false;
    }
  };

  const createOtpToEmail = async () => {
    const response = await fetch(
      `http://13.232.130.207/otp/send/email/${formData.mobileOrEmail}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        mode: "no-cors",
      }
    );

    const data = await response.json();
    console.log("email otp calls", data);
  };

  const verifyOtpEmail = async () => {
    const response = await fetch(
      `http://13.232.130.207/otp/email/verify/${formData.otp}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        mode: "no-cors",
      }
    );
    console.log("verifyOtpEmail", response.json());
    const data1 = await response.text();
    console.log("normal data",data1);
    localStorage.setItem("formData", JSON.stringify(formData));

    if(response.status===0){
      navigate("/")
    }
    else{
      console.log("Sign up fails")
    }
  };

  //for error handles
  const handleBlur = () => {
    var a = validate(formData.mobileOrEmail);
    console.log("in handler", a);
    if (formData.name) {
      setErrorName("");
    } else {
      setErrorName("Enter full name");
    }
  };
  // handleBlur();

  return (
    <div>
      <Box> 
        <Box margin={"auto"} w={100} marginTop={5}>
          <NavLink to={"/"}><img src="https://sso.masaischool.com/brand_dark.svg" alt="" /></NavLink>
        </Box>
      </Box>
      <Flex minH={"100vh"} align={"center"} justify={"center"}>
        <Stack w={"35%"}>
          <Box
            rounded={"2xl"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"2xl"}
            p={8}
          >
            <Heading fontSize={"2xl"} textAlign={"center"}>
              Sign up
            </Heading>
            <Stack spacing={4}>
              <form onSubmit={handleSubmit}>
                {page === 1 && (
                  <>
                    {/* This Div for full name and Email */}
  
                    <FormControl paddingY={2}>
                      <FormLabel>Full Name</FormLabel>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Enter full Name"
                      />
                    </FormControl>
                    <Text className="danger">{errorName}</Text>
                    <FormControl paddingY={2} padding>
                      <FormLabel>Phone number or email address</FormLabel>
                      <Input
                        type="text"
                        name="mobileOrEmail"
                        value={formData.mobileOrEmail}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Enter phone number or email address"
                      />
                    </FormControl>
                    <Text className="danger">{error}</Text>
                    <Text className="acceptText" padding={4}>
                      By signing up, I accept the Masai School{" "}
                      <NavLink className="blueLink2">
                        <span>Terms of Service</span>
                      </NavLink>{" "}
                      and acknowledge the{" "}
                      <NavLink className="blueLink2">
                        <span>Privacy Policy</span>
                      </NavLink>
                    </Text>
                    <Stack spacing={10} pt={2}>
                      <button className="signUpBtn">CONTINUE</button>
                    </Stack>
  
                    {/* /// */}
                  </>
                )}
                {page === 2 && (
                  <>
                    <FormControl paddingY={4}>
                      <FormLabel w="70%">
                        Enter Password for {formData.mobileOrEmail} or{" "}
                        <NavLink onClick={()=> setPage(1)} className="blueLink">
                          <span>change email address</span>
                        </NavLink>
                      </FormLabel>
                      <InputGroup>
                        <Input
                          type={showPassword ? "text" : "password"}
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="To keep your profile safe"
                        />
                        <InputRightElement h={"full"}>
                          <Button
                            variant={"ghost"}
                            onClick={() =>
                              setShowPassword((showPassword) => !showPassword)
                            }
                          >
                            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                          </Button>
                        </InputRightElement>
                      </InputGroup>
                      <Text className="danger">{errorEmail}</Text>
                      <Text paddingTop="1" fontSize="sm" color="grey">
                        Minimum 8 Characters
                      </Text>
                    </FormControl>
                    <Stack spacing={10} pt={2}>
                      <button
                        className="signUpBtn"
                        onClick={() => {
                          setPage(4);
                          createOtpToEmail();
                        }}
                      >
                        SIGN UP
                      </button>
                    </Stack>
                    <NavLink className="blueLink2" onClick={() => setPage(3)}>
                      Sign up with OTP
                    </NavLink>
                  </>
                )}
                {page === 3 && (
                  <>
                    <FormControl paddingY={5}>
                      <FormLabel w="81%">
                        Enter OTP sent to {formData.mobileOrEmail} or{" "}
                        <NavLink onClick={()=> setPage(1)} className="blueLink">
                          <span>change phone number</span>
                        </NavLink>{" "}
                        <span className="timer">Resend OTP in {count} sec</span>
                      </FormLabel>
                      <Input
                        type="number"
                        name="otp"
                        onBlur={handleBlur}
                        value={formData.otp}
                        onChange={handleChange}
                        placeholder="Enter 6 digits OTP"
                      />
                    </FormControl>
                    <Stack spacing={10} pt={2}>
                      <button className="signUpBtn" onClick={()=> verifyOtpEmail()}>SIGN UP</button>
                    </Stack>
                    <NavLink className="blueLink2" onClick={() => {
                      setPage(2)
                    }}>
                      Sign up with Password
                    </NavLink>
                  </>
                )}
                {page === 4 && (
                  <>
                    <FormControl paddingY={2}>
                      <FormLabel w="81%">
                        Enter OTP sent to {formData.mobileOrEmail} or{" "}
                        <NavLink to="/signup" className="blueLink">
                          <span>change email address</span>
                        </NavLink>{" "}
                        <span className="timer">Resend OTP in {count} sec</span>
                      </FormLabel>
                      <Input
                        type="number"
                        name="otp"
                        onBlur={handleBlur}
                        value={formData.otp}
                        onChange={handleChange}
                        placeholder="Enter 6 digits OTP"
                      />
                    </FormControl>
                    <Stack spacing={10} pt={2}>
                      <button
                        className="signUpBtn"
                        onClick={() => verifyOtpEmail()}
                      >
                        SIGN UP
                      </button>
                    </Stack>
                    <NavLink onClick={()=> setPage(2)} className="blueLink2">
                      Sign up with Password
                    </NavLink>
                  </>
                )}
              </form>
              <div className="divider">
                <div className="divider-line"></div>
                <div className="divider-text">OR</div>
                <div className="divider-line"></div>
              </div>
              <Stack spacing={10} pt={2}>
                <GoogleBtn />
              </Stack>
              <Stack pt={6}>
                <Text align={"center"}>
                  Already Have an Account?{" "}
                  <NavLink className="blueLink" to={"/signin"}>Sign in</NavLink>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </div>
  );
};

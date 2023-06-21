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
    InputRightElement
  } from "@chakra-ui/react";
  import { NavLink, useNavigate } from "react-router-dom"
  import "./Signin.css"
  import { GoogleBtn } from "../GoogleBtn/GoogleBtn";
import { useEffect, useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
  
  export const SigninPage = () =>{
    const [page,setPage] = useState(1)
    const [showPassword,setShowPassword] = useState(false)
    const [count, setCount] = useState(60)
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [userNameError, setUserNameError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      let userNameValid = true;
      let passwordValid = true;
  
      if (!userName) {
        userNameValid = false;
        setUserNameError("Email is required");
      } else if (!/\S+@\S+\.\S+/.test(userName)) {
        userNameValid = false;
        setUserNameError("Email is invalid");
      }
  
      if (!password) {
        passwordValid = false;
        setPasswordError("Password is required");
      }
  
      if (userNameValid && passwordValid) {
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
              if (data.token) {
                console.log("homepage",data)
                alert("Sign in Successfull");
                navigate("/");
              } else {
                // Redirect to the homepage
                alert("Please create your account")
                navigate("/signup")
                setPasswordError(data.error);
                console.log("error",data.error)
              }
            }
            )
            .catch((error) => {
              navigate("/signup")
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

    return (
      <Flex minH={"100vh"} align={"center"} justify={"center"}>
        <Stack w={"35%"} paddingBottom={"10px"}>
          <Box
            rounded={"2xl"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"2xl"}
            p={8}
          >
            <Heading fontSize={"2xl"} textAlign={"center"}>
              Sign In
            </Heading>
            <Stack spacing={4} paddingTop={5}> 
             <form onSubmit={handleSubmit}>
             {
                page===1 && (
                  <>
                   <FormControl id="email">
                <FormLabel>Phone number or email address</FormLabel>
                <Input
                  type="text" value={userName} onChange={handleUserNameChange}
                  placeholder="Enter phone number or email address"
                />
                {userNameError && <Text style={{ color: "red" }}>{userNameError}</Text>}
              </FormControl>
              
              <Stack spacing={10} pt={2} paddingTop={4}>
                {/* <Button
                  spinnerPlacement='start'
                  loadingText="Submitting"
                  size="lg"
                  bg={"rgb(174,198,244)"}
                  color={"white"}
                  _hover={{
                    bg: "rgb(67,88,246)",
                  }}
                  onClick={()=>(setPage(2))}
                >
                  <NavLink>CONTINUE </NavLink>
                </Button> */}
                <button className="signUpBtn" onClick={()=> setPage(2)}>CONTINUE</button>
              </Stack>
                  </>
                )
              }
              {
                page===2 && (
                  <>
                  <FormControl id="password">
              <FormLabel w="70%">Enter Password for {userName} or <NavLink to="signup" className="blueLink"><span>change email address</span></NavLink></FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'} value={password} onChange={handlePasswordChange}  placeholder="To keep your profile safe" />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                   
                  </Button>
                </InputRightElement>
                
              </InputGroup>
              {passwordError && <Text style={{ color: "red" }}>{passwordError}</Text>}
              <Text paddingTop="1" fontSize="sm" color="grey">Minimum 8 Characters</Text>
            </FormControl>
              <Stack spacing={10} pt={2}>
                {/* <Button
                  spinnerPlacement='start'
                  loadingText="Submitting"
                  size="lg"
                  bg={"rgb(174,198,244)"}
                  color={"white"}
                  _hover={{
                    bg: "rgb(67,88,246)",
                  }}

                  onClick={()=>(setPage(3))}
                >
                  SIGN UP
                </Button> */}
                <button className="signUpBtn" onClick={handleSubmit}>SIGN IN</button>
              </Stack>
              <NavLink onClick={()=> (setPage(3))} className="blueLink">Sign up with OTP</NavLink>
                  </>
                )
              }
              {
                page===3 && (
                  <>
                  <FormControl >
              <FormLabel w="81%">Enter OTP sent to {userName} or <NavLink to="/signup" className="blueLink"><span>change email address</span></NavLink> <span className="timer">Resend OTP in {count} sec</span></FormLabel>
                <Input type="text" placeholder="Enter 6 digits OTP" />
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  spinnerPlacement='start'
                  loadingText="Submitting"
                  size="lg"
                  bg={"rgb(174,198,244)"}
                  color={"white"}
                  _hover={{
                    bg: "rgb(67,88,246)",
                  }}
                >
                  SIGN UP
                </Button>
              </Stack>
              <NavLink onClick={()=>(setPage(2))} className="blueLink">Sign up with Password</NavLink>
                  </>
                )
              }
              {
                page===4 && (
                  <>
                  <FormControl >
              <FormLabel w="81%">Enter OTP sent to {userName} or <NavLink to="/signup" className="blueLink"><span>change phone number</span></NavLink> <span className="timer">Resend OTP in {count} sec</span></FormLabel>
                <Input type="text" placeholder="Enter 6 digits OTP" />
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  spinnerPlacement='start'
                  loadingText="Submitting"
                  size="lg"
                  bg={"rgb(174,198,244)"}
                  color={"white"}
                  _hover={{
                    bg: "rgb(67,88,246)",
                  }}
                >
                  SIGN UP
                </Button>
              </Stack>
                  </>
                )
              }
             </form>
               
              
              <div className="divider">
              <div className="divider-line"></div>
              <div className="divider-text">OR</div>
              <div className="divider-line"></div>
             </div>
             <Stack spacing={10} pt={2}>
                <GoogleBtn/>
              </Stack>
              <Stack pt={6}>
                <Text align={"center"}>
                  Don't Have an account? <NavLink to="/signup" className="blueLink">Sign up</NavLink>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }
  
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
    Link
  } from "@chakra-ui/react";
  import { NavLink } from "react-router-dom"
  import "./Signin.css"
  import { GoogleBtn } from "../GoogleBtn/GoogleBtn";
import { useEffect, useState } from "react";
  
  export  const Signin4 = () => {
   const [count, setCount] = useState(60)

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
            <Stack spacing={5} paddingTop="25px">
            <FormControl >
              <FormLabel w="81%">Enter OTP sent to 7038487589 or <NavLink to="/signup" className="blueLink"><span>change phone number</span></NavLink> <span className="timer">Resend OTP in {count} sec</span></FormLabel>
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
                  Already Have an Account? <Link color={"rgb(67,88,246)"}>Sign up</Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }
  
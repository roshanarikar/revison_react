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
    useColorModeValue
  } from "@chakra-ui/react";
  import { NavLink } from "react-router-dom"
  import "./Signin.css"
  import { GoogleBtn } from "../GoogleBtn/GoogleBtn";
  
  export const Signin1 = () =>{
   
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
              <FormControl id="email">
                <FormLabel>Phone number or email address</FormLabel>
                <Input
                  type="email"
                  placeholder="Enter phone number or email address"
                />
              </FormControl>
              
              <Stack spacing={10} pt={2} paddingTop={4}>
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
                  <NavLink to={"/signin/password"}>CONTINUE </NavLink>
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
                  Don't Have an account? <NavLink to="/signup" className="blueLink">Sign up</NavLink>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }
  
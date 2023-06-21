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
    Link,
    InputGroup,
    InputRightElement
  } from "@chakra-ui/react";
  import { NavLink } from "react-router-dom"
  import "./Signin.css"
  import { GoogleBtn } from "../GoogleBtn/GoogleBtn";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useState } from "react";
  
  export const Signin2 = () => {
    const [showPassword, setShowPassword] = useState(false);

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
            <FormControl id="password">
              <FormLabel w="70%">Enter Password for firstname@mail.com or <NavLink to="signup" className="blueLink"><span>change email address</span></NavLink></FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'}  placeholder="To keep your profile safe" />
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
              <Text paddingTop="1" fontSize="sm" color="grey">Minimum 8 Characters</Text>
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
              <NavLink to="/signin/email/otp" className="blueLink">Sign up with OTP</NavLink>
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
  
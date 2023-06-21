import {
    AccordionIcon,
    Box,
    Button,
    Flex,
    Heading,
    Text,
    Grid,
    Image,
    GridItem,
    Stack,
    Spinner,
  } from "@chakra-ui/react";
  import React, { useEffect, useState } from "react";
  import { Link } from "@chakra-ui/react";
  import axios from "axios";
  
  import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
  } from "@chakra-ui/react";
import { GetCertificateBox } from "../CertificateBox/CertificateBox";
import { NavLink } from "react-router-dom";
import "./TutorialDetail.css"

  
export const TutorialDetailAnalytics = () => {
    const [modules, setModules] = useState([]);
    const [loading, setLoading] = useState(false)
  
    useEffect(() => {
      setLoading(true)
      axios
        .get("http://13.232.130.207/learn/module/5")
        .then((res) =>{
          setModules(res.data)
          setLoading(false)
        })
        .catch((error) =>{
          console.log(error)
          setLoading(false)
        });
    }, []);
  
  
    return (
      <>
        <Stack w="90%" ml={"5%"} marginTop={"80px"}>
          <Box h={250} marginTop={20}>
            <Heading
                textAlign={"center"}
                fontWeight="800"
                fontSize={"48px"}
                lineHeight="62px"
                color={"#0A0103"}
            >
                Basics of Data Analytics
            </Heading>
            <Text
                color={"rgb(84,77,79)"}
                fontSize={"25px"}
                w="75%"
                mx={"auto"}
                textAlign={"center"}
                paddingY={5}
            >
                Learn the fundamentals of data analytics without having any prior experience
            </Text>
          </Box>
        </Stack>
  
        {/* links of pages -------------------------------------------*/}
        <Flex
          as="nav"
          align="center"
          wrap="wrap"
          padding="1.5rem"
          bg="light"
          margin={"0px 0px 0px 100px"}
          fontSize={"16px"}
          gap="2"
        >
          <Box display={"flex"} gap="2" fontSize={18}>
            <Link href="/" _hover={{ textDecoration: "underline" }}>
              Home
            </Link>
            <Text>{">"}</Text>
          </Box>
          <Box display={"flex"} gap="2" fontSize={18}>
            <Link
              href="/tutorials"
              mr="2"
              _hover={{ textDecoration: "underline" }}
            >
              All Tutorials
            </Link>
            <Text>{">"}</Text>
          </Box>
          <Box color={"red"} fontSize={18}>
            <Link href="tutorials/basics-of-data-analytics" _hover={{ textDecoration: "none" }}>
               Basics of Data Analytics
            </Link>
          </Box>
        </Flex>
  
        {/* left-box module and right box module -------------------- */}
  
        <Grid templateColumns="25% 73%" p={"48px 80px"} gap="32px" ml={6} className="TutorialDetailsContainer">
          {/* left-box module section ------------------------------- */}
          <Box w={400} marginLeft={"-100px"} marginTop={"-50px"}>
                <Grid templateColumns="25% 73%" p={"48px 80px"} gap="32px" ml={6}>
                {/* left-box module section ------------------------------- */}
                <GridItem  w={330}>
                  <Box
                    display={"block"}
                    height="98%"
                    p={"16px"}
                    paddingTop="24px"
                    paddingBottom="34px"
                    borderRadius="16px"
                    position={"sticky"}
                    boxShadow={
                      "0px -2px 11px -2px rgb(0 0 0 / 10%), 0px 10px 15px -3px rgb(0 0 0 / 10%), 0px 4px 6px -2px rgb(0 0 0 / 5%)"
                    }
                  >
                    <Heading
                      lineHeight={"1.2"}
                      fontSize="17px"
                      padding={"8px"}
                      mb="16px"
                      boxShadow={"0px 1px 0px #f3f2f2"}
                    >
                      Modules
                    </Heading>
                    <Flex
                      m={"auto"}
                      mt={"18px"}
                      mb="26px"
                      margin={"auto"}
                      w="100%"
                      gap={"16px"}
                      alignItems="center"
                      justify={"center"}
                    >
                      <Text
                        fontWeight={"400"}
                        fontSize="13px"
                        lineHeight={"16px"}
                        color="#3b3435"
                        display={"flex"}
                        gap="1"
                      >
                        Sign in to <Text fontWeight={"bold"}> Track Your Progress</Text>
                      </Text>
                      <Button
                        alignItems={"center"}
                        position="relative"
                        justifyContent={"center"}
                        borderRadius="8px"
                        fontWeight={"600"}
                        height="32px"
                        border={"1px solid"}
                        borderColor="red.500"
                        color={"red.500"}
                        pt="12px"
                        pb={"12px"}
                        letterSpacing="1.25px"
                        bg={"white"}
                        cursor={"pointer"}
                        _hover={{ bg: "red.100" }}
                      >
                        SIGN IN
                      </Button>
                    </Flex>
                    {modules.map((module) => (
                      <Accordion allowToggle={true} key={module.id} marginBottom="8px">
                        <AccordionItem border={"none"}>
                          <h2>
                            <AccordionButton
                              display={"flex"}
                              _hover={{ bg: "red.50", color: "red" }}
                              justifyContent="space-between"
                            >
                              <Box as="span" textAlign="left">
                                <Text fontWeight={"600"} fontSize="17px">
                                  Module {module.moduleNumber}
                                </Text>
                                <Text><NavLink to={`${module.pageUrl}`}>{module.moduleHeading}<NavLink/></NavLink></Text>
                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                          </h2>
                          <AccordionPanel pb={4}>
                            {   module.topics.map((topic) => (
                              <Box key={topic.id}>
                                <h3>
                                  <AccordionButton
                                    color={"#21191b"}
                                    alignItems="center"
                                    borderBottom={"1px solid #E7E6E6"}
                                    fontSize="16px"
                                    p={"8px 8px"}
                                    _hover={{ bg: "red.50", color: "red" }}
                                  >
                                    <Image
                                      mt={1}
                                      mx="2"
                                      w={"16px"}
                                      h="16px"
                                      display={"inline-block"}
                                      color={"red"}
                                      alt="Document-Icon"
                                      src="https://cdn-icons-png.flaticon.com/128/2991/2991106.png"
                                    ></Image>
                                    <Text><NavLink to={`${topic.pageUrl}`}>{topic.heading}</NavLink></Text>
                                  </AccordionButton>
                                </h3>
                              </Box>
                            ))}
                          </AccordionPanel>
                        </AccordionItem>
                      </Accordion>
                    ))}
        
                    {/* certeficate box on left-box module --------------------------- */}
                    <GetCertificateBox />
                  </Box>
                </GridItem>
        </Grid>
                </Box>
            
  
          {/*  left-box module end--------------------------------------- */}
  
          {/* right-box module start --------------------------------------- */}
          <GridItem>
            { loading ? <Spinner  marginLeft={"350px"} marginTop={20} thickness='4px' speed='0.65s' emptyColor='gray.200' color='red.500' size='xl'/> :
               modules.map((e) => (
              <Box
                key={e.id}
                borderWidth="1px"
                borderRadius="lg"
                p="4"
                mb={"6"}
              >
                <Text fontWeight="600" fontSize="17px" color={"#6e71cc"} ml="2">
                  Module {e.moduleNumber}
                </Text>
                <Text fontWeight={"bold"} fontSize={"18px"} mt="4" ml={"2"}>
                  {e.moduleHeading}
                </Text>
                {e.topics.map((topic) => (
                  <Box
                    key={topic.id}
                    mt="4"
                    cursor={"pointer"}
                    
                  >
                    <Image
                      mx="2"
                      w="16px"
                      h="16px"
                      display="inline-block"
                      alt="Document-Icon"
                      src="https://cdn-icons-png.flaticon.com/512/527/527995.png"
                    />
                    <Text display="inline" color={"#746f70"} fontSize="16.3px" _hover={{ color:"red" }}>
                    <NavLink to={`${topic.pageUrl}`}>{topic.heading}</NavLink>
                    </Text>
                  </Box>
                ))}
              </Box>
            ))}
          </GridItem>
          {/* right-box module end */}
        </Grid>
      </>
    );
  }
  
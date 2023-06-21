import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Flex, Grid, GridItem, Heading, Image, Spinner, Stack, Text } from "@chakra-ui/react"
import axios from "axios";
import { useEffect, useState } from "react";
import {  NavLink } from "react-router-dom";
import { GetCertificateBox } from "../../CertificateBox/CertificateBox";
import { ProgramCard } from "../../ProgramOffer/ProgramCard/ProgramCard";
import { StarRating } from "../../StarRating/StarRating";



export const TopicFigma = () =>{
    const [Topic, setTopic] = useState([]);
    const [modules, setModules] = useState([]);
    const [loading, setLoading] = useState(false)

    
  useEffect(() => {
    axios
      .get("http://13.232.130.207/learn/module/2")
      .then((res) => {
        console.log("subJava",res.data)
        setModules(res.data)
      })
      .catch((error) => console.log(error));
  }, []);
  

    useEffect(() => {
      setLoading(true)
      axios
        .get("http://13.232.130.207/learn/topic/all?pageSize=1&pageNumber=16")
        .then((res) => {
          console.log("javascript",res.data)
          setTopic(res.data)
          setLoading(false)
        })
        .catch((error) => {
          console.error(error)
          setLoading(true)
        });
    }, []);
      
      
    return(
        <>
        <Stack marginTop={20} >
        {  Topic?.map((e)=>{
            return(
              <Box marginX={10} key={e.id}>
                <img src={e?.topicImageUrl} alt="Topic Details" />
              </Box>
            )
          })
          }
            <Box>
            <Flex
                as="nav"
                align="center"
                wrap="wrap"
                padding="1.5rem"
                bg="light"
                margin={"0px 0px 0px 100px"}
                colorScheme="light"
                fontSize={"16px"}
                gap="2"
            >
        <Box display={"flex"} gap="2">
          <NavLink to={"/"}>
            Home
          </NavLink>
          <Text>{">"}</Text>
        </Box>
        <Box display={"flex"} gap="2">
          <NavLink
            to={"/tutorials"}
            mr="2"
            _hover={{ textDecoration: "underline" }}
          >
            All Tutorials
          </NavLink>
          <Text>{">"}</Text>
        </Box>
        <Box display={"flex"} gap="2">
          <NavLink to={"/tutorials/figma-for-developers"} _hover={{ textDecoration: "underline" }}>
          Figma For Developers
          </NavLink>
          <Text>{">"}</Text>
        </Box> 
        <Box color={"red"}>
          <NavLink to={"/tutorials/javascript-tutorial/intro-to-figma-for-developers"} _hover={{ textDecoration: "none" }}>
          Introduction
          </NavLink>
        </Box> 
        </Flex>
            </Box>
            <Flex margin={"auto"}>
                <Box w={400}  >
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
                            {module.topics.map((topic) => (
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
                { loading ? <Spinner  marginLeft={"350px"} marginTop={20} thickness='4px' speed='0.65s' emptyColor='gray.200' color='red.500' size='xl'/> :
                        Topic?.map((e)=>{
                            return(
                <Box key={e.id} w={1000} marginX={10} paddingX={5} marginY={10}>
                    <Box>
                        <Heading size={"2xl"} fontWeight={"bold"}>{e.heading}</Heading>
                        <Flex fontSize={18} flexDirection={"row"} color={"grey"} gap={5} marginY={5}>
                            <Text>By {e.author}</Text>
                            <Text> | </Text>
                            <Text>Updated on : {e.updatedOn}</Text>
                            <Text> | </Text>
                            {/* <Text>{e.readingTime}</Text> */}
                            <Text>3 mins read</Text>
                            <Text> | </Text>
                            <Text>Published on : {e.publishedOn}</Text>
                        </Flex>
                    </Box>
                    <Box borderBottomWidth={1} borderColor={"grey"}>
                    { e.subTopics.map((item)=>{
                      return(
                        
                      <Box key={item.id} marginY={5}>
                      <Heading size={"xl"}>{item.subTopicHeading}</Heading>
                      <Text fontSize={18} paddingY={3} lineHeight={7} whiteSpace="pre-wrap">{item.description}</Text>
                     </Box>
                      )
                    })
                    }
                        
                    </Box>
                    <Flex flexDirection={"column"}  borderBottomWidth={1} borderColor={"grey"}>
                    <Box marginTop={5}>
                        <Heading size="lg">How would you rate this article?</Heading>
                        <StarRating/>
                    </Box>
                    <Box marginY={10} marginLeft={"700px"} gap={10}  w={300}>
                        <Button colorScheme='red' variant='outline'>Previous</Button>
                        <Button colorScheme='red' variant='outline' marginLeft={5}>Next</Button>
                    </Box>
                    </Flex>
                    <Box paddingTop={-30}>
                        <Text fontSize={25} fontWeight={"bold"}>Check Out Programs Offered By Masai</Text>
                       <Box marginX={6}><ProgramCard /></Box>
                       <Box w={150}  marginLeft={780} marginTop={-50} ><Button background={"none"} color={"red"} _hover={{background:"red.100"}}><NavLink to={"https://masaischool.com/courses/?utm_source=10th_Oct_masai_learn_header&utm_medium=masai_learn&utm_campaign=10th_Oct_masai_learn_header"}>KNOW MORE &gt;</NavLink></Button></Box>
                       <Box margin={"auto"} paddingX={20} marginY={10}><Text fontSize={18}>If you are currently studying in 1st, 2nd or pre-final year of college, <NavLink color="red"><span>Click here</span></NavLink></Text></Box>
                    </Box>
                </Box>
                )
              })
          }
            </Flex>
        </Stack>
        </>
    )
}
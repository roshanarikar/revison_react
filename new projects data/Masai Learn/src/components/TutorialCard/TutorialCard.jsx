import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
  Image,
  Container,
  Spinner,

} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { MiniSearch } from "../SearchInput/MiniSearch/MiniSearch";
import "./TutorialCard.css"


export const TutorialCard = () =>{
    const [cards, setCards] = useState([]);
    const [ loading, setLoading] = useState(false)

    useEffect(() => {
      setLoading(true)
      axios
        .get("http://13.232.130.207/learn/tutorial/all",{
          headers: { "Content-Type": "application/json" },
          mode: "no-cors",
        })
        .then((response) => {
          setCards(response.data)
          setLoading(false)
        })
        .catch((error) => {
          console.error(error)
          setLoading(true)
        });
    }, []);
  
    const cardStyles = {
      border: "1px solid #D9D9D9",
      borderRadius: "10",
      mt: "8",
      ":hover": {
        boxShadow: "xl",
      },
    };
  
    const buttonStyles = {
      border: "1px solid #ED0331",
      color: "#ED0337",
      bg: "white",
      ":hover": {
        bg: "red.50",
      },
    };

    return(
        <Container as={"Tutorial-page"} border={"5px solid red"} >
      <Box w="90%" ml={"5%"}  my="80px" paddingTop={8}>
        <Heading  textAlign={"center"} size="2xl" className="tutorialTitle">
          Tutorial Library
        </Heading>
        <Text
          mt={"50px"}
          color={"rgb(84,77,79)"}
          fontSize={"25px"}
          w="65%"
          mx={"auto"}
          textAlign={"center"} className="tutorialSubTitle"
        >
          Not looking for specific? Browse through hundreds of topics, articles,
          and resources to develop your understanding.
        </Text>
      </Box>
      <Flex>
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
                gap="2" w={400}
            >
        <Box display={"flex"} gap="2" className="NavLinkText" fontSize={18}>
          <NavLink to={"/"}>
            Home
          </NavLink>
          <Text>{">"}</Text>
        </Box>
        <Box display={"flex"} gap="2" color={"red"} className="NavLinkText" fontSize={18}>
          <NavLink
            to={"/tutorials"}
            mr="2"
            _hover={{ textDecoration: "underline" }}
          >
            All Tutorials
          </NavLink>
        </Box>
        </Flex>
        </Box>
        <Box>
          <MiniSearch/>
        </Box>
      </Flex>
      <Grid
        w={"90%"}
        ml="5%"
        templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(3, 1fr)"]}
        gap="8"
        paddingBottom={10}
      >
        { loading ? <Spinner  marginLeft={"650px"} marginTop={20} thickness='4px' speed='0.65s' emptyColor='gray.200' color='red.500' size='xl'/> : cards.map((card) => (
          <GridItem key={card.id} sx={cardStyles}>
            <Image
              h="40%"
              w={"100%"}
              borderTopRadius="10"
              src={card.imageUrl}
              alt="Card Image"
            />
            <Text
              h={"3%"}
              color={"#60c6ec"}
              fontSize="13"
              bgColor={"#F2FDFF"}
              w="20%"
              ml={"4"}
              mt={"3"}
              fontWeight={"500"}
            >
              {card.level}
            </Text>
            <Text
              h={"9%"}
              ml={"4"}
              mt="2"
              fontSize="25px"
              fontWeight={"800"}
              lineHeight={"40px"}
            >
              {" "}
              {card.heading}{" "}
            </Text>

            <Box p={"4"} h={"30%"}>
              <Flex justify="space-between" fontWeight={"500"} color="#3F3435">
                <Text display={"flex"} gap="1">
                <Image mt={.5} w={"19px"} h="17px" alt="book" src="https://www.masaischool.com/learn/_next/static/media/Book.2bf5b3cf.svg"/>
                    Number of modules</Text>
                <Text>{card.numberOfModules}</Text>
              </Flex>
              <Flex
                justify="space-between"
                my={"3"}
                fontWeight={"500"}
                color="#3F3435"
              >
                <Text display={"flex"} gap="1">
                <Image mt={1} w={"19px"} h="18px" alt="book" src="https://www.masaischool.com/learn/_next/static/media/DateAndTime.71ef0cdc.svg"/>
                    Time required to complete</Text>
                <Text>{card.timeRequiredToComplete}</Text>
              </Flex>
              <Box h={70} white-space={"nowrap"} overflow={"hidden"}><Text  text-overflow={"ellipsis"}> {card.description} </Text></Box>
            </Box>

            <Flex
              h={"16%"}
              p={"4"}
              justify={"space-between"}
              alignItems="center"
            >
              <Box w={150}>{card.hasCertificate === true ? <Text display={"flex"} gap="1" fontSize={11} fontWeight={"bold"}><Image bg="blue.100" mt={1} w={4} h={4} alt="book" src="https://cdn-icons-png.flaticon.com/512/1426/1426757.png"/>CERTIFICATE INCLUDED</Text> : null}</Box>
              <Box marginRight={"100px"}><Button color={"red"} ml="64%" fontWeight="500" p={"6"} sx={buttonStyles}><NavLink to={`${card.redirectedUrl}`}>VIEW DETAILS</NavLink></Button></Box>
            </Flex>
          </GridItem>
        ))}
      </Grid>
    </Container>
    )
}
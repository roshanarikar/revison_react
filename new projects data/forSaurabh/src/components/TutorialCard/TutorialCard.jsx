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

} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";



export const TutorialCard = () =>{
    const [cards, setCards] = useState([]);

    useEffect(() => {
      axios
        .get("http://localhost:8080/cards",{
          headers: { "Content-Type": "application/json" },
          mode: "no-cors",
        })
        .then((response) => setCards(response.data))
        .catch((error) => console.error(error));
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
        <Container as={"Tutorial-page"} >
      <Box w="90%" ml={"5%"}  my="80px" paddingTop={5}>
        <Heading  textAlign={"center"} size="2xl">
          Tutorial Library
        </Heading>
        <Text
          mt={"50px"}
          color={"rgb(84,77,79)"}
          fontSize={"25px"}
          w="65%"
          mx={"auto"}
          textAlign={"center"}
        >
          Not looking for specific? Browse through hundreds of topics, articles,
          and resources to develop your understanding.
        </Text>
      </Box>
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
        <Box display={"flex"} gap="2" color={"red"}>
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
      <Grid
        w={"90%"}
        ml="5%"
        templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
        gap="8"
        paddingBottom={10}
      >
        {cards.map((card) => (
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
              <Text> {card.description} </Text>
            </Box>

            <Flex
              h={"16%"}
              p={"4"}
              justify={"space-between"}
              alignItems="center"
            >
              <Box w={150}>{card.hasCertificate === "CERTIFICATE INCLUDED" ? <Text display={"flex"} gap="1" fontSize={12}><Image bg="blue.100" mt={1} w={4} h={4} alt="book" src="https://cdn-icons-png.flaticon.com/512/1426/1426757.png"/>{card.hasCertificate} </Text> : null}</Box>
              <Box marginRight={"100px"}><Button color={"red"} ml="64%" fontWeight="500" p={"6"} sx={buttonStyles}><NavLink to={`${card.redirectUrl}`}>VIEW DETAILS</NavLink></Button></Box>
              
                {/* {card.hasCertificate === "CERTIFICATE INCLUDED" ? <Text display={"flex"} gap="1"><Image  bg="blue.100" mt={1} w={"19px"} h="16px" alt="book" src="https://cdn-icons-png.flaticon.com/512/1426/1426757.png"/>{card.hasCertificate} </Text> : null}
                {card.button === <NavLink to={`${card.redirectUrl}`}>VIEW DETAILS</NavLink> ? <Button p={"6"} sx={buttonStyles}  to={"/javaScript"}>{card.button}
                 </Button> : <Text color={"red"} ml="64%" fontWeight="500">{card.button}</Text> } */}
              
            </Flex>
          </GridItem>
        ))}
      </Grid>
    </Container>
    )
}
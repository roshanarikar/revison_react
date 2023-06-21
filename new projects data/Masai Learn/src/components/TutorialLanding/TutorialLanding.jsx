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
  Spinner,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import "./TutorialLanding.css"

export const TutorialLanding = () => {
  const [cards, setCards] = useState([]);
  const [ loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios
      .get("http://13.232.130.207/learn/tutorial/all?pageSize=3&pageNumber=1")
      .then((response) => {
        setCards(response.data)
        setLoading(false)
      })
      .catch((error) =>{
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

  return (
    <div border={"black"} b={"white"}>
      <Box w="90%" ml={"5%"} my="10px">
        <Heading textAlign={"center"} fontWeight={700} size="xl">
          Tutorials
        </Heading>
      </Box>

      <Grid
        w={"90%"}
        ml="5%" className="mainGridTutorial"
        templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(3, 1fr)"]}
        gap={5}
      >
        { loading ? <Spinner  marginLeft={"650px"} marginTop={20} thickness='4px' speed='0.65s' emptyColor='gray.200' color='red.500' size='xl'/> : cards.map((card) => (
          <GridItem key={card.id} sx={cardStyles} className="TutorialItemLanding">
            <Image
              h="40%"
              w={"100%"}
              borderTopRadius="10"
              src={card.imageUrl}
              alt="Card Image"
              className="cardImage"
            />
            <Text
              h={"3%"}
              color={"#60c6ec"}
              fontSize={15}
              bgColor={"#F2FDFF"}
              w="20%"
              ml={"4"}
              mt={"3"}
              fontWeight={"500"}
              className="levelText"
            >
              {card.level}
            </Text>
            <Text
              h={"9%"}
              ml={"4"}
              mt="2"
              fontSize={28}
              fontWeight={"800"}
              lineHeight={"40px"}
              className="headingText"
            >
              {" "}
              {card.heading}{" "}
            </Text>

            <Box p={"4"} h={"30%"}>
              <Flex justify="space-between" fontWeight={"500"} color="#3F3435" >
                <Text display={"flex"} gap="1" fontSize={18} className="moduleText">
                  <Image
                    mt={0.5}
                    w={"19px"}
                    h="17px"
                    alt="book" className="moduleImg"
                    src="https://www.masaischool.com/learn/_next/static/media/Book.2bf5b3cf.svg"
                  />
                  Number of modules
                </Text>
                <Text  className="moduleText" fontSize={18}>{card.numberOfModules}</Text>
              </Flex>
              <Flex
                justify="space-between"
                my={"3"}
                fontWeight={"500"}
                color="#3F3435" 
              >
                <Text display={"flex"} gap="1" fontSize={18} className="moduleText">
                  <Image
                    mt={1}
                    w={"19px"}
                    h="18px"
                    alt="book" className="moduleImg"
                    src="https://www.masaischool.com/learn/_next/static/media/DateAndTime.71ef0cdc.svg"
                  />
                  Time required to complete
                </Text>
                <Text  className="moduleText" fontSize={18}>{card.timeRequiredToComplete}</Text>
              </Flex>
              <Text fontSize={18} color={"grey"} className="moduleText"> {card.description} </Text>
            </Box>

            <Flex
              h={"16%"}
              p={"4"}
              alignItems="center"
            >

              <Box w={150} >{card.hasCertificate === "CERTIFICATE INCLUDED" ? <Text className="certiBox" display={"flex"} gap="1" fontSize={12}><Image className="certiImg" bg="blue.100" mt={1} w={4} h={4} alt="book" src="https://cdn-icons-png.flaticon.com/512/1426/1426757.png"/>{card.hasCertificate} </Text> : null}</Box>
              <Box className="viewBtnBox" marginRight={"100px"}><Button className="viewBtn" size={"md"} color={"red"} ml="64%" fontWeight="500" p={"6"} sx={buttonStyles}><NavLink to={`${card.redirectedUrl}`}>VIEW DETAILS</NavLink></Button></Box>
               
            </Flex>
          </GridItem>
        ))}
      </Grid>
       
      <Text className="viewMoreText" color={"rgb(225,38,61)"} marginLeft={1300} marginTop={6} fontWeight={"600"}><NavLink to={"/tutorials"}>VIEW ALL &gt;</NavLink></Text>
    </div>
  );
};

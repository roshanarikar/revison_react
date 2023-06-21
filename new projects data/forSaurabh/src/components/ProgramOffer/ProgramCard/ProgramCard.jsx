import {
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export const ProgramCard = () => {
  const [card, setCard] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/programs")
      .then((res) => setCard(res.data))
      .catch((err) => console.error(err));
  },[]);

  return (
    <Flex gap={4}>
      { card?.data?.programs?.map((e) => {
        return (
          <Center px={1} h={700} key={e.id}>
            <Box
              maxW={"432px"}
              w={"full"}
              bg={"white"}
              boxShadow={"xl"}
              rounded={"md"}
              overflow={"hidden"}
            >
              <Box
                h={"120px"}
                w={"full"}
                backgroundColor={e.bgcolor}
                objectFit={"cover"}
              />
              <Flex justify={"center"} mt={-14}>
                <Avatar
                  w={"180px"}
                  height={"180px"}
                  src={e.thumbnail.url}
                  alt={"Author"}
                  css={{
                    border: "2px solid white",
                  }}
                />
              </Flex>

              <Box>
                <Box paddingX={8}>
                  <Stack spacing={2} mb={5}>
                    <Heading align={"center"} fontSize={24} fontWeight={"800"}>
                     {e.title}
                    </Heading>
                    <Text align={"center"} color={"grey"}>
                      {e.programpopulartag}
                    </Text>
                    <Text align={"center"}>
                      <span className="eduText">{e.tags.split(",")[0]}</span>{" "}
                      <span className="eduText">
                      {e.tags.split(",")[1]}
                      </span>
                    </Text>
                    <Flex paddingY={1}>
                      <svg
                        width="24px"
                        height="24px"
                        fill="none"
                        viewBox="0 0 22 18"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="m11 18-7-3.8v-6l-4-2.2 11-6 11 6v8h-2v-6.9l-2 1.1v6l-7 3.8zm0-8.3 6.85-3.7-6.85-3.7-6.85 3.7 6.85 3.7zm0 6.025 5-2.7v-3.775l-5 2.75-5-2.75v3.775l5 2.7z"
                          fill="#B3B3B3"
                        ></path>
                      </svg>
                      <Text paddingX={3} fontSize={17} fontWeight={"600"}>
                        {e.educationcriteria}
                      </Text>
                    </Flex>
                    <Flex paddingY={1}>
                      <svg
                        width="24px"
                        height="24px"
                        fill="none"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="m6.6666 2.5h8.3333l-0.8333 1.6667h-2.7167c0.4 0.48333 0.7 1.05 0.875 1.6667h2.675l-0.8333 1.6667h-1.6667c-0.2083 2.1417-1.8833 3.8583-4 4.1333v0.0334h-0.58334l5 5.8333h-2.0833l-5-5.8333v-1.6667h2.0833c1.4667 0 2.6833-1.0833 2.8833-2.5h-4.9666l0.83334-1.6667h3.8833c-0.4666-0.98333-1.4666-1.6667-2.6333-1.6667h-2.0833l0.83334-1.6667z"
                          fill="#B3B3B3"
                        ></path>
                      </svg>
                      <Text paddingX={3} fontSize={17} fontWeight={"600"}>
                        {e.payment}
                      </Text>
                    </Flex>
                    <Flex paddingY={1}>
                      <svg
                        width="20px"
                        height="20px"
                        fill="none"
                        viewBox="0 0 20 19"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18 4C18.58 4 19.05 4.2 19.42 4.59C19.8 5 20 5.45 20 6V17C20 17.55 19.8 18 19.42 18.41C19.05 18.8 18.58 19 18 19H2C1.42 19 0.95 18.8 0.58 18.41C0.2 18 0 17.55 0 17V6C0 5.45 0.2 5 0.58 4.59C0.95 4.2 1.42 4 2 4H6V2C6 1.42 6.2 0.95 6.58 0.58C6.95 0.2 7.42 0 8 0H12C12.58 0 13.05 0.2 13.42 0.58C13.8 0.95 14 1.42 14 2V4H18ZM2 6V17H18V6H2ZM12 4V2H8V4H12Z"
                          fill="#B3B3B3"
                        ></path>
                      </svg>
                      <Text paddingX={3} fontSize={17} fontWeight={"600"}>
                        {e.whentopay}
                      </Text>
                    </Flex>
                  </Stack>
                </Box>

                <Button
                  w={445}
                  h={"60px"}
                  mt={2}
                  bg={"rgb(225,38,61)"}
                  color={"white"}
                  fontSize={21}
                >
                  <NavLink to="https://masaischool.com/program/masai-0ne/?utm_source=10th_Oct_masai_learn_header&utm_medium=masai_learn&utm_campaign=10th_Oct_masai_learn_header">
                    View Courses
                  </NavLink>
                </Button>
              </Box>
            </Box>
          </Center>
        );
      })}
    </Flex>
  );
};

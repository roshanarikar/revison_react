import {
  Container,
  SimpleGrid,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  useColorModeValue,
  GridItem,
  Grid,
} from "@chakra-ui/react";
import "./AboutSection.css";


export const AboutSection = () => {
  return (
    <Container maxW={"7xl"} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Heading className="aboutTitle">About Masai School</Heading>
          <Text className="aboutSubTitle" color={"gray.500"} fontSize={"lg"}>
            Masai is an outcome driven career school. Our mission is to skill
            India’s untapped & underutilized talent, and to train them for some
            of the most in-demand jobs in the world. We are introducing a new
            model of higher education in which we, Masai, invest in our
            students’ future and success.
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.100", "gray.700")}
              />
            }
          >
            <Grid
              w="750px"
              templateRows="repeat(2, 1fr)"
              templateColumns="repeat(5, 1fr)"
              gap={8}
              paddingTop={5} className="aboutSection"
            >
              <GridItem colSpan={2} >
                <Flex>
                <div ><img className="heartImg" width="20px" height="20px" src="https://masaischool.com/learn/_next/static/media/Heart.9d7e464b.svg" alt="" /></div>
                <Text className="courseTitle" fontSize={17} fontWeight={"bold"} paddingLeft={3} >Technical Skill Development</Text>
                </Flex>
                <Text className="courseSubTitle" fontSize={15} fontWeight={500} color={"grey"} paddingLeft={8} >
                Our practice-based-learning curriculum make you an industry-ready developer/analyst in 30 weeks.
                </Text>
              </GridItem>
              <GridItem colSpan={2} >
              <Flex>
                <div><img className="heartImg" width="20px" height="20px" src="https://masaischool.com/learn/_next/static/media/Heart.9d7e464b.svg" alt="" /></div>
                <Text className="courseTitle" fontSize={17} fontWeight={"bold"} paddingLeft={3} >Holistic Development</Text>
                </Flex>
                <Text  className="courseSubTitle"fontSize={15} fontWeight={500} color={"grey"} paddingLeft={8}>
                Develop your english speaking skills with English Fluency Marathons and soft skill training
                </Text>
              </GridItem>
              <GridItem colSpan={2} >
              <Flex>
                <div><img className="heartImg" width="20px" height="20px" src="https://masaischool.com/learn/_next/static/media/Heart.9d7e464b.svg" alt="" /></div>
                <Text className="courseTitle" fontSize={17} fontWeight={"bold"} paddingLeft={3} >2000+ Hiring Partners</Text>
                </Flex>
                <Text  className="courseSubTitle"fontSize={15} fontWeight={500} color={"grey"} paddingLeft={8}>
                Companies like Paytm, Ola, Swiggy, Sharechat, Capgemini, Dream11, IBM and more hire from us.
                </Text>
              </GridItem>
              <GridItem colSpan={2} >
              <Flex>
                <div><img className="heartImg" width="35px" height="35px" src="https://masaischool.com/learn/_next/static/media/Heart.9d7e464b.svg" alt="" /></div>
                <Text className="courseTitle" fontSize={17} fontWeight={"bold"} paddingLeft={3} >Masai & N.S.D.C. Announce Strategic Partnership.</Text>
                </Flex>
                <Text className="courseSubTitle" fontSize={15} fontWeight={500} color={"grey"} paddingLeft={8}>
                The partnership with National Skill Development Corporation has the potential to create equal employment.
                </Text>
              </GridItem>
            </Grid>
          </Stack>
        </Stack>
        <Flex>
          <video
            preload="auto"
            autoplay
            loop
            width="500px"
            height="500px"
            className="videoAbout"
            src="https://masaischool.com/learn/videos/about.mp4"
            type="video/mp4"
          ></video>
        </Flex>
      </SimpleGrid>
    </Container>
  );
};

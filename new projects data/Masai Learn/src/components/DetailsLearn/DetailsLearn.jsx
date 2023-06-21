import { Box, Container, Flex, Text } from "@chakra-ui/react"
import "./DetailsLearn.css"


export const DetailsLearn = () =>{
    return(
        <Container maxW='10xl' centerContent>
            <Flex className="detailsContainer">
                <Box w={600} className="whatDetails">
                    <Text fontSize={26} paddingY={5} fontWeight={"700"} className="titleDetails">
                    What will you get to learn from these tutorials?
                    </Text>
                      <Flex paddingY={2} >
                      <div><img className="stars" width="20px" height="20px" src="https://masaischool.com/learn/_next/static/media/Star.0c945e31.svg" alt="" /></div>
                      <Text className="subTitleDetails" fontSize={17} paddingLeft={4} color={"grey"}>In-depth blogs on all major aspects of software development and programming.</Text>
                      </Flex>
                      <Flex paddingY={2}>
                      <div ><img className="stars" width="20px" height="20px" src="https://masaischool.com/learn/_next/static/media/Star.0c945e31.svg" alt="" /></div>
                      <Text className="subTitleDetails" fontSize={17} paddingLeft={4} color={"grey"}>Tutorials on JavaScript, SQL, DSA, MERN, NodeJS, and other developer tools.</Text>
                      </Flex>
                      <Flex paddingY={2}>
                      <div><img className="stars" width="20px" height="20px" src="https://masaischool.com/learn/_next/static/media/Star.0c945e31.svg" alt="" /></div>
                      <Text className="subTitleDetails" fontSize={17} paddingLeft={4} color={"grey"}>Assignments and problem statements to apply your learnings.</Text>
                      </Flex>
                      <Flex paddingY={2}>
                      <div><img className="stars" width="20px" height="20px" src="https://masaischool.com/learn/_next/static/media/Star.0c945e31.svg" alt="" /></div>
                      <Text className="subTitleDetails" fontSize={17} paddingLeft={4} color={"grey"}>Tips and tricks to create portfolios on GitHub, LeetCode, HackerEarth, and HackerRank</Text>
                      </Flex>
                </Box>


                <Box w={600} paddingX={10} className="whatDetails">
                    <Text fontSize={26} paddingY={5} fontWeight={"700"} className="titleDetails">
                    How will these tutorials help you?
                    </Text>
                      <Flex paddingY={3}>
                      <div ><img className="stars"width="20px" height="20px" src="https://masaischool.com/learn/_next/static/media/Star.0c945e31.svg" alt="" /></div>
                      <Text className="subTitleDetails" fontSize={17} paddingLeft={4} color={"grey"}>Become job-ready with free resources and up your skills</Text>
                      </Flex>
                      <Flex paddingY={3}>
                      <div ><img className="stars" width="20px" height="20px" src="https://masaischool.com/learn/_next/static/media/Star.0c945e31.svg" alt="" /></div>
                      <Text className="subTitleDetails" fontSize={17} paddingLeft={4} color={"grey"}>Create your online presence to attract top opportunities in tech</Text>
                      </Flex>
                      <Flex paddingY={3}>
                      <div><img className="stars" width="20px" height="20px" src="https://masaischool.com/learn/_next/static/media/Star.0c945e31.svg" alt="" /></div>
                      <Text className="subTitleDetails" fontSize={17} paddingLeft={4} color={"grey"}>Request tutorials for hot topics you want to be covered.</Text>
                      </Flex>
                      <Flex paddingY={3}>
                      <div ><img className="stars" width="20px" height="20px" src="https://masaischool.com/learn/_next/static/media/Star.0c945e31.svg" alt="" /></div>
                      <Text className="subTitleDetails" fontSize={17} paddingLeft={4} color={"grey"}>Connect with a thriving community of like-minded members! #Tribe</Text>
                      </Flex>
                </Box>
            </Flex>
        </Container>
    )
}
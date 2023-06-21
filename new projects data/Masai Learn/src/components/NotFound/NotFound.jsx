import { Box, Heading, Text } from "@chakra-ui/react"


export const NotFound = () =>{
    return(
        <>
         <Box marginY={5} paddingTop={10} w={600} h={300} margin={"auto"} marginLeft={"600px"}>
            <Box margin={"auto"} paddingX={20} marginY={5}>
                <img width={100} height={100} src="https://masaischool.com/learn/_next/static/media/NoSearchResults.5cbcd989.svg" alt="Not found" />
            </Box>
            <Heading size={"md"} marginY={5}>Result not found for your search</Heading>
            <Text marginLeft={-20} >Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum</Text>
            </Box>
        </>
    )
}
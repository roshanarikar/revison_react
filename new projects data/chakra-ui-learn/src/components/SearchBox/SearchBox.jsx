import { Box, Container,  Heading,  Text } from "@chakra-ui/react"
import axios from "axios";
import { useEffect, useState } from "react";
import { TutorialLanding } from "../TutorialLanding/TutorialLanding"
import "./SearchBox.css"
import { SearchQuery } from "../SearchInput/SearchQuery";

export const SearchBox = () =>{ 
    return(
        <Container maxWidth={"100%"} className="SearchBoxContainer" marginTop={20} >
           <Box w={900} margin={"auto"} paddingY={16} paddingX={11} className="SearchBoxBody">
                <Heading className="LearnTitle" size='3xl' fontWeight={"bold"} noOfLines={1} paddingX={20} marginLeft={10}>
                    Learn. Practice. Grow.
                </Heading>
                <Box paddingY={6} className="LearnSubTitle">
                    <Text fontSize='27px' paddingX={16}>
                    Find no-charge resources to develop a deeper understanding 
                    </Text>
                    <Text fontSize='27px' paddingX={"200px"}>
                    of all Software Development concepts.
                    </Text>
                </Box>
                <SearchQuery/>
           </Box>
           <TutorialLanding/>
        </Container>
    )
}
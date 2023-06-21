import {
    Box,
    Text,
    Container,
  } from '@chakra-ui/react';
import { ProgramCard } from './ProgramCard/ProgramCard';
  import "./ProgramOffer.css"

  export const ProgramOffer = () => {
    return (   
      <Container maxW='10xl'  paddingX={120} py={1}>
         <Text fontSize={25} fontWeight={'800'}>Programs Offered By Masai</Text>
        <Text fontSize={17}>Start your coding career and become an industry-ready Pro-Developer in India’s ever-growing technology job market.</Text>
        <Box paddingLeft={"150px"}><ProgramCard/></Box>
      </Container>
    );
  }
import { Box, Flex, Grid, Text } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Footer } from '../Footer/Footer';
import { Navbar } from '../Navbar/Navbar';
import { NotFound } from '../NotFound/NotFound';
import { SearchQuery } from './SearchQuery';

export const Page2 = () => {
  const [searchResults, setSearchResults] = useState([]);
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get('searchQuery');
  const [data, setData] = useState([]);

  useEffect(()=>{
    axios.get("http://13.232.130.207/learn/search?topic")
      .then((res)=> setData(res.data))
      .catch((err)=> console.log(err))
  },[])


  const retrievedData = JSON.parse(localStorage.getItem("searchId"));

 const removeItem = () =>{
    localStorage.setItem("searchId",0)
 }

  return (
    <>
    <Navbar/>
    <Box marginLeft={"350px"} marginTop={20} paddingTop={"70px"}>
        <SearchQuery />
    </Box>
    <Box marginTop={20} marginLeft={20}><Text fontSize={20} fontWeight={'bold'} onClick={removeItem}>Showing results for</Text></Box>
    <Grid templateColumns='repeat(3, 1fr)' gap={5} marginY={10} marginX={20} w={600}>
        
      {retrievedData === 0 ? (
        <NotFound/>
      ) : (
          retrievedData.map((item) => (
          <Box key={item.id}  border={"1px solid grey"} w={400} h={300} borderRadius={20} _hover={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
            <NavLink to={`${item.pageUrl}`}>
            <Flex>
               <Box bgColor={"rgb(16,53,124)"} w={400} h={190} borderTopRadius={20} paddingLeft={"50px"} paddingTop={"55px"}>
                    <Text paddingLeft={"75px"} fontSize={20} color={"grey"} fontWeight={'bold'}>{item.module}</Text>
                    <Text paddingLeft={"10px"} fontSize={25} color={'white'} fontWeight={'bold'}>{item.tutorial}</Text>
                </Box>               
            </Flex>
            <Flex flexDirection={'column'} margin={'auto'} w={"95%"} paddingY={5}>
                {/* <span bgColor='#F2FDFF' color='#1A9FBD' borderRadius={10} paddingX={2} w={150}>{item.tutorialOf}</span> */}
                <span style={{ width:"200px",backgroundColor:'#F2FDFF', color:'#1A9FBD', borderRadius:"10px", paddingLeft:"10px"}}>{item.tutorial}</span>
                <Text fontSize={22} fontWeight={'bold'}>{item.topic}</Text>
            </Flex>
            </NavLink>
          </Box>
        ))
        ) 
    }
    </Grid>
    <Box>
    <Footer/>
    </Box>
    </>
  );
}


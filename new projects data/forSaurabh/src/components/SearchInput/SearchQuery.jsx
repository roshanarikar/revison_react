import { CloseIcon, SearchIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, HStack, Input, InputGroup, InputLeftElement, InputRightElement, Text } from "@chakra-ui/react"
import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom"



export const SearchQuery = () =>{
    const [searchQuery, setSearchQuery] = useState('');
  const [data, setData] = useState([]);
  const navigate = useNavigate()

  useEffect(()=>{
    axios.get("http://localhost:8080/SearchData")
      .then((res)=> setData(res.data))
      .catch((err)=> console.log(err))
  },[])
  console.log("data",data)

  const filteredData = data.filter(item => item?.heading.includes(searchQuery));

  const handleSearch = () => {
    navigate(`/search?query=${filteredData[0].heading}`);
    console.log("handleSearch",filteredData[0])
    localStorage.setItem("searchId",JSON.stringify(filteredData))
  };

const handleNotFound = () =>{
  navigate(`/search?query=${filteredData[0].heading}`)
}
 

  const handleClearClick = () => {
    setSearchQuery("");
  };

    return(
        <>
          <Flex flexDirection={"column"} w={500}>
             <Box>
             <InputGroup w={650} margin={"auto"} marginLeft={"100px"}>
      <InputLeftElement onClick={handleNotFound} color={"grey"} marginTop={9} marginX={4} children={<SearchIcon w={7} h={7}/>} />
      <Input
        type="text"
        
        w={"1050px"} h={"70px"}  borderRadius={50} border={"1px solid grey"} paddingLeft={"70px"} backgroundColor={"white"} marginY={5} placeholder="What are you looking for?" _placeholder={{fontSize:20, color:"grey",fontWeight:"500"}} 

        value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
      />
      {searchQuery.length > 0 && (
        <InputRightElement marginTop={9} marginRight={5}
          children={<CloseIcon cursor="pointer" color="gray.500" onClick={handleClearClick} />}
        />
      )}
    </InputGroup>
                {/* Search Display Here */}

                { searchQuery.length>0 ? <Box h={240} marginTop={-4} w={"650px"} backgroundColor={"white"} overflowY={"scroll"}  marginLeft={"100px"} borderRadius={15} boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}>
                    {filteredData.map((item) => {
                        return(
                            <HStack key={item.id} borderBottomWidth={0.5} borderColor={"grey"} h={12} paddingX={5}>
                                <Box onClick={handleSearch}><NavLink>{item.heading}</NavLink></Box   >
                            </HStack>
                        
                    )})}
      </Box> : <Box></Box>}
      </Box>
                <Flex justifyContent={"space-around"} w={500} margin={"auto"} marginLeft={"170px"}>
                    <Text color={"grey"}>Most Searched</Text>
                    <Box>
                    <Button color={"grey"} size={"sm"} variant='outline' border={"1px solid grey"} borderRadius={60}>Data Types in JavaScript</Button>
                    </Box>
                    <Box>
                    <Button color={"grey"} size={"sm"} variant='outline' border={"1px solid grey"} borderRadius={60}>For Loop in JavaScript</Button>
                    </Box>
                </Flex>
          </Flex>
        </>
    )
} 
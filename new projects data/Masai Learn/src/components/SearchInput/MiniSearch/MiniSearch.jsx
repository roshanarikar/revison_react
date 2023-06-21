import { CloseIcon, SearchIcon } from "@chakra-ui/icons";
import { Box, Flex, HStack, Input, InputGroup, InputLeftElement, InputRightElement} from "@chakra-ui/react"
import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom"


export const MiniSearch = () =>{
    const [searchQuery, setSearchQuery] = useState('');
  const [data, setData] = useState([]);
  const navigate = useNavigate()

  useEffect(()=>{
    axios.get("http://13.232.130.207/learn/search?topic")
      .then((res)=> setData(res.data))
      .catch((err)=> console.log(err))
  },[])

  const filteredData = data.filter(item => item?.topic.includes(searchQuery));

  const handleSearch = () => {
    navigate(`/search?query=${filteredData[0].topic}`);
    console.log("handleSearch",filteredData[0])
    localStorage.setItem("searchId",JSON.stringify(filteredData))
  };

const handleNotFound = () =>{
  navigate(`/search?query=${filteredData[0].topic}`)
}
 

  const handleClearClick = () => {
    setSearchQuery("");
  };

    return(
        <>
          <Flex flexDirection={"column"} w={300} marginLeft={650}>
             <Box>
             <InputGroup w={400} margin={"auto"} marginLeft={"-110px"} className="searchGroup">
      <InputLeftElement  onClick={handleNotFound} color={"grey"} marginTop={6} marginX={2} children={<SearchIcon className="leftSearch" w={5} h={5}/>} />
      <Input className="searchInput" type="text" w={"450px"} h={"50px"}  borderRadius={10} border={"1px solid grey"} paddingLeft={"50px"} backgroundColor={"white"} marginY={5} placeholder="Search Tutorials" _placeholder={{fontSize:18, color:"grey"}} value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
      />
      {searchQuery.length > 0 && (
        <InputRightElement marginTop={7} marginRight={5}
          children={<CloseIcon className="rightSearch" cursor="pointer" color="gray.500" onClick={handleClearClick} />}
        />
      )}
    </InputGroup>
                {/* Search Display Here */}

                { searchQuery.length>0 ? <Box h={235} marginTop={-4} w={"370px"} marginLeft={"-80px"} display={"absolute"} overflowY={"scroll"} backgroundColor={"white"} position={"relative"}  borderRadius={15} boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}>
                    {filteredData.map((item) => {
                        return(
                            <HStack key={item.id} borderBottomWidth={0.5} borderColor={"grey"} h={12} paddingX={5}>
                                <Box onClick={handleSearch}><NavLink>{item.topic}</NavLink></Box   >
                            </HStack>
                        
                    )})}
                  </Box> : <Box></Box>}
                 </Box>
          </Flex>
        </>
    )
} 
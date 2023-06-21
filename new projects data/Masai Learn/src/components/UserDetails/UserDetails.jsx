import {
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  HStack,
  Text,
} from '@chakra-ui/react';
import { NavLink, useNavigate } from 'react-router-dom';
import tutorial from "./img/tutorial.png"
import save from "./img/save.png"
import certificate from "./img/certificate.png"
import signout from "./img/signout.png"



export const UserDetail = () => {
  const navigate = useNavigate()


   const localUser = JSON.parse(localStorage.getItem("formData"))
    const handleDelete = () =>{
        localStorage.removeItem("formData")
        navigate("/")
    } 
  return (
    <>
       {  localUser === null ?  <HStack spacing={10} pt={2} bg={"white"} className="LoginBtn">
            <Button size="lg" bg={"white"} color={"rgb(224,27,51)"} borderRadius={8} variant="outline" border={"1px solid rgb(224,27,51)"}>
            <NavLink to="/signin">LOGIN</NavLink>
            </Button>
          </HStack> :  <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}> 
                <Flex>
                <Avatar
                  size={'sm'}
                  src={""}
                />
                <Text  _hover={{textDecoration:'none'}} marginX={5} color={'black'} fontSize={20}>{localUser.name}</Text>
                <Text _hover={{textDecoration:'none'}}>⮟</Text>
                </Flex>
              </MenuButton>
              <MenuList borderRadius={20}>
                <MenuItem borderBottomWidth={0.1} borderColor={'grey'}><Flex><img width="22px" height="20px" src={tutorial} alt="" /><Text marginX={5} fontSize={18}>My Tutorials</Text></Flex></MenuItem>
                <MenuItem borderBottomWidth={0.1} borderColor={'grey'}><Flex><img width="22px" height="20px" src={save} alt="" /><Text marginX={5} fontSize={18}>My Bookmarks</Text></Flex></MenuItem>
                <MenuItem  borderBottomWidth={0.1} borderColor={'grey'}><Flex><img width="22px" height="20px" src={certificate} alt="" /><Text marginX={5} fontSize={18}>My Certificates</Text></Flex></MenuItem>
                <MenuItem onClick={handleDelete}><Flex><img width="22px" height="20px" src={signout} alt="" /><Text marginX={5} fontSize={18}>Log out</Text></Flex></MenuItem>
              </MenuList>
            </Menu>
          </Flex>
     

       }
        
          
    </>
  );
}
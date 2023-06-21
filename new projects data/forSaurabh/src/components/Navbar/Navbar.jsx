import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";
import "./Navbar.css"
import { UserDetail } from "../UserDetails/UserDetails";

const NavLinks = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("none"),
    }}
  >
    {children}
  </Link>
);

export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box px={1}  backgroundColor={"white"} position={"fixed"} w={500} >
        <Flex className="navbar" h={100} paddingBottom={5} paddingTop={5} backgroundColor={"white"} alignItems={"center"} marginTop={-20} w={"1550px"} justifyContent={"space-around"}>
          <IconButton
            fontSize={"50px"}
            marginLeft={"-170px"}
            marginTop={"-40px"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box w={70} h={70} paddingTop={5} className="NavbarLogo">
              <NavLink to="/">
              <img className="NavLogoImg"
                src="https://masaischool.com/learn/_next/static/media/logo.b0182bde.svg"
                alt=""
              />
              </NavLink>
            </Box>
          </HStack>
          <HStack
              as={"nav"}
              spacing={6}
              display={{ base: "none", md: "flex" }}
              fontWeight={"600"}
              color={"black"}
              marginLeft={"200px"}
            >
              <a href="/tutorials">ALL TUTORIALS</a>
              <a href="https://masaischool.com/courses/?utm_source=10th_Oct_masai_learn_header&utm_medium=masai_learn&utm_campaign=10th_Oct_masai_learn_header">COURSES</a>
              <a href="https://masaischool.com/events/?utm_source=10th_Oct_masai_learn_header&utm_medium=masai_learn&utm_campaign=10th_Oct_masai_learn_header  ">EVENTS & CONTESTS</a>
            </HStack>
          {/* <HStack spacing={10} pt={2} bg={"white"} className="LoginBtn">
            <Button size="lg" bg={"white"} color={"rgb(224,27,51)"} borderRadius={8} variant="outline" border={"1px solid rgb(224,27,51)"}>
            <NavLink to="/signin">LOGIN</NavLink>
            </Button>
          </HStack> */}
          <UserDetail/>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}  >
            <Stack as={"nav"} spacing={4} backgroundColor={"white"} fontSize={30} width={"1350px"} paddingLeft={"10px"} >
            <NavLinks to="/tutorials">ALL TUTORIALS</NavLinks>
              <NavLinks to="https://masaischool.com/courses/?utm_source=10th_Oct_masai_learn_header&utm_medium=masai_learn&utm_campaign=10th_Oct_masai_learn_header">COURSES</NavLinks>
              <NavLinks to="https://masaischool.com/events/?utm_source=10th_Oct_masai_learn_header&utm_medium=masai_learn&utm_campaign=10th_Oct_masai_learn_header  ">EVENTS & CONTESTS</NavLinks>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}

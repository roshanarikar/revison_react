import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Links = ['Dashboard', 'Projects', 'Team'];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={"white"} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box w={70} h={70} paddingTop={5}><img src="https://masaischool.com/learn/_next/static/media/logo.b0182bde.svg" alt="" /></Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              
                <NavLink>ALL TUTORIALS</NavLink>
                <NavLink>COURSES</NavLink>
                <NavLink>EVENTS & CONTESTS</NavLink>
              
            </HStack>
          </HStack>

          <Stack spacing={10} pt={4} marginLeft={20}>
                <Button  w={100} h={35} colorScheme="red" variant='outline'>
                  LOGIN
                </Button>
              </Stack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
            <NavLink>ALL TUTORIALS</NavLink>
                <NavLink>COURSES</NavLink>
                <NavLink>EVENTS & CONTESTS</NavLink>
              
            </Stack>
          </Box>
        ) : null}
      </Box>

    </>
  );
}
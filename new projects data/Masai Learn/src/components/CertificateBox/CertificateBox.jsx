import { useState } from "react";
import {
  Box,
  Image,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { EmailIcon } from "@chakra-ui/icons";

export const GetCertificateBox = () =>{
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Box
        p={"8px"}
        margin="auto"
        mt={"16px"}
        display="grid"
        bg={"#ffffff"}
        gridTemplateColumns="1fr 3fr"
        alignItems={"center"}
        borderRadius="16px"
        border={"1px solid #cfe9ee"}
        cursor="pointer"
        onClick={handleOpen}
      >
        <Box position="relative" height={"47px"} w="60px" overflow={"hidden"}>
          <Image
            mb={"-5px"}
            position="absolute"
            w={"60px"}
            maxW="100%"
            height={"auto"}
            display="block"
            borderStyle={"none"}
            alt="certificate-image"
            src="https://www.masaischool.com/learn/images/certificate/certificate.png"
          />
        </Box>
        <Text
          fontWeight={"600"}
          fontSize="16.8px"
          lineHeight={"24px"}
          textAlign="center"
        >
          Get access to certificate on 100% completion of Modules
        </Text>
      </Box>

      <Modal  isOpen={isOpen} onClose={handleClose} isCentered>
        <ModalOverlay />
        <ModalContent borderRadius={"20px"}>
          <ModalCloseButton />
          <ModalHeader>
            <Box textAlign={"center"} fontWeight="bold" fontSize={"22px"}>
              <Image
                src="https://www.masaischool.com/learn/images/masai-learn/masai-learn-logo.svg"
                w="58px"
                h="50px"
                m={"auto"}
                my="10px"
              />
              Sign in to Download and share certificate with others
            </Box>
          </ModalHeader>
          <ModalBody>
            <Button
              colorScheme="white"
              color="blackAlpha.800"
              size="sm"
              w="100%"
              py={"25px"}
              mt="10px"
              gap={4}
              border={"1px solid"}
              borderColor="blackAlpha.200"
              _hover={{bg:"gray.100"}}
            >
              <EmailIcon color={"blue.500"} h="30px" w={"21px"} />
              SIGN IN WITH EMAIL
            </Button>
          </ModalBody>
          <Box display={"flex"} margin="auto" gap={1} my="20px">
            <Text fontSize="17px">Dont't have account?</Text>
            <Text color={"blue.500"}>
              <Link>Sign up</Link>
            </Text>
          </Box>
        </ModalContent>
      </Modal>
    </>
  );
}

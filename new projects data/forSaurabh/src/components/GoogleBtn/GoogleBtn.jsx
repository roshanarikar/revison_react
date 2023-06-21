// import  googleLogo from "./images/google.png"
// import "./GoogleBtn.css"
// import { Button } from "@chakra-ui/react";


// export const GoogleBtn = () => {
//   return (
//     <div>
//       <Button variant='outline' sx={{ border: '1px solid grey' }} className="googleBtn">
//         <div><img className="googlelogo" src={googleLogo} alt="" /></div>
//         <div className="googleBtnText"><p>CONTINUE WITH GOOGLE</p></div>
//       </Button>
//     </div>
//   );
// };


import { FcGoogle } from 'react-icons/fc';
import { Button, Center, Text } from '@chakra-ui/react';

export const GoogleBtn = ()  => {
  return (
    <Center>
      <Button
        w={'full'}
        maxW={'lg'}
        border={"0.5px solid grey"}
        variant={'outline'}
        leftIcon={<FcGoogle />}>
        <Center>
          <Text>Sign in with Google</Text>
        </Center>
      </Button>
    </Center>
  );
}
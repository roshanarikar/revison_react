import  googleLogo from "./images/google.png"
import "./GoogleBtn.css"
import { Button } from "@chakra-ui/react";


export const GoogleBtn = () => {
  return (
    <div>
      <Button variant='outline' sx={{ border: '1px solid grey' }} className="googleBtn">
        <div><img className="googlelogo" src={googleLogo} alt="" /></div>
        <div className="googleBtnText"><p>CONTINUE WITH GOOGLE</p></div>
      </Button>
    </div>
  );
};

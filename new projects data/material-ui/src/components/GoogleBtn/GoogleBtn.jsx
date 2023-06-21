import  googleLogo from "./images/google.png"
import "./GoogleBtn.css"
import { Button } from "@mui/joy";

export const GoogleBtn = () => {
  return (
    <div>
      <Button variant="outlined" sx={{ border: '1px solid grey' }} className="googleBtn">
        <div><img className="googlelogo" src={googleLogo} alt="" /></div>
        <div className="googleBtnText"><p>CONTINUE WITH GOOGLE</p></div>
      </Button>
    </div>
  );
};

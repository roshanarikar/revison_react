import * as React from "react";
import { CssVarsProvider } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import Link from "@mui/joy/Link";
import { GoogleBtn } from "../GoogleBtn/GoogleBtn";
import "./SignupPage.css";
import { NavLink } from "react-router-dom";

export default function SignupPage3() {
  return (
    <CssVarsProvider>
      <main>
        <Sheet
          sx={{
            width: 450,
            mx: "auto", // margin left & right
            my: 9, // margin top & botom
            py: 3, // padding top & bottom
            px: 4, // padding left & right
            display: "flex",
            flexDirection: "column",
            gap: 2,
            borderRadius: "sm",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
          }}
        >
          <div>
            <Typography level="h4" component="h1" marginLeft="170px">
              <b>Sign Up</b>
            </Typography>
          </div>
          <FormControl>
            <FormLabel>Enter OTP sent to firstname@gmail.com or  <Link sx={{px:0.5}} level="body2"> change email address</Link></FormLabel>
            <Input
              // html input attribute
              name="otp"
              type="otp"
              placeholder="Enter 6 digits OTP"
            />
          </FormControl>
          <Button classes="SignupBtn">
            <NavLink className="NavLinkBtn" to={"/"}>SIGN UP</NavLink> 
          </Button>
          <Link>Sign up with Password</Link>
          <div className="divider">
            <div className="divider-line"></div>
            <div className="divider-text">OR</div>
            <div className="divider-line"></div>
          </div>
          <GoogleBtn />
          <Typography
            endDecorator={<Link to="/signup/">Sign in</Link>}
            fontSize="sm"
            sx={{ alignSelf: "center" }}
          >
            {/* Don&apos;t have an account? */}
            Already have an account ?
          </Typography>
        </Sheet>
      </main>
    </CssVarsProvider>
  );
}

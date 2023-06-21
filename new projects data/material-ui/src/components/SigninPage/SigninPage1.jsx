import * as React from "react";
import { CssVarsProvider } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import { NavLink } from "react-router-dom";
import { GoogleBtn } from "../GoogleBtn/GoogleBtn";
import "./SigninPage.css";

export default function SigninPage1() {
  
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
              <b>Sign In</b>
            </Typography>
          </div>
          <FormControl>
            <FormLabel>Phone numbr or email addres</FormLabel>
            <Input
              // html input attribute
              name="email"
              type="text"
              placeholder="Enter phone numbr or email addres"
            />
          </FormControl>
          <Button>
            <NavLink className="NavLinkBtn" to={"/signin/email/password"}>
              CONTINUE
            </NavLink>
          </Button>
          <div className="divider">
            <div className="divider-line"></div>
            <div className="divider-text">OR</div>
            <div className="divider-line"></div>
          </div>
          <GoogleBtn />
          
          <Typography
            endDecorator={
              <NavLink className="navLink" to="/">
                Sign Up
              </NavLink>
            }
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

import * as React from "react";
import { CssVarsProvider } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import { GoogleBtn } from "../GoogleBtn/GoogleBtn";
import "./SignupPage.css";
import { NavLink } from "react-router-dom";
import { Link } from "@mui/joy";
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import ButtonUnstyled from '@mui/base/ButtonUnstyled';
import InputUnstyled, { inputUnstyledClasses } from '@mui/base/InputUnstyled';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { styled } from '@mui/system';

const blue = {
  100: '#DAECFF',
  200: '#80BFFF',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
};

const grey = {
  50: '#F3F6F9',
  100: '#E7EBF0',
  200: '#E0E3E7',
  300: '#CDD2D7',
  400: '#B2BAC2',
  500: '#A0AAB4',
  600: '#6F7E8C',
  700: '#3E5060',
  800: '#2D3843',
  900: '#1A2027',
};

const StyledInputRoot = styled('div')(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-weight: 400;
  border-radius: 12px;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[500]};
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
  display: flex;
  align-items: center;
  justify-content: center;


  &.${inputUnstyledClasses.focused} {
    border-color: ${blue[400]};
    outline: 3px solid ${theme.palette.mode === 'dark' ? blue[500] : blue[200]};
  }

  &:hover {
    border-color: ${blue[400]};
  }
`,
);

const StyledInputElement = styled('input')(
  ({ theme }) => `
  font-size: 0.875rem;
  font-family: inherit;
  font-weight: 400;
  line-height: 1.5;
  flex-grow: 1;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  background: inherit;
  border: none;
  border-radius: inherit;
  padding: 12px 12px;
  outline: 0;
`,
);

const IconButton = styled(ButtonUnstyled)(
  ({ theme }) => `
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: inherit;
  cursor: pointer;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[700]};
  `,
);

const InputAdornment = styled('div')`
  margin: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const CustomInput = React.forwardRef(function CustomInput(props, ref) {
  const { slots, ...other } = props;
  return (
    <InputUnstyled
      slots={{
        root: StyledInputRoot,
        input: StyledInputElement,
        ...slots,
      }}
      {...other}
      ref={ref}
    />
  );
});

CustomInput.propTypes = {
  /**
   * The components used for each slot inside the InputBase.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: PropTypes.shape({
    input: PropTypes.elementType,
    root: PropTypes.elementType,
    textarea: PropTypes.elementType,
  }),
};

export default function SignupPage2() {
  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  
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
            <Typography level="h4" component="h1" marginLeft="180px">
              <b>Sign Up</b>
            </Typography>
          </div>
          <FormControl>
            <FormLabel>Enter Password for firstname@mail.com or  <Link sx={{px:0.5}} className="navLink" level="body2"> change email address</Link></FormLabel>
            <Box sx={{ display: 'flex', '& > * + *': { ml: 3 } }}>
           <CustomInput sx={{width:450}}
        id="outlined-adornment-password"
        type={values.showPassword ? 'text' : 'password'}
        value={values.password} placeholder="To keep you profile safe"
        onChange={handleChange('password')}
        endAdornment={
          <InputAdornment>
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {values.showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
    </Box>
          </FormControl>
          <Typography level="body3" sx={{px:1}}>
            Minimum 8 characters
          </Typography>
          <Button><NavLink className="NavLinkBtn" to={"/signup/password"}>SIGN UP</NavLink></Button>
          <NavLink className="navLink">Sign up with OTP</NavLink>
          <div className="divider">
            <div className="divider-line"></div>
            <div className="divider-text">OR</div>
            <div className="divider-line"></div>
          </div>
          <GoogleBtn />
          <Typography
            endDecorator={<NavLink className="navLink" to="/sign-up">Sign in</NavLink>}
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

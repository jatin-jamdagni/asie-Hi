import React, { useState } from "react";
import { TextField, Button, InputAdornment } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useTheme } from "@mui/material";
import Logo from "./Logo";

function Login() {
  const theme = useTheme();
  const [password, setPassword] = useState(false);
  const [email, setEmail] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle login logic here
  };
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "5px",
  };

  const buttonStyle = {
    width: "auto",
    marginInline: "auto",
    textAlignment: "center",
  };

  const divStyle = {
    overflow: "hidden",
    width: "fit-content",
    margin: "20vh auto 0 auto",
    padding: "20px",
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
  };

  return (
    <div style={divStyle}>
      <form onSubmit={handleSubmit} style={formStyle}>
        <Logo color={theme.palette.primary.main} />
        <h2 style={{ color: "blue" }}>Login Here</h2>

        <TextField
          id="outlined-multiline-flexible"
          sx={{ m: 1, width: "40ch" }}
          label="E-mail"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          sx={{ m: 1, width: "40ch" }}
          type={showPassword ? "text" : "password"}
          autoComplete="current-password"
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <Button
          style={buttonStyle}
          type="submit"
          variant="contained"
          color="primary"
        >
          Login
        </Button>
      </form>
    </div>
  );
}

export default Login;

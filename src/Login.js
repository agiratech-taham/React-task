import React from "react";
import "./Login.css";
// import FormControl from '@mui/material/FormControl';
import Person2Icon from "@mui/icons-material/Person2";
import LockIcon from "@mui/icons-material/Lock";
// import Box from '@mui/material/Box';
import Input from "@mui/material/Input/";
// import InputUnstyled from '@mui/base/InputUnstyled';
import { Box, FormGroup } from "@mui/material";
import { useNavigate } from "react-router-dom";
// import { Link } from 'react-router-dom'
function Login() {
  const navigate = useNavigate();
  return (
    <div className="backimage">
      <div className="logo">
        <div className="divider">
          <div className="dummy"></div>
          <div className="login-container">
            <div className="input-container">
              <div className="login-handler"></div>
              <div className="heading">
                <h2>
                  {" "}
                  Welcome to <span>SAHINS</span>
                </h2>
              </div>
              <Box style={{ display: "block" }}>
                {/* <FormControl variant="standard"> */}
                <FormGroup>
                  <div className="input">
                    <Input
                      type="text"
                      id="input-with-icon-adornment"
                      startAdornment={<Person2Icon />}
                      placeholder="UserName"
                    />
                  </div>
                  <div className="input">
                    <Input
                      type="password"
                      id="input-with-icon-adornment"
                      startAdornment={<LockIcon />}
                      placeholder="Password"
                    />
                  </div>
                </FormGroup>
                {/* </FormControl> */}
              </Box>
              <p className="fgtps">forgetpassword?</p>
              <button onClick={() => navigate("/")}>Login</button>
            </div>
          </div>
          <div className="dummy2"></div>
        </div>
      </div>
    </div>
  );
}
export default Login;

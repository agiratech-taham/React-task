import React from "react";
import { useState } from "react";
import axios from "axios";
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
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // console.log({ username, password });
  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleApi = () => {
    console.log({ username, password });
    axios
      .post("https://reqres.in/api/login", {
        username: username,
        password: password,
      })
      .then((result) => {
        console.log(result.data);
        // alert("success");
        localStorage.setItem("token", result.data.token);
        navigate("/dashboard");
      })
      .catch((error) => {
        alert("service error");
        console.log(error);
      });
  };

  const navigate = useNavigate();
  return (
    <div className="backgroundImg">
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
                  <div>
                    <Input
                      className="input"
                      type="text"
                      id="input-with-icon-adornment"
                      startAdornment={
                        <Person2Icon style={{ color: "#043752" }} />
                      }
                      placeholder="   UserName"
                      value={username}
                      onChange={handleUsername}
                    />
                  </div>
                  <div>
                    <Input
                      className="input"
                      type="password"
                      id="input-with-icon-adornment"
                      startAdornment={<LockIcon style={{ color: "#043752" }} />}
                      placeholder="   Password"
                      value={password}
                      onChange={handlePassword}
                    />
                  </div>
                </FormGroup>
                {/* </FormControl> */}
              </Box>
              <p className="fgtps">Forget Password?</p>
              {/* <button onClick={() => navigate("dashboard")}>Login</button> */}
              <button onClick={handleApi}>Login</button>
            </div>
          </div>
          <div className="dummy2"></div>
        </div>
      </div>
    </div>
  );
}
export default Login;

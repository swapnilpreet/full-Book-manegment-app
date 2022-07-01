import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { login } from "../Redux/AuthReducer/action";

const Login = () => {


  const [email, setEmail] = useState("eve.holt@reqres.in");
  const [password, setPassword] = useState("cityslicka");
  const dispatch = useDispatch();
  const navigate=useNavigate()
  const location = useLocation();
  const comingFrom=location.state?.from?.pathname || '/';

 

  const handlesubmit=(e)=>{
     e.preventDefault();
     if(email && password){
      dispatch(login({email,password})).then((r)=>{
        if(r.type ==="USER_LOGIN_SUCCESS"){
          navigate(comingFrom,{replace:true});
        }
      });
     }
  };

  return (
    <LoginWrapper>
      <form onSubmit={handlesubmit}>
        <div>
          <label>User Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>User password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">LOGIN</button>
      </form>
    </LoginWrapper>
  );
};

export default Login;

const LoginWrapper = styled.div`
  display: flex;
  width: 300px;
  flex-drection: column;
  align-items: center;
  margin: auto;
`;

import React, { useState } from "react";
import { Route, Link, Switch} from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Navcandidate from "./Navcandidate";
import Customers from "./Opportunities/Customers"
import Home from "./Home";
import styled from "styled-components";

const Space = styled.div`
height:50px;
`;
const Navbox = styled.nav`
position:fixed;
top:0%;
z-index:100;

*{
  color:white;
  a{
    text-decoration:none;
  }
}
  width: 100%;
  height: 50px;
  background-color: rgb(65, 70, 84);
  display:flex;
  justify-content:space-between;
  align-items:center;
  div{
    margin-left:50px;
    img{
      width:100px;
    }
  }
`;
const Navul = styled.ul`
display:inline-flex;
list-style:none;
margin-right:50px;
`;
const Navli = styled.li`
padding:19px 15px;
letter-spacing:2px;
font-weight:bold;
font-size:10px;
&:hover{
  background-color:rgba(255,255,255,.1);
  cursor:pointer;
}
span{
  border-radius:5px;
  padding:5px;
  background-color:rgb(2,191,160);
}
`;

const Navbar = () => {
  const [signup, setSignup] = useState("");
  const [login, setLogin] = useState("");
  
  const handleSignup = (x) => {
    setSignup(x);
  };
  const handleLogin = (x) => {
    setLogin(x);
  };

  let l = localStorage.getItem("login");
  let s = localStorage.getItem("signup");

  if (!l && !s) {
    return (
      <div>
        <Space>
        <Navbox>
          <div>
            <Link to="/"><img src="https://static.instahyre.com/images/logos/logo.png" alt="Instahyre" /></Link>
          </div>
          <Navul>
            
          <Navli>
           INVITE FRIENDS
          </Navli>
          <Link to="/customers"><Navli>
              CUSTOMERS
            </Navli></Link>
            
              <Link to="/login"><Navli>LOGIN</Navli></Link>
            
            
              <Link to="/signup"><Navli>SIGNUP</Navli></Link>
            
            <Navli>
              <span>EMPLOYERS</span>
            </Navli>
          </Navul>
        </Navbox>
        </Space>
        <Switch>
          <Route exact path="/" component={Home}></Route>
<Route exact path="/customers" component={Customers}></Route>
          <Route
            exact
            path="/login"
            render={() => (
              <Login
                prop={(x) => handleLogin(x)}
                title={`Props through render`}
              />
            )}
          ></Route>
          <Route
            exact
            path="/signup"
            render={() => (
              <Signup
                prop={(x) => handleSignup(x)}
                title={`Props through render`}
              />
            )}
          ></Route>
        </Switch>
      </div>
    );
  } else {
    if (l) {
      return <Navcandidate token={"login"} />;
    }
    if (s) {
      return (
        <Navcandidate token={[(x) => handleLogin(x), (x) => handleSignup(x)]} />
      );
    }
  }
};

export default Navbar;

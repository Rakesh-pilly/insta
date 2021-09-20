
import { Route, Link, Switch, withRouter} from "react-router-dom";
import Opportunities from "../Opportunities/Opportunities";
import Profile from "../Profile/Profile";
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

const Candidatenav = withRouter(({history}) => {
    let l = localStorage.getItem('login');
    let s = localStorage.getItem('signup')
    const handleSignout = (e) => {
        localStorage.setItem('login','');
        history.push('/login')
     window.location.reload()
    }
// if(history.location.pathname===('/signup' || '/login') && ( l || s)){
//     history.goForward();
// }
    return (
        <div>
          <Space>
          <Navbox>
           <div>
            <Link to="/"><img src="https://static.instahyre.com/images/logos/logo.png" alt="Instahyre" /></Link>
          </div>

               <Navul>
               <Navli>
              <span>GO PREMIUM</span>
            </Navli>
      <Navli>ACTIVITY</Navli>
      
        <Link to="/candidate/opportunities"><Navli>OPPORTUNITIES</Navli></Link>
        <Link to="/candidate/profile"><Navli>PROFILE</Navli></Link>
        <Navli>SETTINGS</Navli>
      <Navli onClick={e => handleSignout(e)}>SIGN OUT</Navli>
               </Navul>
           </Navbox>
    
          </Space>
    <Switch>
    
              <Route exact path='/' component={Opportunities} ></Route>
              
              <Route exact path='/candidate/opportunities' component={Opportunities} ></Route>
              <Route exact path='/candidate/profile' component={Profile}></Route>
            </Switch>
            
        </div>
    )
})

export default Candidatenav

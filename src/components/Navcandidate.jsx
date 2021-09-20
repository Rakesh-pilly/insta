import Candidatenav from "./Navcandidate/Candidatenav";
import LoginFrom from "./From/LoginFrom";
import { withRouter } from "react-router-dom";

const Navcandidate = withRouter(({token,history}) => {

    const handleForm = () => {
        let x = localStorage.getItem('signup');
        token[0](x);
        token[1](localStorage.getItem('login'));
        localStorage.setItem('login',x);
        localStorage.removeItem('signup');
        history.push('/candidate/opportunities');
        window.location.reload();

    }
   if(token==='login'){
       return <Candidatenav />
   }
   else{
       return <LoginFrom prop={handleForm}/>
   }
})

export default Navcandidate

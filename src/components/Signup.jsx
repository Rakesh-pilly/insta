import axios from "axios";
import styled from "styled-components";
import { FaGoogle, FaLinkedinIn } from "react-icons/fa";
import { CgChevronDoubleRight } from "react-icons/cg";
import { useState } from "react";



const Signupwrapper = styled.div`
  @media only screen and (max-width: 900px) {
    width: 80%;
    p > * {
      font-size: 12px;
    }
  }

  input:focus {
    outline: none;
    border: 1px solid rgb(5, 145, 204);
  }
  width: 60%;
  margin: auto;
  a {
    text-decoration: none;
    color: rgb(0, 146, 208);
  }
  * {
    font-weight: bold;
    font-size: 1.1vw;
    text-align: center;
    width: 100%;
    margin-bottom: 10px;
  }
`;
const Grid = styled.div`
  @media only screen and (min-width: 900px) {
    direction: rtl;
    & > * {
      direction: ltr;
    }
  }

  @media only screen and (max-width: 700px) {
    * {
      font-size: 12px;
    }
    grid-template-columns: 1fr;
  }

  display: grid;
  grid-template-columns: 45% 1fr;
  grid-gap: 100px;
  & > div {
    min-width: 300px;
  }
`;

const Comments = styled.div`
  @media only screen and (max-width: 900px) {
    border: none;
  }
  border-right: 1px solid rgba(0, 0, 0, 0.2);
  margin-top: 20px;
  color: rgb(74, 80, 86);
  * {
    margin: 0%;
  }
  & > div:nth-child(2n + 1) {
    filter: drop-shadow(2px 5px 5px rgba(0, 0, 0, 0.2));
    q {
      padding-inline: 1rem;
      line-height: 25px;
    }
  }
  div:nth-child(2n + 2) {
    width: 80%;
    display: flex;
    align-items: center;
    height: 120px;
    p {
      color: black;
      font-weight: 900;
      margin-bottom: 10px;
    }
    span {
      font-size: smaller;
    }
  }
  section {
    width: 90%;
    display: flex;
    height: 140px;
    align-items: center;
    background-color: rgb(244, 243, 236);
    border-radius: 5px;
    clip-path: polygon(
      0% 0%,
      100% 0%,
      100% 90%,
      52% 90%,
      45% 100%,
      43% 90%,
      0% 90%
    );
  }
`;

const Head = styled.div`
  color: rgb(74, 80, 86);
  h1 {
    font-size: x-large;
    font-weight: 900;
  }
  p {
    font-size: small;
  }
  margin-bottom: 50px;
`;
const Signinoption = styled.div`
  color: white;
  div {
    width: 80%;
    margin: 20px auto;
    border-radius: 5px;
    display: grid;
    grid-template-columns: 15% 85%;
    align-items: center;
    height: 40px;
  }
  div:nth-child(1) {
    background-color: rgb(0, 123, 182);
    border: 1px solid rgb(0, 98, 146);
  }
  div:nth-child(1):hover {
    background-color: rgb(0, 98, 146);
  }
  div:nth-child(2) {
    background-color: rgb(221, 75, 57);
    border: 1px solid rgb(177, 60, 46);
  }
  div:nth-child(2):hover {
    background-color: rgb(177, 60, 46);
  }
`;
const Or = styled.div`
  display: flex;
  div:nth-child(2) {
    width: fit-content;
    padding: 0px 20px;
  }
  hr {
    border: 0.5px solid rgba(0, 0, 0, 0.1);
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
const Signupform = styled.form`
  color: rgb(74, 80, 86);
  label {
    display: flex;
    justify-content: flex-start;
  }
  input {
    text-align: left;
    height: 35px;
    border: 1px solid rgb(204, 204, 204);
    border-radius: 3px;
  }
  div {
    text-align: left;
    display: flex;
    justify-content: flex-start;

    input {
      height: 15px;
      width: 15px;
      border-radius: 1px;
    }
    label {
      display: block;
      font-size: smaller;
      text-align: left;
    }
  }

  button {
    width: 60%;
    p {
      margin-bottom: 0%;
      width: 60%;
      display: inline-flex;
      justify-content: space-evenly;
    }
    background-color: rgb(2, 191, 160);
    border: none;
    border-bottom: 3px solid rgb(2, 154, 130);
    border-radius: 3px;
    color: white;
  }
  button:hover {
    background-color: rgb(2, 159, 130);
  }
`;
const Question = styled.div`
  @media only screen and (max-width: 900px) {
    grid-template-columns: 1fr;
  }
  display: grid;
  grid-template-columns: 48% 1fr;
  grid-gap: 100px;
  div {
    p {
      text-align: left;
    }
    p:nth-child(2) {
      font-size: small;
      font-weight: 100;
      color: rgb(74, 80, 86);
      letter-spacing: 1px;
      line-height: 20px;
    }
  }
`;

const Signup = ({ prop }) => {
  const [signup, setSignup] = useState({name:'',email:'',password:''});
  const [status, setStatus] = useState();
  const [userId, setId] = useState();
  const [validation,setValidation] = useState(false);
  const [tnc,setTnC] = useState(false);

  const handleInput = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(signup.name==="" || signup.email==="" ){
      setValidation('Username or Email cannot be Empty!');
      return;
    }
if( signup.password.length<4){
  setValidation("Password length cannot be less than 4!");
  return;
}
if(!tnc){
  setValidation('Please accept terms & conditions of service!');
  return;
}
    axios
      .post(" http://localhost:3001/users", signup)
      .then((res) => {
        setStatus(res.status);
        localStorage.setItem("signup", res.data.user.id);
        prop(res.data.user.id);
      })
      .catch((error) => setValidation(error.response.data));
  };

  return (
    <Signupwrapper>
      <Head>
        <h1>Top companies. Full privacy. No spam.</h1>
        <p>
          If you're looking to hire, <a href="/">click here</a>
        </p>
      </Head>
      <Grid>
        <div>
          <Signinoption>
            <div>
              <FaLinkedinIn
                style={{
                  fontSize: "30px",
                  marginBottom: "0px",
                  color: "white",
                  borderRight: "1px solid rgb(0,98,146)",
                }}
              />{" "}
              Sign in with LinkedIn
            </div>
            <div>
              <FaGoogle
                style={{
                  fontSize: "30px",
                  marginBottom: "0px",
                  padding: "5px 0px",
                  backgroundColor: "white",
                  color: "black",
                  borderTopLeftRadius: "3px",
                  borderBottomLeftRadius: "3px",
                }}
              />
              Sign in with Google
            </div>
          </Signinoption>
          <Or>
            <div>
              <hr />
            </div>
            <div>OR</div>
            <div>
              <hr />
            </div>
          </Or>
          <Signupform>
            <label htmlFor="name">Your Name</label>
            <input type="text" name="name" onChange={(e) => handleInput(e)} />
            <label htmlFor="email">Email</label>
            <input type="email" name="email" onChange={(e) => handleInput(e)} />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              onChange={(e) => handleInput(e)}
            />
            {validation && <div ><label style={{backgroundColor:"#ffab91",color:'#b82606',padding:"5px 1rem",borderRadius:"5px"}}>{validation}</label></div>}
            <div>
              <input type="checkbox" name="privacy" onChange={e=>setTnC(prev=>!prev)}/>
              <label htmlFor="privacy">
                I agree to the <a href="/">Terms of Service</a> and{" "}
                <a href="/">Privacy Policy</a>. I agree to receive the default
                email notifications, which I can unsubscribe from at any time.
              </label>
            </div>
            <button onClick={(e) => handleSubmit(e)}>
              <p>
                Get Started{" "}
                <CgChevronDoubleRight
                  style={{ width: "25px", fontSize: "15px" }}
                />
              </p>{" "}
            </button>
          </Signupform>
          <p style={{ color: "rgb(74,80,86)", fontSize: "smaller" }}>
            Already have an account? <a href="/">Log in here</a>
          </p>
        </div>
        <Comments>
          <div>
            <section>
              <q>
                Instahyre really stands out from a typical job site by showing
                relevant positions at top companies!
              </q>
            </section>
          </div>
          <div>
            <div>
              <p>Deepak Kumar</p>
              <span>Hired at Amazon</span>
            </div>
          </div>
          <div>
            <section>
              <q>
                It was a really cool experience with Instahyre. Very simple
                without the bugging from irrelevant jobs.
              </q>
            </section>
          </div>
          <div>
            <div>
              <p>Tushar Garg</p>
              <span>Hired at Paytm</span>
            </div>
          </div>
        </Comments>
      </Grid>
      <Question>
        <div>
          <p>
            <b>Who is Instahyre for?</b>
          </p>
          <p>
            Instahyre is for folks who are looking to get hired at the best tech
            companies in India, without being spammed for irrelevant jobs on
            traditional job boards.
          </p>
        </div>
        <div>
          <p>
            <b>What kind of jobs can I find on Instahyre?</b>
          </p>
          <p>
            You can currently use Instahyre to find jobs in Software
            Engineering, Data Science, Product Management, Design, Marketing,
            Sales, Operations and HR.
          </p>
        </div>
      </Question>
    </Signupwrapper>
  );
};

export default Signup;

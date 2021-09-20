import styled from "styled-components";
import { FaGoogle, FaLinkedinIn } from "react-icons/fa";


const Signinoption = styled.div`
  color: white;
  div {
    width: 50%;
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

export default function LoginLinkedGoogle(){


return (
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
    </div>
)

}
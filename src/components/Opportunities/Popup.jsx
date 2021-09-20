import styled from 'styled-components'
import { MdClose } from 'react-icons/md';
import { useState } from 'react';


const Background = styled.div`
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.8);
position: fixed;
display: grid;
justify-content: center;
z-index:10000;

`;

const ModalWrapper = styled.div`
width: 65vw;
height: 80vh;
box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
background: #fff;
color: #000;

position: relative;
z-index: 10;
border-radius: 10px;
overflow-y: auto;
margin-top: 20px;
`;

const Footer = styled.div`
  width: 100%;
 background-color: #ffff;
  height:60px;
  z-index: 10;
  margin-top:-12vh;
  display:grid;
  grid-template-columns:repeat(2,30%);
  justify-content:center;
  align-items:center;
  grid-gap:7%;
`

const CloseModalButton = styled(MdClose)`
cursor: pointer;
position: absolute;
top: 20px;
right: 20px;
width: 32px;
height: 32px;
padding: 0;
z-index: 10;
`;


const Button = styled.button`
background-color: #02BFA0;
  border: 0;
  border-bottom: 3px solid #029A82;
  border-radius: 4px;
  font-size: 14px;
  padding: 11px 16px;
  color:white;
  font-weight: 900;
  :hover{
      background-color: #19927A;
  border-color: #007358;
  cursor: pointer;
  }



`
const ButtonNot = styled.button`
  background-color: #F74A58;
  border: 0;
  border-bottom: 3px solid #D43441;
  border-radius: 4px;
  font-size: 14px;
  padding: 11px 16px;
  color:white;
  font-weight: 900;
  :hover{
      background-color: #DA3F4C;
  border-color: #B92E3A;
  cursor: pointer;
  }


`

export default function Popup({show,setShow, children}){

   const [applied,setApplied] = useState(false);

    return (
        <>

        {show?(
            <Background>
                

                <ModalWrapper show = {show}>
               
               

                  {children}
                    
                    

            <CloseModalButton  aria-label = 'close modal' onClick = {() => setShow(prev => !prev)} />
           
           
                </ModalWrapper>
                <Footer>
                <Button onClick={()=>setApplied(prev=>!prev)}>
                    {applied? "Applied" : "Apply"}
                    
                    </Button>
                    <ButtonNot>
                   Not interested
                    
                    </ButtonNot>
                  
                
                </Footer>

                


                


            </Background>
        ) : null }
        
        </>
    )

}
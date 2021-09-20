import styled from "styled-components"



export default function InfoBox(props){

    const Div = styled.div`
      display: grid;
    margin: 0 auto ;
    text-align:left;
    grid-gap:13%;
   

    img{
        display:block;
        margin-top: 25%;
    }
    

    @media only screen and (max-width: 600px) {
        
    } 

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
    div::nth-child(2){
        display:none;
    }

} 

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
    max-width: 700px;
grid-template-columns: 65% 132px; 

} 

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
    max-width: 700px;
grid-template-columns: 65% 132px; 

} 

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
    max-width: 700px;
grid-template-columns: 65% 132px; 
    

}
    
    `

        return (
            <Div>{props.children} </Div>
        )

}
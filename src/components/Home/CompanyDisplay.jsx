import styled from "styled-components"


export default function CompanyDisplay(){
    const H2 = styled.h2`
    text-align:center;
    margin-top: 10px;
    margin-bottom: 32px;
    font-size: 1.2rem;
    font-weight: 500;
    letter-spacing:1px;
    color: #40454A;
    font-weight: 700;

    `
    const Images = styled.div`

  height:284px;
  margin: auto;
   
    background-repeat : no-repeat;
    background-size: contain;
    background-position:center center;
    background-image: url("https://static.instahyre.com/images/employers/customers-sm.jpg");


/* Small devices (portrait tablets and large phones, 600px and up) */
/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
    width:100vw;
    background-image: url("https://static.instahyre.com/images/employers/customers-sm.jpg")

} 

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
    width:100vw;
    background-image: url("https://static.instahyre.com/images/employers/customers-sm.jpg")

} 

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
    width:100vw;
    background-image: url("https://static.instahyre.com/images/employers/customers-md.jpg")

} 

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
    max-width: 992px;
    
    background-image: url("https://static.instahyre.com/images/employers/customers-lg.jpg")
}
    
    
    
    `


    return (

        <div style = {{padding: '50px 0'}}>
            <H2>More than 10000 top companies</H2>
            <Images></Images>
        
            
        </div>
    )

}
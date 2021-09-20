import styled from "styled-components"
import InfoBox from "./InfoBox"

export default function Info(){
    
    const H5 = styled.h5`
    font-size: 16px;
    margin-bottom: 14px; 
    color: #40454A;
    font-weight: 700;
    `
    const P = styled.p`
    font-size: 15px;
    font-weight: 300;
    line-height: 2;
    margin-bottom: 10px;
    opacity: 0.8;
`

const Div = styled.div`

@media only screen and (max-width: 768px) {
    
        display:none;
    }
`

    return (
        <div style = {{padding:'46px 0'}}>
            <InfoBox>
            <div>
                <H5>5X higher response from companies</H5>
                <P>
                Tired of having your applications ignored by companies? Instahyre only matches you with the right jobs, leading to 5X response rates from companies compared to other job sites!
                </P>

            </div>
            <Div>
                <img src = "https://static.instahyre.com/images/icons/response.png" alt = "logo"/>
            </Div>
            </InfoBox>

            <InfoBox>
            <div>
                <H5>Your perfect job, delivered to you</H5>
                <P>
                Do you really want to look at thousands of irrelevant job postings or get spammed by job sites? At Instahyre, we do the work of finding the best jobs for you, so you can sit back and relax.
                </P>

            </div>
            <Div>
                <img src = "https://static.instahyre.com/images/icons/target.png" alt = "logo"/>
            </Div>
            </InfoBox>

            <InfoBox>
            <div>
                <H5>Privacy guaranteed</H5>
                <P>
                We value your privacy very highly. You can block specific companies from viewing your profile. Or you can block all companies and just apply to specific ones yourself.                </P>

            </div>
            <Div>
                <img src = "https://static.instahyre.com/images/icons/privacy.png" alt = "logo"/>
            </Div>
            </InfoBox>

            
            
            
        </div>
    )
}

import React, { useState } from 'react';
import IndexLogin from './IndexLogin';
import styled from 'styled-components'
import LoginLinkedGoogle from './LoginLinkedGoogle'
import { Redirect } from 'react-router-dom';


export default function Index(){

    const [redirect,setRedirect] = useState(false); 

    const Wrappper = styled.div`
    width:460px;
    height: 350px;
    border: 1px solid white;
    background-color: white;
    justify-content:center;
    box-shadow: 2px 2px 10px 1px #444;
    padding: 34px 60px 0;
    
    position: relative;

    h1{
        color: #40454A;

        font-weight: 600;
    margin-bottom: 20px;
    margin-top: 0;
    text-align: center;
    }

    a{
        color: #02BFA0;
        display: block;
    color: #02BFA0;
    font-size: 1rem;
    font-weight:800 !important;
    margin-top: 14px;
    padding-left: 22px;
    text-decoration:none;
    text-align: center;
    }
    a:hover{
        text-decoration: underline;

    }
   
    p{
        text-align: center;
        font-size: 1rem;
    font-weight: 300;
    line-height: 30px;
    margin-bottom: 0;
    }
    .box{

        width: 180px;
        height: 40px;
        background-color: #EC8A52;
    border-color: #E2783B;
   
    position:absolute;
    bottom:0;
    left: 33%;
   
    justify-content: center;

    align-items:center;
    padding-bottom:5px;
    padding-right: 20px;
   
  
    }
    .box a{
        text-align: center;
    color: white;
        font-size: 1rem;
        font-weight:400;
       
       
    }
    .box a:hover{
        text-decoration: underline;
    }
    
    `


   
    if(redirect){
        return <Redirect to="/signup"/>
    }


    return (
        <>
        <IndexLogin>

            <Wrappper>
                <h1>Your Dream job. Now.</h1>

                <LoginLinkedGoogle/>

                <a onClick={()=>setRedirect(prev=>!prev)}>Or sign up using email »</a>

                <p>Showcase yourself to a curated list of top companies

Complete privacy and no spam</p>

        <div class = 'box'>
            <a href = 'https://'>Recuiter singup »</a>

        </div>
                
                 
                    
            
            </Wrappper>
         

           
            </IndexLogin>

        </>
        
    )

}
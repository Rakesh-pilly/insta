import React from 'react'
import CompanyDisplay from './Home/CompanyDisplay'
import Index from './Home/Index'
import Info from './Home/Info'
import TestimonialCont from './Home/TestimonialBox/TestimonalCont'


const Home = () => {
    return (
        <div>
         <Index/>
         <CompanyDisplay/>
         <hr/>
         <Info/>

         <hr style = {{color: 'lightgray', height:"3px"}}/>

         <TestimonialCont/>



        </div>
    )
}

export default Home

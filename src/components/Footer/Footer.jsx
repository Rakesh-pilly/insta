import React from 'react'
import CustomersImg from "../Opportunities/modulesCss/Customers.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
const Footer = () => {
    return (
       
            


      <div className={CustomersImg.custfooterbody}>
       
       <div className={CustomersImg.custfooter}>
         
           <div className={CustomersImg.custfooterdisplay}> 
             <ul> 
               <li><p className={CustomersImg.footerP}>Jobs by Location</p></li>
               <li>Jobs in Bangalore</li>
               <li>Jobs in Delhi / NCR</li>
               <li>Jobs in Mumbai</li>
             </ul>
           </div>
           <div className={CustomersImg.custfooterdisplay}> 
             <ul> 
               <li><p className={CustomersImg.footerP}>Jobs by Function</p></li>
               <li>Software Engineering Jobs</li>
               <li>Technical Management Jobs</li>
               <li>Marketing Jobs</li>
             </ul>
           </div>
           <div className={CustomersImg.custfooterdisplay}> 
             <ul> 
               <li><p className={CustomersImg.footerP}>For Employers</p></li>
               <li>Post Your Jobs</li>
               <li>Success Stories</li>
               <li>Post Your Jobs</li>
             </ul>
           </div>
           <div className={CustomersImg.custfooterdisplay}> 
             <ul> 
               <li><p className={CustomersImg.footerP}>Instahyre</p></li>
               <li>About</li>
               <li>Privacy</li>
               <li>Terms</li>
             </ul>
           </div>
           <div className={CustomersImg.custfooterdisplay}> 
             <ul> 
               <li><p className={CustomersImg.footerP}>Connect</p></li>
               <li>Help Center</li>
               <li>Blog</li>
               <li>Terms</li>
               <li className="footer-social-links">
                 <FontAwesomeIcon icon={faCoffee} />
                 <FontAwesomeIcon />
                 
             </li>
             </ul>
           </div>
       </div>
       </div>   
      
    )
}

export default Footer
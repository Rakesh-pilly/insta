/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import ReactPlayer from "react-player"
import React from 'react';
import CustomersImg from '../Opportunities/modulesCss/Customers.module.css';
import custlogos from "../Opportunities/Cusimages/customers_logos1.png"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
// import Footer from "./footer/Footer"


const Customers = () => {
  let images = [
    {
      id: "1",
      url:
        'https://static.instahyre.com/images/case-studies/kuliza/box.jpg',
      title: 'image title 1'
    },
    {
      id: "2",
      url:
        'https://static.instahyre.com/images/case-studies/lbb/box.png',
      title: 'image title 2'
    },

    {
      id: "3",
      url:
        'https://static.instahyre.com/images/case-studies/simility/box.png',
      title: 'image title 2'
    },
    {
      id: "4",
      url:
        'https://static.instahyre.com/images/case-studies/cityflo/box.png',
      title: 'image title 1'
    },
    {
      id: "5",
      url:
        'https://static.instahyre.com/images/case-studies/pagalguy/box.png',
      title: 'image title 2'
    },

    {
      id: "6",
      url:
        'https://static.instahyre.com/images/case-studies/grappus/box.png',
      title: 'image title 2'
    },
    {
      id: "7",
      url:
        'https://static.instahyre.com/images/case-studies/truce/box.jpg',
      title: 'image title 1'
    },
    {
      id: "9",
      url:
        'https://static.instahyre.com/images/case-studies/wooplr/box.png',
      title: 'image title 2'
    },

    {
      id: "10",
      url:
        'https://static.instahyre.com/images/case-studies/upgrad/box.png',
      title: 'image title 2'
    }
  ];


  return (
    <>
        {/* navbars  */}
      <div className={CustomersImg.custBody}>

        
        <div>
         
        </div>

        {/* end navbars */}

        {/* react videos */}
        <div className={CustomersImg.custvideo}>
          <ReactPlayer width="189vh" height="40vh" margin="55vh" padding="12vh"
            controls
            url="https://www.youtube.com/watch?v=S6mVwmCHShk" />
      
        </div>

        {/* videos */}
     

        {/*end  react Videos */}

        <div className={CustomersImg.CustomerslogoBack}>
          <img className={CustomersImg.cusHeader} src={custlogos} />
        </div>
        <h1 className={CustomersImg.custViewStudy}> view study cases </h1>
        <div className={CustomersImg.custImgBlock}>
          {images.map(item => {
            return (
              <div key={item.id} className={CustomersImg.custImgItem}>
                <div className={CustomersImg.img_overlay}>
                  <img className={CustomersImg.custImgUrl} src={item.url} />
                  <div className={CustomersImg.custImgUrlBtn}>
                    <button> click </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className={CustomersImg.cusReadyHire}>
          <p className={CustomersImg.readyTag}>
            Ready to hire the best for your team
          </p>
          <button className={CustomersImg.cusSignupNow}>
            <a className={CustomersImg.cusSignupLink} href="#">
              sign up now
            </a>
          </button>
        </div>
      </div>




    </>
  );
}

export default Customers


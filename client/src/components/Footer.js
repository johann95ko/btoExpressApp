import React from "react";
import "./components.css";
import styled from 'styled-components';
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
import Logo from "../Images/BTOLogo.png"
import './components.css'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';
import TwitterIcon from '@material-ui/icons/Twitter';
import TelegramIcon from '@material-ui/icons/Telegram';


export const Footer = () => {
  return (
    <FooterContainer className="main-footer">
    <div className="footer-middle">
    <div className="container">
    <div className='row2'>
      <h4>BTOAnywhere</h4>
    </div>
    <div className="row">
        {/* Column 1 */}

    <div className="col-md-3 col-sm-6">
        <h4>About Us</h4>
         <ul className="list-unstyled">
            <li><a href="/"></a></li>
                <li>    <a href="/">Vision, Mission, and Values</a></li>
                <li>   <a href="/">Our Role</a></li>
                <li>  <a href="/">Our Logo</a></li>
                <li>   <a href="/">Research and Innovation</a></li>
        </ul>
    </div>
            {/* Column 2 */}
            <div className="col-md-3 col-sm-6">
        <h4>HDB Information</h4>
         <ul className="list-unstyled">
            <li><a href="/">BTO/SBF/Opening</a></li>
                <li>    <a href="/">HDB BTO Official Website</a></li>
                <li>   <a href="/">BTO Sales Launch</a></li>
                <li>  <a href="/">HDB Press Releases</a></li>
                <li>   <a href="/">Open Booking of Flats</a></li>
        </ul>
    </div>
            {/* Column 3 */}
            <div className="col-md-3 col-sm-6">
        <h4>Residental</h4>
        <ul className="list-unstyled">
        <li><a href="/">Buying a Flat</a></li>
                <li>    <a href="/">Financing a Flat Purchase</a></li>
                <li>   <a href="/">Servicing your HDB Housing Loan</a></li>
                <li>  <a href="/">Selling a Flat</a></li>
                <li>   <a href="/">Renting a Flat</a></li>
        </ul>
    </div>
            {/* Column 4 */}
            <div className="col-md-3 col-sm-6">
        {/* <h4>Lorem Ipsum</h4> */}
        <ul className="list-unstyled">



        </ul>
    </div>
    </div>


    <div class="row">
  <div class="col-12 col-md-10"></div>
  <div class="col-6 col-md-2">
  <a href="/"> <LinkedInIcon a href="/"/></a>

  <a href="/"> <FacebookIcon a href="/"/></a>
  <a href="/"> <TwitterIcon a href="/"/></a>

  <a href="/"> <EmailIcon a href="/"/></a>

  <a href="/"> <TelegramIcon a href="/"/></a>

     
    
  </div>
</div>

    
    

    {/* Footer Bottom  */}
    <div className="footer-bottom">
    <hr/>
    <div class="row">
  <div class="col-12 col-md-9">&copy; { new Date().getFullYear()} BTOAnywhere App - All rights reserved
</div>
  <div class="col-6 col-md-3">Subscribe to BTOAnywhere Service</div>
</div>
</div>

    </div>
    </div>
    </FooterContainer>
  );
};

const FooterContainer=styled.footer`
.row2{
  padding-bottom:2rem;

}
.container{
    display: flex;
    flex-direction:column;
    position: relative;
    bottom: 0%;
}
.footer-middle{
    background:var(--mainRed);
    padding-top:3rem;
    color:var(--mainWhite)
    flex:1
}
.footer-bottom{
    padding-top:2rem;
    position: relative;
    bottom: 0;
    width: 100%;
}
ul li a {
    color:var(--mainwhite);
}
ul lia a:hover{
    color:var(--mainlightGrey);
}

a { color: inherit; } 

`; 



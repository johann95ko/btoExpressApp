import React from "react";
import "./components.css";
import styled from 'styled-components';
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
import Logo from "../Images/BTOLogo.png"

export const Footer = () => {
  return (
    <FooterContainer className="main-footer">
    <div className="footer-middle">
    <div className="container">
    <div className="row">
        {/* Column 1 */}
    <div className="col-md-3 col-sm-6">
        <h4>Contact Us</h4>
         <ul className="list-unstyled">
            <li>
                <a href="/">Test</a></li>
             <li>Test</li>
            <li>Test</li>
            <li>Test</li>
            <li>Test</li>
        </ul>
    </div>
            {/* Column 2 */}
            <div className="col-md-3 col-sm-6">
        <h4>Lorem Ipsum</h4>
        <ul className="list-unstyled">
            <li>Test</li>
             <li>Test</li>
            <li>Test</li>
            <li>Test</li>
            <li>Test</li>
        </ul>
    </div>
            {/* Column 3 */}
            <div className="col-md-3 col-sm-6">
        <h4>Lorem Ipsum</h4>
        <ul className="list-unstyled">
            <li>Test</li>
             <li>Test</li>
            <li>Test</li>
            <li>Test</li>
            <li>Test</li>
        </ul>
    </div>
            {/* Column 4 */}
            <div className="col-md-3 col-sm-6">
        <h4>Lorem Ipsum</h4>
        <ul className="list-unstyled">
            <li>Test</li>
             <li>Test</li>
            <li>Test</li>
            <li>Test</li>
            <li>Test</li>
        </ul>
    </div>
    </div>
    
    {/* Footer Bottom  */}
    <div className="footer-bottom">
    <br/>
        <div className="text-xs-center">
            &copy;{new Date().getFullYear()} HDB App - All rights reserved
        </div>
    </div>
    </div>
    </div>
    </FooterContainer>
  );
};

const FooterContainer=styled.footer`

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
    padding-top:3rem;
    padding-bottom:2rem;
    position: fixed;
    bottom: 0;
    width: 100%;

}

ul li a {
    color:var(--mainGrey);
}

ul lia a:hover{
    color:var(--mainLightGrey);
}
`; 
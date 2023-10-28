import React from "react";
import { Navbar, NavItem } from "../../components/Navbar";
import { ReactComponent as MenuIcon } from "../../icons/menu.svg";
import { ReactComponent as UserIcon } from "../../icons/user.svg";
import { ReactComponent as LogoIcon } from "../../icons/logo.svg";

function Checkout() {
  return (
    <>
      <Navbar>
        <div className="logo-container">
          <LogoIcon className="nav-bar-logo-icon" />
        </div>
        <div className="nav-bar-route-container">
          <NavItem>
            <MenuIcon />
          </NavItem>
          <NavItem>
            <UserIcon />
          </NavItem>
        </div>
      </Navbar>
      <div style={{
        padding : "6vh 15vw 0 15vw",
        display :'flex',
        flexDirection : 'column',
        height : '92.9vh'
      }}>
        <p style={{color : "#263228", fontSize : "30pt", fontFamily : "'Montserrat', sans-serif", fontWeight : "500", marginBottom :"30px"}}>Your Cart</p>
        <div style={{display : "gird", gridTemplateColumns : "2fr 1fr"}}>
            <div style={{gridRow : "1/2"}}></div>
            <div style={{gridRow : "2/3"}}></div>
        </div>
        <hr style={{width : "100%",}}/>
      </div>
    </>
  );
}

export default Checkout;

import React from "react";
// import { url } from "inspector";

const Background = '../images/fantasydata.png';

const styles = {
  navbarStyle: {
    background: "gray",
    justifyContent: "flex-end",
   color: "white"
  },
  logoStyle: {
    backgroundImage: `url(${Background})`,
  }
 
};



const Nav = () => (
  <nav style={styles.navbarStyle}  className="navbar">
    <a className="navbar-brand" style={styles.navbarStyle} href="/">
       Home
    </a>
    <a className="navbar-brand" style={styles.navbarStyle} href="/news">
      News
    </a>
    <a className="navbar-brand" style={styles.navbarStyle} href="/games/10">
       Play Game
    </a>
    {/* <a className="navbar-brand" style={styles.navbarStyle} href="/injuries">
      Injuries
    </a> */}
  </nav>
);

export default Nav;

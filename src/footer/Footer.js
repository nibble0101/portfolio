import React from "react";
import SocialMedia from "./SocialMedia";
import CopyRight from "./CopyRight";
import Menu from "../header/Menu"


function Footer() {
  return (
    <footer className="footer">
      <SocialMedia />
      <Menu />
      <CopyRight />
    </footer>
  );
}

export default Footer;

import React, { useState, useCallback, useRef } from "react";
import HamburgerMenu from "react-hamburger-menu";
function Menu(props) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();
  const activeMenuRef = useRef();
  const hamburgerClickHandle = useCallback((e) => {
    setIsOpen((prevState) => !prevState);
    menuRef.current.classList.toggle('display-menu');
    document.body.classList.toggle('lock-scroll');
  }, []) 
  const menuClickHandle = useCallback(e => {
       const {name} = e.target;
       if(name === "link"){
        menuRef.current.classList.toggle('display-menu');
        document.body.classList.toggle('lock-scroll');
        setIsOpen((prevState) => !prevState);
        if(activeMenuRef.current){
            activeMenuRef.current.classList.toggle('bg-color');
        }
        activeMenuRef.current = e.target.parentElement;
        activeMenuRef.current.classList.add("bg-color")
       }
  }, [])
  
  return (
    <React.Fragment>
      <ul className="menu" ref = {menuRef} onClick = {menuClickHandle} >
        <li>
          <a href="#home" name = "link"> HOME</a>
        </li>
        <li>
          <a href="#about" name = "link"> ABOUT </a>
        </li>
        <li>
          <a href="#projects" name = "link"> PROJECTS</a>
        </li>
        <li>
          <a href="#contact" name = "link"> CONTACT </a>
        </li>
        <li>
          <a
            href="https://dev.to/nibble0101"
            target="_blank"
            rel="noreferrer noopener"
            name = "link"
          >
            BLOG
          </a>
        </li>
      </ul>
      <HamburgerMenu
        isOpen={isOpen}
        menuClicked={hamburgerClickHandle}
        width={18}
        height={15}
        strokeWidth={1}
        rotate={0}
        color="gray"
        borderRadius={0}
        animationDuration={0.5}
        className="hamburger-menu"
      />
    </React.Fragment>
  );
}

export default Menu;

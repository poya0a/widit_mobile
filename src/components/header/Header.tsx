import React from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { navState } from '../../atoms';

import logoB from "../../assets/images/logo/logo_b.png";
import logoW from "../../assets/images/logo/logo_w.png";

const Header = () => {

  const headerState = useRecoilValue(navState);
    console.log(headerState)
  return (
        <header id="header" className={headerState === "myPage" ? "interactive" : headerState === "search" ? "hide" : ""}>
          {headerState === "news" ? 
            <h1 className="header_title">소식</h1>
            : headerState === "home" || headerState === "review" ?
            <Link to="/" aria-label="홈으로 이동" className="logo_wrap">
              <h1 className="logo">
                <img className="logo_img" src={logoB} alt="WIDIT" />
                <img
                  className="logo_img"
                  style={{ display: "none" }}
                  src={logoW}
                  alt="WIDIT"
                />
              </h1>
            </Link>
            : ""
          }
        <Link to="/setting" id="settingMenuButton">
          <div>
              <i className="menu_button_line"></i>
              <i className="menu_button_line"></i>
              <i className="menu_button_line"></i>
          </div>
        </Link>
      </header>
    );
};

export default Header;
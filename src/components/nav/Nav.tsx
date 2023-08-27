import React from 'react';
import { Link } from 'react-router-dom';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { navState } from '../../atoms';

const Nav = () => {

    const setNavState = useSetRecoilState(navState);

    const onClickMenu = (menuName: string) => {
        setNavState(menuName);  
    };

    const headerState = useRecoilValue(navState);

    return (
        <nav id="nav">
            <ul className="nav_list">
                <li className="nav_item">
                    <Link to="/" 
                    className={headerState === "home" ?  "menu_button active" : "menu_button"} 
                    onClick={() => onClickMenu("home")}>
                        <span className="glyphicon glyphicon-home" />
                        <p>홈</p>
                    </Link>
                </li>
                <li className="nav_item">
                    <Link to="/search" 
                    className={headerState === "search" ?  "menu_button active" : "menu_button"} 
                    onClick={() => onClickMenu("search")}>
                        <span className="glyphicon glyphicon-search" />
                        <p>검색</p>
                    </Link>
                </li>
                <li className="nav_item">
                    <Link to="/review" 
                    className={headerState === "review" ?  "menu_button active" : "menu_button"} 
                    onClick={() => onClickMenu("review")}>
                        <span className="glyphicon glyphicon-star" />
                        <p>평가</p>
                    </Link>
                </li>
                <li className="nav_item">
                    <Link to="/news" 
                    className={headerState === "news" ?  "menu_button active" : "menu_button"} 
                    onClick={() => onClickMenu("news")}>
                        <span className="glyphicon glyphicon-comment" />
                        <p>소식</p>
                    </Link>
                </li>
                <li className="nav_item">
                    <Link to="/myPage" 
                    className={headerState === "myPage" ?  "menu_button active" : "menu_button"} 
                    onClick={() => onClickMenu("myPage")}>
                        <span className="glyphicon glyphicon-user" />
                        <p>마인</p>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface SelectMenu {
    home: boolean;
    search: boolean;
    review: boolean;
    news: boolean;
    myPage: boolean;
}

const Nav = () => {

    const [selectMenu, setSelectMenu] = useState<SelectMenu>({
        home: true,
        search: false,
        review: false,
        news: false,
        myPage: false,
    });

    const onClickMenu = (menuName: keyof SelectMenu) => {
        const updatedMenu: SelectMenu = {
            home: false,
            search: false,
            review: false,
            news: false,
            myPage: false,
        };
        
        updatedMenu[menuName] = true;
        setSelectMenu(updatedMenu);
        
    }

    return (
        <nav id="nav">
            <ul className="nav_list">
                <li className="nav_item">
                    <Link to="/" 
                    className={selectMenu.home ?  "menu_button active" : "menu_button"} 
                    onClick={() => onClickMenu("home")}>
                        <span className="glyphicon glyphicon-home" />
                        <p>홈</p>
                    </Link>
                </li>
                <li className="nav_item">
                    <Link to="/search" 
                    className={selectMenu.search ?  "menu_button active" : "menu_button"} 
                    onClick={() => onClickMenu("search")}>
                        <span className="glyphicon glyphicon-search" />
                        <p>검색</p>
                    </Link>
                </li>
                <li className="nav_item">
                    <Link to="/review" 
                    className={selectMenu.review ?  "menu_button active" : "menu_button"} 
                    onClick={() => onClickMenu("review")}>
                        <span className="glyphicon glyphicon-star" />
                        <p>평가</p>
                    </Link>
                </li>
                <li className="nav_item">
                    <Link to="/news" 
                    className={selectMenu.news ?  "menu_button active" : "menu_button"} 
                    onClick={() => onClickMenu("news")}>
                        <span className="glyphicon glyphicon-comment" />
                        <p>소식</p>
                    </Link>
                </li>
                <li className="nav_item">
                    <Link to="/myPage" 
                    className={selectMenu.myPage ?  "menu_button active" : "menu_button"} 
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
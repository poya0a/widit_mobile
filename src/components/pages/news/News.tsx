import React, { useState } from 'react';
import SearchBar from '../../common/SearchBar';
import NewsItem from './NewsItem';

const News = () => {

    const [ activeMenu, setActiveMenu ] = useState<string>("notice")
    const onClickMenu = (menuName: string) => {
        setActiveMenu(menuName);
    }

    return (
        <div id="news">
            <div className="news_menu_button">
                <button className={activeMenu === "notice" ? "active" : ""} onClick={() => onClickMenu("notice")}>소식</button>
                <button className={activeMenu === "activity" ? "active" : ""} onClick={() => onClickMenu("activity")}>활동</button>
            </div>
            <SearchBar></SearchBar>
            <div className="news_list">
                <NewsItem />
                <NewsItem />
                <NewsItem />
                <NewsItem />
                <NewsItem />
                <NewsItem />
                <NewsItem />
                <NewsItem />
                <NewsItem />
                <NewsItem />
                <NewsItem />
                <NewsItem />
                <NewsItem />
                <NewsItem />
                <NewsItem />
                <NewsItem />
            </div>
        </div>
    );
};

export default News;
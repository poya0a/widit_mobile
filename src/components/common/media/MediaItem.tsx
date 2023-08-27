import React from 'react';
import { Link } from 'react-router-dom';

const MediaItem = () => {
    return (
        <li className="media_item">
            <Link to={"/contents/"}>
                <div className="cover_img">
                    <div className="rank"></div>
                    <img></img>
                </div>
                <div className="media_text">
                    <p className="title"></p>
                    <p className="sub">
                        <em>2023</em>
                        <em>액션</em>
                    </p>
                    <p className="mark">
                        <em>예상</em>
                        <em>3.7</em>
                    </p>
                    <p className="reserve">
                        <em>예매율</em> {}
                        <em>누적관객</em>  명
                    </p>
                </div>
            </Link>
        </li>
    );
};

export default MediaItem;
import React from 'react';
import MediaList from '../common/media/MediaList';

const Main = () => {
    return (
        <main id="main">
            <div className="title_box">
                <h3 className="list_title">박스오피스</h3>
            </div>
            <MediaList />
            <div className="title_box">
                <h3 className="list_title">넷플릭스</h3>
            </div>
            <MediaList />
            <div className="title_box">
                <h3 className="list_title">왓챠</h3>
            </div>
            <MediaList />
            <div className="title_box">
                <h3 className="list_title">네이버</h3>
            </div>
            <MediaList />
        </main>
    );
};

export default Main;
import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MediaItem from './MediaItem';
import Slider from "react-slick";

const MediaList = () => {
    const settings = {
          infinite: false, 
          speed: 1200, 
          slidesToShow: 5, 
          slidesToScroll: 1, 
          centerMode: true, 
          centerPadding: '10px',
          autoplay: false, 
          autoplaySpeed: 2500,
          dots: false,
        };
    return (
        <div className="media_list">
            <div className="slide_wrap">
                <div className="slide_container">
                    <ul className="list">
                        <Slider {...settings}>
                            <MediaItem/>
                            <MediaItem/>
                            <MediaItem/>
                            <MediaItem/>
                            <MediaItem/>
                            <MediaItem/>
                            <MediaItem/>
                            <MediaItem/>
                            <MediaItem/>
                            <MediaItem/>
                        </Slider>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MediaList;
import React from "react";

const Post = () => {
  return (
    <div className="post">
      <div className="post_container">
        <div className="post_header">
          <div className="profile">
            <div className="profile_image">
              <img src="" alt="" />
            </div>
            <div className="profile_name">poya</div>
          </div>
          <button className="follow_button">팔로우</button>
          <button className="more_button">
            <i className="material-icons">more_horiz</i>
          </button>
        </div>

        <div className="post_images">
          <img src="" alt="" />
        </div>
        <div className="post_footer">
          <div className="button_list">
            <button className="like">
              <i className="fa fa-heart-o" />
            </button>
            <button className="comment">
              <i className="far fa-comment-alt" />
            </button>
            <button className="message">
              <i className="fas fa-paper-plane" />
            </button>
            <div className="images_button">
              <i></i>
              <i></i>
              <i></i>
            </div>
            <button className="book_mark">
              <i className="far fa-bookmark" />
            </button>
          </div>
          <p className="like_number">
            <em>aaaaa</em>님 외 <em>여러 명</em>이 좋아합니다.
          </p>
          <div className="content">
            <em className="content_title">TITLE</em>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
              possimus vitae dolor iusto dolore voluptatum quaerat sed magni,
              aliquid ipsa autem? Alias eligendi tempore excepturi, pariatur
              aperiam et consectetur commodi?
            </p>
          </div>
          <p className="upload_date">5월 5일</p>
        </div>
      </div>
    </div>
  );
};

export default Post;

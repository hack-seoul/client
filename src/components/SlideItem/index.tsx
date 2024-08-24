import React from 'react';
import './slideitem.css';

const SlideItem: React.FC = () => {
  return (
    <div className="short">
      <div className="container">
        <div className="group-5">
          <span className="container-1">외모지상주의. 1, 대원앤북</span>
          <img
            className="play-arrow-1"
            src="/assets/vectors/PlayArrow_x2.svg"
            alt="Play"
          />
        </div>
        <div className="button">
          <div className="up">
            <img
              className="thumb-up-1"
              src="../../../public/vectors/ThumbUp_x2.svg"
              alt="Thumb up"
            />
            <span className="likes">Likes</span>
          </div>
          <div className="comment">
            <img
              className="chat-bubble-1"
              src="../../../public/vectors/ChatBubble_x2.svg"
              alt="Chat bubble"
            />
            <span className="container">229</span>
          </div>
          <div className="export">
            <span className="material-symbols-outlined">ios_share</span>
            <span className="export-1">Export</span>
          </div>
          <div className="menu-1">
            <span className="material-symbols-outlined">menu</span>
          </div>
        </div>
      </div>
      <div className="progress">
        <div className="rectangle-103"></div>
      </div>
    </div>
  );
};

export default SlideItem;

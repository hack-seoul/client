import React from 'react';
import './slideitem.css';

const SlideItem: React.FC = () => {
  return (
    <div className="short">
      <div className="container">
        <div className="group-5">
          <span className="material-symbols-outlined">play_arrow</span>
          <span className="container-1">외모지상주의. 1, 대원앤북</span>
        </div>
        <div className="button">
          <div className="up">
            <span className="material-symbols-outlined">thumb_up</span>
            <span className="likes">Likes</span>
          </div>
          <div className="comment">
            <span className="material-symbols-outlined">chat_bubble</span>
            <span className="likes">229</span>
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

import './Short.css';

export default function Short() {
  return (
    <div className="short">
      <div className="background"></div>
      <div className="fixed">
        <div className="time">9:41</div>
        <div className="container-1">
          <div className="dynamic-island"></div>
          <div className="status-pro">
            <img className="cellular" src="../../../public/vectors/Cellular1_x2.svg" />
            <img className="wifi" src="../../../public/vectors/Wifi2_x2.svg" />
            <div className="battery-percentage">
              <div className="percent"></div>
              <img className="battery" src="../../../public/vectors/Battery2_x2.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="group-5">
          <span className="container-1">외모지상주의. 1, 대원앤북</span>
          <img className="play-arrow-1" src="../../../public/vectors/PlayArrow_x2.svg" />
        </div>
        <div className="button">
          <div className="up">
            <img className="thumb-up-1" src="../../../public/vectors/ThumbUp_x2.svg" />
            <span className="likes">Likes</span>
          </div>
          <div className="comment">
            <img
              className="chat-bubble-1"
              src="../../../public/vectors/ChatBubble_x2.svg"
            />
            <span className="container">229</span>
          </div>
          <div className="export">
            <img className="ios-share-1" src="../../../public/vectors/IosShare_x2.svg" />
            <span className="export-1">Export</span>
          </div>
          <div className="menu-1">
            <img className="more-vert-1" src="../../../public/vectors/MoreVert_x2.svg" />
          </div>
        </div>
      </div>
      <div className="progress">
        <div className="rectangle-103"></div>
      </div>
      <div className="menu-2">
        <div className="frame-1">
          <div className="group-1">
            <img className="home-1" src="../../../public/vectors/Home1_x2.svg" />
            <span className="home-2">Home</span>
          </div>
          <div className="group-2">
            <img className="search" src="../../../public/vectors/Search_x2.svg" />
            <span className="search-2">Search</span>
          </div>
          <img className="add-circle-1" src="../../../public/vectors/AddCircle_x2.svg" />
          <div className="group-3">
            <img
              className="account-circle-1"
              src="../../../public/vectors/AccountCircle2_x2.svg"
            />
            <span className="me">Me</span>
          </div>
          <div className="group-4">
            <img
              className="account-circle-2"
              src="../../../public/vectors/AccountCircle_x2.svg"
            />
            <span className="me-1">Me</span>
          </div>
        </div>
        <div className="rectangle-100"></div>
      </div>
    </div>
  );
}

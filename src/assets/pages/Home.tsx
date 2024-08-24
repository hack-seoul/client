import './Home.css'

export default function Home() {
  return (
    <div className="home">
      <div className="fixed">
        <div className="time">
        9:41
        </div>
        <div className="container">
          <div className="dynamic-island">
          </div>
          <div className="status-pro">
            <img className="cellular" src="../../../public/vectors/Cellular_x2.svg" />
            <img className="wifi" src="../../../public/vectors/Wifi1_x2.svg" />
            <div className="battery-percentage">
              <div className="percent">
              </div>
              <img className="battery" src="../../../public/vectors/Battery_x2.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
      (서비스 명 영어로 대충)
      </div>
      <div className="frame-122">
        <img className="zoom-in" src="../../../public/vectors/ZoomIn2_x2.svg" />
        <span className="search">
        Search
        </span>
      </div>
      <div className="rectangle-100">
      </div>
    </div>
  )
}
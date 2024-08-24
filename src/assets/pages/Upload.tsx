import './Upload.css'

export default function Upload() {
  return (
    <div className="upload">
      <div className="fixed">
        <div className="time">
        9:41
        </div>
        <div className="container">
          <img className="dynamic-island" src="assets/vectors/DynamicIsland1_x2.svg" />
          <div className="status-pro">
            <img className="cellular" src="assets/vectors/Cellular4_x2.svg" />
            <img className="wifi" src="assets/vectors/Wifi4_x2.svg" />
            <div className="battery-percentage">
              <div className="percent">
              </div>
              <img className="battery" src="assets/vectors/Battery1_x2.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="frame-122">
          <div className="frame-121">
            <img className="zoom-in" src="assets/vectors/ZoomIn1_x2.svg" />
            <span className="search">
            Search
            </span>
          </div>
          <div className="frame-14">
            <div className="filter">
              <img className="vector-2" src="assets/vectors/Vector5_x2.svg" />
            </div>
            <span className="filter-1">
            Filter
            </span>
          </div>
        </div>
      </div>
      <div className="rectangle-100">
      </div>
    </div>
  )
}
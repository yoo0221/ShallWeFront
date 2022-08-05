import "./topnav.css";

function Topnav(props) {
  return (
    <div className="double-nav">
      <div className="container row d-flex justify-content-center">
        <div className="address col-11" id="">
          <div className="row">
            <div className="address-text col-9 d-flex flex-row-reverse">
              서울시 강남구 방배동
            </div>
            <span className="col-3">∨</span>
          </div>
        </div>
        <div className="col-1">
          <span id="calendar" ref={props.carRef}>
            📅
          </span>
        </div>
      </div>
      <nav
        className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
        id="layout-navbar"
      >
        <div
          className="d-flex flex-row align-items-center"
          id="navbar-collapse"
        >
          {/* <a href="{% url 'search' %}" style="color: #6c7d8f"> */}
          <a href="/search" className="container">
            <div className="navbar-nav row">
              <div className="nav-item d-flex align-items-center col-12">
                <i className="bx bx-search fs-4 lh-0"></i>
                <input
                  type="text"
                  className="border-0 invisible-color"
                  placeholder=""
                  aria-label=""
                  size={75}
                />
              </div>
            </div>
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Topnav;

function Menu() {
  return (
    <aside
      id="layout-menu"
      className="layout-menu menu-vertical menu bg-menu-theme"
    >
      <div className="app-brand demo">
        <a href onClick={void 0} className="app-brand-link">
          {/* <a href="{% url 'home' %}" class="app-brand-link"> */}
          <span className="app-brand-logo demo">
            <img
              src="%PUBLIC_URL%/assets/img/logo.png"
              alt=""
              width="20px"
              height="20px"
            />
          </span>
          <span className="app-brand-text demo menu-text fw-bolder ms-2">
            Shall We?
          </span>
        </a>
        {/* href="javascript:void(0);" */}
        <span className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none">
          <i className="bx bx-chevron-left bx-sm align-middle"></i>
        </span>
      </div>

      <ul className="menu-inner py-1">
        <li className="menu-item">
          {/* <a href="{% url 'home' %}" class="menu-link">  */}
          <a href="#" className="menu-link">
            <i className="menu-icon tf-icons bx bx-home-circle"></i>
            <div data-i18n="Analytics">홈</div>
          </a>
        </li>

        <li className="menu-item">
          {/* <a href="{% url 'search' %}" class="menu-link"> */}
          <a href="#" className="menu-link">
            <i className="menu-icon tf-icons bx bx-search"></i>
            <div data-i18n="Layouts">메이트 찾기</div>
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Menu;

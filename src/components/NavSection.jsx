import React from "react";

export const NavSection = () => {
  const navItems = [
    { label: "Home", active: true },
    { label: "Category", active: false },
    { label: "About", active: false },
    { label: "Contact", active: false },
  ];

  return (
    <header className="d-flex w-100 align-items-center justify-content-between px-lg-5 px-3 py-3">
      <div className="d-flex align-items-center gap-lg-5 ps-lg-5">
        <div className="position-relative" style={{ width: 115, height: 40 }}>
          <img
            className="position-absolute"
            style={{ width: 55, height: 7, top: 33, left: 30 }}
            alt="Group"
            src="/group.png"
          />
          <img
            className="position-absolute"
            style={{ width: 114, height: 27, top: 0, left: 0 }}
            alt="Group"
            src="/group-1.png"
          />
        </div>

        <nav className="navbar navbar-expand-md">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="mainNav">
              <ul className="navbar-nav ms-auto mb-2 mb-md-0 d-flex gap-3">
                {navItems.map((item, index) => (
                  <li className="nav-item" key={index}>
                    <a
                      className={`nav-link fw-bold ${item.active ? 'text-primary' : 'text-secondary'}`}
                      href="#"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <div className="d-flex align-items-center gap-3" style={{ zIndex: 1000 }}>
        <div className="d-flex align-items-center gap-2 ps-3 pe-4 py-2 bg-light rounded-pill" style={{ width: window.innerWidth < 576 ? 246 : 280 }}>
          <i className="bi bi-search text-muted" />
          <input
            className="form-control border-0 bg-transparent p-0 h-auto text-muted"
            placeholder="Search something here!"
            type="text"
          />
        </div>

        <button className="btn btn-primary rounded-pill py-2 d-none d-md-flex align-items-center">
          Join the community
        </button>

        <div className="d-none d-md-flex align-items-center gap-1 ps-2 pe-2 pt-2 pb-2">
          <div className="d-flex align-items-center gap-2">
            <div className="position-relative" style={{ width: 21, height: 21 }}>
              <div
                className="position-relative"
                style={{
                  width: 16,
                  height: 16,
                  top: 2,
                  left: 3,
                  backgroundImage: "url('/group-2.png')",
                  backgroundSize: "100% 100%",
                }}
              />
            </div>
            <div className="fw-medium text-primary" style={{ fontSize: '1rem', lineHeight: '23px' }}>
              VND
            </div>
          </div>
          <i className="bi bi-chevron-down text-primary" />
        </div>
      </div>
    </header>

  );
};

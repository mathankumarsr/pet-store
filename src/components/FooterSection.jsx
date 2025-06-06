import React from "react";

export const FooterSection = () => {
  const navLinks = [
    { title: "Home", href: "#" },
    { title: "Category", href: "#" },
    { title: "About", href: "#" },
    { title: "Contact", href: "#" },
  ];

  const socialLinks = [
    { icon: <i className="bi bi-facebook fs-5" />, href: "#" },
    { icon: <i className="bi bi-twitter fs-5" />, href: "#" },
    { icon: <i className="bi bi-instagram fs-5" />, href: "#" },
    { icon: <i className="bi bi-youtube fs-5" />, href: "#" },
  ];

  return (
    <footer
      className="w-100"
      style={{
        background: "linear-gradient(134deg, #fceed5 6%, #fceed5 75%, #ffe7ba 100%)",
        borderRadius: "40px 40px 0px 0px",
        overflow: "hidden",
      }}
    >
      <div className="container py-5">
        <div className="card shadow rounded-3 border-0 mb-4">
          <div className="d-flex flex-column flex-md-row align-items-start gap-3 p-4 bg-primary text-white rounded-4">
            <div className="fs-5 fw-bold">
              Register Now So You Don&#39;t Miss Our Programs
            </div>

            <div className="d-flex flex-grow-1 align-items-center gap-3 bg-white rounded-3 p-2">
              <div className="flex-grow-1">
                <input
                  className="form-control border border-secondary"
                  type="email"
                  placeholder="Enter your Email"
                />
              </div>

              <button className="btn btn-primary px-4 py-2 rounded">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-start pb-4 border-bottom border-secondary">
          <nav className="d-flex gap-4 mb-3 mb-md-0">
            {navLinks.map((link, index) => (
              <a key={index} href={link.href} className="text-dark fw-medium text-decoration-none">
                {link.title}
              </a>
            ))}
          </nav>

          <div className="d-flex gap-3">
            {socialLinks.map((social, index) => (
              <a key={index} href={social.href} className="text-dark">
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mt-4">
          <div className="text-muted small mb-2 mb-md-0">
            © 2022 Monito. All rights reserved.
          </div>

          <div className="d-flex flex-column align-items-center mb-2 mb-md-0">
            <img
              src="/group-20.png"
              alt="Monito Logo"
              style={{ width: "114px", height: "27px" }}
            />
            <img
              src="/group-19.png"
              alt="Monito Decoration"
              style={{ width: "55px", height: "7px", marginTop: "6px" }}
            />
          </div>

          <div className="text-muted small d-flex gap-3">
            <a className="text-decoration-none text-muted">
              Terms of Service
            </a>
            <a className="text-decoration-none text-muted">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

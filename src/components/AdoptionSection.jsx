import React from "react";

const partnerLogos = [
  { src: "/image-4-1.png", alt: "Partner logo 1", width: "88px", height: "16" },
  {
    src: "/image-6-1.png",
    alt: "Partner logo 2",
    width: "114px",
    height: "114px",
  },
  {
    src: "/image-7-1.png",
    alt: "Partner logo 3",
    width: "104px",
    height: "46px",
  },
  { src: "/image-8-1.png", alt: "Partner logo 4", width: "92px", height: "16" },
  { src: "/image-9.png", alt: "Partner logo 5", width: "92px", height: "92px" },
  { src: "/image-10.png", alt: "Partner logo 6", width: "130px", height: "14" },
  {
    src: "/image-11.png",
    alt: "Partner logo 7",
    width: "116px",
    height: "72px",
  },
];

export const AdoptionSection = () => {
  return (
    <section className="container py-5">
      <div className="d-flex justify-content-between align-items-center flex-wrap mb-4">
        <div className="d-flex align-items-end gap-2 mb-3 mb-md-0">
          <span className="fw-medium text-black">Proud to be part of</span>
          <span className="text-primary fw-bold h4 mb-0">Pet Sellers</span>
        </div>

        <button className="btn btn-outline-secondary rounded-pill border-primary px-4 py-2 d-flex align-items-center">
          <span className="text-primary">View all our sellers</span>
          <i className="bi bi-chevron-right ms-2"></i>
        </button>
      </div>

      <div className="row g-4 justify-content-center">
        {partnerLogos.map((logo, index) => (
          <div key={index} className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center align-items-center" style={{ width: '151px'}}>
            <img
              src={logo.src}
              alt={logo.alt}
              style={{ width: logo.width, height: logo.height }}
              className="img-fluid"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

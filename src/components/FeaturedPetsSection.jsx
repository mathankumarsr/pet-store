import React from "react";

export const FeaturedPetsSection = () => {
  const featuredPets = [
    {
      id: 1,
      code: "MO231",
      breed: "Pomeranian White",
      gender: "Male",
      age: "02 months",
      price: "6.900.000 VND",
      image: "/image-2-8.png",
    },
    {
      id: 2,
      code: "MO502",
      breed: "Poodle Tiny Yellow",
      gender: "Female",
      age: "02 months",
      price: "3.900.000 VND",
      image: "/image-2.png",
    },
    {
      id: 3,
      code: "MO102",
      breed: "Poodle Tiny Sepia",
      gender: "Male",
      age: "02 months",
      price: "4.000.000 VND",
      image: "/image-3.png",
    },
    {
      id: 4,
      code: "MO512",
      breed: "Alaskan Malamute Grey",
      gender: "Male",
      age: "02 months",
      price: "8.900.000 VND",
      image: "/image-4.png",
    },
    {
      id: 5,
      code: "MO231",
      breed: "Pembroke Corgi Cream",
      gender: "Male",
      age: "02 months",
      price: "7.900.000 VND",
      image: "/image-5.png",
    },
    {
      id: 6,
      code: "MO502",
      breed: "Pembroke Corgi Tricolor",
      gender: "Female",
      age: "02 months",
      price: "9.000.000 VND",
      image: "/image-6.png",
    },
    {
      id: 7,
      code: "MO231",
      breed: "Pomeranian White",
      gender: "Female",
      age: "02 months",
      price: "6.500.000 VND",
      image: "/image-7.png",
    },
    {
      id: 8,
      code: "MO512",
      breed: "Poodle Tiny Dairy Cow",
      gender: "Male",
      age: "02 months",
      price: "5.000.000 VND",
      image: "/image-8.png",
    },
  ];

  return (
    <section className="py-5 px-3 px-md-4 px-lg-5">
      <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
        <div>
          <p className="text-dark mb-1">What's new?</p>
          <h2 className="fw-bold text-primary" style={{ fontSize: "1.5rem" }}>
            Take A Look At Some Of Our Pets
          </h2>
        </div>
        <button className="btn btn-outline-primary rounded-pill px-4 py-2 d-flex align-items-center gap-2">
          <span>View more</span>
          <i className="bi bi-chevron-right"></i>
        </button>
      </div>

      <div className="row g-4">
        {featuredPets.map((pet) => (
          <div key={`${pet.id}-${pet.breed}`} className="col-12 col-sm-6 col-lg-4 col-xl-3">
            <div className="card border-0 shadow-sm rounded-3 overflow-hidden p-2">
              <div className="position-relative" style={{ paddingTop: "100%", backgroundColor: "#fff" }}>
                <img
                  src={pet.image}
                  alt={`${pet.code} - ${pet.breed}`}
                  className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title fw-bold mb-2">{pet.code} - {pet.breed}</h5>
                <div className="d-flex flex-column small text-muted mb-2">
                  <div className="d-flex gap-1">
                    <span>Gene:</span>
                    <strong>{pet.gender}</strong>
                  </div>
                  <div className="d-flex gap-1">
                    <span>Age:</span>
                    <strong>{pet.age}</strong>
                  </div>
                </div>
                <p className="fw-bold text-dark mb-0">{pet.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

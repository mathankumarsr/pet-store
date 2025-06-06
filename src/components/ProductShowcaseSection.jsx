import React from "react";

export const ProductShowcaseSection = () => {
  const products = [
    {
      id: 1,
      name: "Reflex Plus Adult Cat Food Salmon",
      image: "/image-2-9.png",
      productType: "Dog Food",
      size: "385gm",
      price: "140.000 VND",
      promotion: "Free Toy & Free Shaker",
    },
    {
      id: 2,
      name: "Reflex Plus Adult Cat Food Salmon",
      image: "/image-2-10.png",
      productType: "Cat Food",
      size: "1.5kg",
      price: "165.000 VND",
      promotion: "Free Toy & Free Shaker",
    },
    {
      id: 3,
      name: "Cat scratching ball toy kitten sisal rope ball",
      image: "/image-2-11.png",
      productType: "Toy",
      price: "1.100.000 VND",
      promotion: "Free Cat Food",
    },
    {
      id: 4,
      name: "Cute Pet Cat Warm Nest",
      image: "/image-2-12.png",
      productType: "Toy",
      price: "410.000 VND",
      promotion: "Free Cat Food",
    },
    {
      id: 5,
      name: "NaturVet Dogs - Omega-Gold Plus Salmon Oil",
      image: "/image-2-13.png",
      productType: "Dog Food",
      size: "385gm",
      price: "350.000 VND",
      promotion: "Free Toy & Free Shaker",
    },
    {
      id: 6,
      name: "Costumes Fashion Pet Clother Cowboy Rider",
      image: "/image-2-14.png",
      productType: "Costume",
      size: "1.5kg",
      price: "500.000 VND",
      promotion: "Free Toy & Free Shaker",
    },
    {
      id: 7,
      name: "Costumes Chicken Drumsti ck Headband",
      image: "/image-2-15.png",
      productType: "Costume",
      price: "400.000 VND",
      promotion: "Free Cat Food",
    },
    {
      id: 8,
      name: "Plush Pet Toy",
      image: "/image-2-16.png",
      productType: "Toy",
      price: "250.000 VND",
      promotion: "Free Food & Shaker",
    },
  ];

  return (
    <section className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <p className="mb-1 text-secondary">Hard to choose right products for your pets?</p>
          <h2 className="h4 text-primary">Our Products</h2>
        </div>
        <button className="btn btn-outline-primary rounded-pill px-4 d-flex align-items-center gap-2">
          View more
          <i className="bi bi-chevron-right"></i>
        </button>
      </div>

      <div className="row g-4">
        {products.map((product) => (
          <div className="col-12 col-md-6 col-lg-3" key={product.id}>
            <div className="card h-100 shadow-sm p-2">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.name}
                style={{ height: "264px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title mb-2">{product.name}</h5>
                <p className="card-text mb-1">
                  <strong>Product:</strong> {product.productType}
                </p>
                {product.size && (
                  <p className="card-text mb-1">
                    <strong>Size:</strong> {product.size}
                  </p>
                )}
                <p className="card-text fw-bold">{product.price}</p>
                <span className="badge bg-secondary text-dark mt-2"><img src='/GiftCard.svg' alt='gift' /><span className="ms-2">{product.promotion}</span></span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

import React from "react";

const articles = [
  {
    id: 1,
    image: "/image-3-1.png",
    title: "What is a Pomeranian? How to Identify Pomeranian Dogs",
    description:
      "The Pomeranian, also known as the Pomeranian (Pom dog), is always in the top of the cutest pets. Not only that, the small, lovely, smart, friendly, and skillful circus dog breed.",
  },
  {
    id: 2,
    image: "/image-3-2.png",
    title: "Dog Diet You Need To Know",
    description:
      "Dividing a dog's diet may seem simple at first, but there are some rules you should know so that your dog can easily absorb the nutrients in the diet. For those who are just starting to raise dogs, especially newborn puppies with relatively weak resistance.",
  },
  {
    id: 3,
    image: "/image-3-3.png",
    title:
      "Why Dogs Bite and Destroy Furniture and How to Prevent It Effectively",
    description:
      "Dog bites are common during development. However, no one wants to see their furniture or important items being bitten by a dog.",
  },
];

export const NewsletterSection = () => {
  return (
    <section className="w-100 py-5 px-3">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap">
          <div>
            <p className="mb-1 fw-medium text-dark">You already know?</p>
            <h2 className="fw-bold text-primary fs-4">Useful Pet Knowledge</h2>
          </div>

          <button
            className="btn btn-outline-secondary rounded-pill border-2 border-primary text-primary d-flex align-items-center"
          >
            <span className="fw-medium">View more</span>
            <i className="bi bi-chevron-right ms-2" />
          </button>
        </div>

        <div className="row g-4">
          {articles.map((article) => (
            <div className="col-12 col-md-6 col-lg-4" key={article.id}>
              <div className="card shadow rounded-4 shadow-sm">
                <div className="card shadow rounded-4 p-2 border-0 bg-white">
                  <div
                    className="w-100 mb-2 rounded-3 overflow-hidden"
                    style={{ height: "240px" }}
                  >
                    <img
                      src={article.image}
                      alt="Article"
                      className="img-fluid w-100 h-100 object-fit-cover"
                    />
                  </div>

                  <div className="d-flex flex-column gap-2 px-2 pb-2">
                    <div className="bg-info text-white rounded-pill px-3 py-1 badge bg-primary" style={{ width: '30%' }}>
                      <span className="fw-bold small">Pet knowledge</span>
                    </div>
                    <h3 className="fs-6 fw-bold text-dark mb-1">
                      {article.title}
                    </h3>
                    <p className="text-muted small mb-0" style={{ display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                      {article.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

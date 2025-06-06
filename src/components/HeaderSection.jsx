import React from "react";
import { NavSection } from "./NavSection";

export const HeaderSection = () => {
  return (
    <section
      className="position-relative w-100 overflow-hidden"
      style={{
        borderBottomLeftRadius: "40px",
        borderBottomRightRadius: "40px",
        background: "linear-gradient(134deg, rgba(252,238,213,1) 6%, rgba(252,238,213,1) 75%, rgba(255,231,186,1) 100%)"
      }}
    >
      <div className="container-fluid position-relative" style={{ height: "695px" }}>
        <div
          className="position-absolute"
          style={{
            width: "635px",
            height: "635px",
            top: "231px",
            left: "734px",
            backgroundColor: "#003459",
            borderRadius: "99px",
            transform: "rotate(9.36deg)",
          }}
        />
        <div
          className="position-absolute"
          style={{
            width: "635px",
            height: "635px",
            top: "201px",
            left: "791px",
            backgroundColor: "#F7Dba7",
            borderRadius: "99px",
            transform: "rotate(25.23deg)",
          }}
        />
        <div
          className="position-absolute"
          style={{
            width: "635px",
            height: "635px",
            top: "603px",
            left: "123px",
            backgroundColor: "#F7Dba7",
            borderRadius: "99px",
            transform: "rotate(56.47deg)",
            opacity: 0.4,
          }}
        />
        <div
          className="position-absolute"
          style={{
            width: "67px",
            height: "67px",
            top: "183px",
            left: "163px",
            backgroundColor: "#F7Dba7",
            borderRadius: "20px",
            transform: "rotate(25.23deg)",
          }}
        />
        <div
          className="position-absolute"
          style={{
            width: "15px",
            height: "15px",
            top: "66px",
            left: "850px",
            backgroundColor: "#f7dba7",
            borderRadius: "50%",
            transform: "rotate(20.79deg)",
          }}
        />
        <div
          className="position-absolute"
          style={{
            width: "27px",
            height: "27px",
            top: "120px",
            left: "823px",
            backgroundColor: "#f7dba7",
            borderRadius: "9px",
            transform: "rotate(-22.85deg)",
          }}
        />
        <div
          className="position-absolute"
          style={{
            width: "21px",
            height: "21px",
            top: "129px",
            left: "822px",
            backgroundColor: "#002a48",
            borderRadius: "6px",
            transform: "rotate(-43.01deg)",
          }}
        />
        <div
          className="position-absolute"
          style={{
            width: "635px",
            height: "635px",
            top: "-592px",
            left: "-230px",
            backgroundColor: "#F7Dba7",
            borderRadius: "99px",
            transform: "rotate(25.23deg)",
          }}
        />
        <NavSection />

        <img
          className="position-absolute"
          src="/women_and_dog.svg"
          alt="Good humored woman holding a dog"
          style={{
            width: "910px",
            height: "611px",
            top: "84px",
            right: "-138px",
          }}
        />

        <div
          className="position-absolute"
          style={{ top: window.innerWidth < 576 ? "90px" : "180px", left: window.innerWidth < 576  ? "20%" :  "175px", maxWidth: "500px" }}
        >
          <h1 className="fw-bold text-primary" style={{ fontSize: "3.5rem", lineHeight: "68px" }}>
            One More Friend
          </h1>
          <h2 className="fw-bold text-primary" style={{ fontSize: "2.8rem", lineHeight: "60px" }}>
            Thousands More Fun!
          </h2>
          <p className="mt-3 text-secondary">
            Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!
          </p>

          <div className="d-flex gap-3 mt-4">
            <button
              className="btn text-white"
              style={{
                backgroundColor: "#003459",
                borderRadius: "57px",
                padding: "10px 28px",
              }}
            >
              Explore Now
            </button>
            <button
              className="btn btn-outline-primary d-flex align-items-center gap-2"
              style={{
                borderRadius: "57px",
                padding: "10px 28px",
                borderColor: "#003459",
                color: "#003459",
              }}
            >
              View Intro
              <img src="/media---play-circle.svg" alt="Play" width="24" height="24" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

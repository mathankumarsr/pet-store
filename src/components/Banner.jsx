import React from "react";

export const Banner = ({ from }) => {
  return (
    <div className="w-100 d-flex justify-content-center p-3 p-lg-5">
      <img src={from === "banner2" ? "/Banner2.svg" : "/banner.svg"} alt="banner" style={{ width: '100%' }} />
    </div>
  );
};

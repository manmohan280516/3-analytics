import React from "react";
import "../assets/css/loader.css";

const Loader = () => {
  return (
    <>
      <div className="loader-overlay">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  );
};

export default Loader;

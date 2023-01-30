import React from "react";

const ErrorPage404 = () => {
  return (
    <>
      <section className="main-content">
        <div className="container-fluid">
          <div className="row mt-3">
            <div className="col-md-12 d-flex align-items-center justify-content-center flex-column">
              <h1 className="text-muted">ERROR 404</h1>
              <h5>The page you are looking for might have been removed.</h5>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ErrorPage404;

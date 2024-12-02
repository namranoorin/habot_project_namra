import React from 'react';

const BuyerSection = () => (
  <div className="buyer-section container py-5">
    <div className="row align-items-center">
      {/* Left Section */}
      <div className="col-md-6 text-center text-md-start mb-4 mb-md-0">
        <h3 className="fw-bold mb-4">
          Ready to dive into <span className="text-primary">HABOT?</span>
        </h3>
        <p className="mb-4">
          Signing up with HABOT opens the door to a world of new opportunities
          and potential for business growth. Gain access to a vibrant community
          of like-minded individuals, unlock valuable resources, and take the
          first step towards realizing your entrepreneurial dreams.
        </p>
        <button className="btn btn-success px-4 py-2 font-weight-bold">
      <strong>Sign up Today !</strong> <span className="ms-2">→</span>
    </button>
      </div>

      {/* Right Section */}
      <div className="col-md-6">
        <div className="row ms-4">
          {/* First Row */}
          <div className="col-6 col-lg-4 mb-3 ms-4">
            <button className="btn btn-outline-warning w-100">Abu Dhabi</button>
          </div>
          <div className="col-6 col-lg-4 mb-3 ms-4">
            <button className="btn btn-outline-warning w-100">Dubai</button>
          </div>
          <div className="col-6 col-lg-4 mb-3 ms-4">
            <button className="btn btn-outline-warning w-100">Sharjah & Ajman</button>
          </div>

          {/* Second Row */}
          <div className="col-6 col-lg-4 mb-3 ms-4">
            <button className="btn btn-outline-warning w-100">Fujairah</button>
          </div>
          <div className="col-6 col-lg-4 mb-3 ms-4">
            <button className="btn btn-outline-warning w-100 ">Ras Al Khaimah</button>
          </div>
          <div className="col-6 col-lg-4 mb-3 ms-4">
            <button className="btn btn-outline-warning w-100">Umm Al Quwain</button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default BuyerSection;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/search.css'


const SearchBar = () => (
  <div className="search-bar-container text-center py-5" style={{backgroundSize: 'cover' }}>
    <div className="container">
      <h2 className="text-white mb-3 font">Are You a Supplier?</h2>
      <p className="text-white mb-4 font-2">Explore Matching Opportunities</p>
      <div className="row justify-content-center">
        {/* First Input Field */}
        <div className="col-12 col-md-4 mb-2 mb-md-0">
          <div className="input-group">
            <span className="input-group-text bg-white border-right-0">
              <i className="bi bi-briefcase-fill text-warning"></i>
            </span>
            <input
              type="text"
              placeholder="Search your required service here"
              className="form-control border-left-0"
            />
          </div>
        </div>
        {/* Input for location */}
        <div className="col-12 col-md-4 mb-2 mb-md-0">
          <div className="input-group">
            <span className="input-group-text bg-white border-right-0">
              <i className="bi bi-geo-alt-fill text-warning"></i>
            </span>
            <input
              type="text"
              placeholder="Search your desired location here"
              className="form-control border-left-0"
            />
          </div>
        </div>
        {/* Search Button */}
        <div className="col-12 col-md-auto">
          <button className="btn btn-success px-4">Search</button>
        </div>
      </div>

      {/* Buyer CTA */}
      <p className="text-white mt-4">
        <strong>Are you a buyer?</strong> <a href="#buyer" className="text-primary">Click here if you are looking to post a requirement</a>
      </p>
    </div>
  </div>
);

export default SearchBar;

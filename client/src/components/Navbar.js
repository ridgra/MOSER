import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <nav className="navbar navbar-light navbar-expand-md">
      <div className="container-fluid">
        <div className="container">
          <Link
            className="navbar-brand text-white-50 text-menu"
            data-bs-hover-animate="swing"
            to={'/'}
          >
            <i className="fas fa-film"></i>&nbsp; M O S E R
          </Link>
          <ul className="nav navbar-nav">
            <li className="nav-item" role="presentation">
              <Link
                className="nav-link active text-white-50 text-menu"
                data-bs-hover-animate="swing"
                to={'/movies'}
              >
                Movies
              </Link>
            </li>
            <li className="nav-item" role="presentation">
              <Link
                className="nav-link active text-white-50 text-menu"
                data-bs-hover-animate="swing"
                to={'/series'}
              >
                TV Series
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

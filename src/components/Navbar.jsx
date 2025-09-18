import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <NavLink className="navbar-brand fw-bold" to="/gym">GYM<span className="text-danger">PRO</span></NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample" aria-controls="navbarsExample" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarsExample">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item"><NavLink end className="nav-link nav-link-custom" to="/gym">Home</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link nav-link-custom" to="/gym/about">About</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link nav-link-custom" to="/gym/services">Services</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link nav-link-custom" to="/gym/gallery">Gallery</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link btn btn-sm btn-danger ms-lg-2 text-white" to="/gym/contact">Join Now</NavLink></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;



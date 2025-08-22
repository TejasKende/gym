function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-auto">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
        <div>
          <div className="fw-bold">GYMPRO</div>
          <small className="text-secondary">© {new Date().getFullYear()} All rights reserved.</small>
        </div>
        <div className="d-flex gap-3 small">
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/gallery">Gallery</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;



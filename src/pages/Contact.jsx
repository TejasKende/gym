function Contact() {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row g-4">
          <div className="col-12 col-lg-6">
            <h2 className="fw-bold mb-3">Contact Us</h2>
            <form className="row g-3">
              <div className="col-md-6">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" placeholder="Your name" />
              </div>
              <div className="col-md-6">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" placeholder="you@example.com" />
              </div>
              <div className="col-12">
                <label htmlFor="phone" className="form-label">Phone</label>
                <input type="tel" className="form-control" id="phone" placeholder="+1 (555) 123-4567" />
              </div>
              <div className="col-12">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-control" id="message" rows="4" placeholder="How can we help?"></textarea>
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-cta btn-danger py-2 px-3 mt-1">Send Message</button>
              </div>
            </form>
          </div>
          <div className="col-12 col-lg-6">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Get in touch</h5>
                <p className="card-text text-secondary mb-1">123 Fitness Ave, Wellness City</p>
                <p className="card-text text-secondary mb-1">Phone: (555) 123-4567</p>
                <p className="card-text text-secondary">Email: info@gympro.com</p>
                <div className="ratio ratio-16x9 mt-3">
                  <iframe
                    title="Gym Location"
                    src="https://www.google.com/maps?q=New+York&output=embed"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;



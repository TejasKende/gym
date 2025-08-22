function About() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <h2 className="fw-bold mb-3">About Us</h2>
            <p className="text-secondary">Founded in 2015, our mission is to empower individuals to live healthier, stronger lives. We value discipline, community, and continuous improvement.</p>
            <div className="row g-4 mt-1">
              <div className="col-12 col-md-4">
                <div className="card h-100 text-center py-4">
                  <div className="mb-3" style={{ fontSize: '3rem' }}>👨‍🏫</div>
                  <div className="card-body">
                    <h5 className="card-title">Expert Trainers</h5>
                    <p className="card-text text-secondary">Certified professionals who personalize your training for sustainable progress. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="card h-100 text-center py-4">
                  <div className="mb-3" style={{ fontSize: '3rem' }}>📋</div>
                  <div className="card-body">
                    <h5 className="card-title">Fitness Programs</h5>
                    <p className="card-text text-secondary">Goal-focused plans for fat loss, muscle gain, and conditioning. Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="card h-100 text-center py-4">
                  <div className="mb-3" style={{ fontSize: '3rem' }}>🤝</div>
                  <div className="card-body">
                    <h5 className="card-title">Community Driven</h5>
                    <p className="card-text text-secondary">Inclusive environment that keeps you accountable. Aenean lacinia bibendum nulla sed consectetur. Curabitur blandit tempus porttitor.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;



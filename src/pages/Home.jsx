import { Link } from 'react-router-dom';

function Home() {
  const heroStyle = {
    backgroundImage:
      "url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop')",
  };

  const highlights = [
    {
      title: 'Certified Trainers',
      icon: '💪',
      desc:
        'Our team brings years of experience and proven methods. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      title: 'Modern Equipment',
      icon: '🏋️',
      desc:
        'Train with high-quality machines and free weights. Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
    },
    {
      title: 'Flexible Timings',
      icon: '⏰',
      desc:
        'Open early and close late to suit your schedule. Aenean lacinia bibendum nulla sed consectetur.',
    },
  ];

  return (
    <>
      <section className="hero-section" style={heroStyle}>
        <div className="hero-overlay"></div>
        <div className="container hero-content py-5">
          <div className="col-12 col-lg-8">
            <h1 className="display-5 fw-bold">Transform Your Body, Transform Your Life</h1>
            <p className="lead mt-3">Join a community that elevates your fitness journey.</p>
            <Link to="/contact" className="btn btn-danger btn-lg mt-2">Join Now</Link>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-4">
            {highlights.map((h) => (
              <div key={h.title} className="col-12 col-md-4">
                <div className="card h-100 shadow-sm highlight-card text-center">
                  <div className="card-body">
                    <div className="mb-3" style={{ fontSize: '3rem' }}>{h.icon}</div>
                    <h5 className="card-title">{h.title}</h5>
                    <p className="card-text text-secondary">{h.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;



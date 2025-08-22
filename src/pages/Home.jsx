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

  const whyChooseUs = [
    {
      icon: '🏆',
      title: '5+ Years Experience',
      desc: 'Proven track record of helping thousands achieve their fitness goals.'
    },
    {
      icon: '👥',
      title: '500+ Happy Members',
      desc: 'Join our growing community of fitness enthusiasts and achievers.'
    },
    {
      icon: '⚡',
      title: '24/7 Access',
      desc: 'Work out on your schedule with round-the-clock gym access.'
    },
    {
      icon: '🎯',
      title: '100% Results',
      desc: 'Personalized programs designed to guarantee your success.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Fitness Enthusiast',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150',
      text: 'Amazing gym with top-notch equipment and fantastic trainers. I\'ve seen incredible results in just 3 months!',
      rating: 5
    },
    {
      name: 'Mike Chen',
      role: 'Professional Athlete',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      text: 'The best gym in the city! Professional environment and expert guidance helped me reach my peak performance.',
      rating: 5
    },
    {
      name: 'Emma Williams',
      role: 'Working Professional',
      image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=150',
      text: 'Flexible timing and amazing community. Perfect for busy professionals who want to stay fit and healthy.',
      rating: 5
    }
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

      {/* Why Choose Us Section */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold display-6 mb-3">Why Choose GYMPRO?</h2>
            <p className="lead text-secondary">We're committed to helping you achieve your fitness goals</p>
            <hr className="w-25 mx-auto border-danger border-3" />
          </div>
          <div className="row g-4">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="col-12 col-md-6 col-lg-3">
                <div className="text-center stats-card p-4">
                  <div className="stats-icon mb-3" style={{ fontSize: '3.5rem' }}>{item.icon}</div>
                  <h4 className="fw-bold text-danger mb-2">{item.title}</h4>
                  <p className="text-secondary mb-0">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold display-6 mb-3">What Our Members Say</h2>
            <p className="lead text-secondary">Real stories from our amazing community</p>
            <hr className="w-25 mx-auto border-danger border-3" />
          </div>
          <div className="row g-4">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="col-12 col-lg-4">
                <div className="card h-100 border-0 shadow-sm testimonial-card">
                  <div className="card-body p-4">
                    <div className="mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-warning">⭐</span>
                      ))}
                    </div>
                    <p className="card-text text-secondary mb-4 fst-italic">"{testimonial.text}"</p>
                    <div className="d-flex align-items-center">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="rounded-circle me-3"
                        style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                      />
                      <div>
                        <h6 className="fw-bold mb-0">{testimonial.name}</h6>
                        <small className="text-muted">{testimonial.role}</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-5 bg-danger text-white">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h2 className="fw-bold display-6 mb-3">Ready to Transform Your Life?</h2>
              <p className="lead mb-4">Join thousands of satisfied members and start your fitness journey today!</p>
              <div className="d-flex gap-3 justify-content-center flex-wrap">
                <Link to="/contact" className="btn btn-light btn-lg px-5">Start Free Trial</Link>
                <Link to="/services" className="btn btn-outline-light btn-lg px-5">View Programs</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;



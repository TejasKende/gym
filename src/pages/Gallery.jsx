import { Link } from "react-router-dom";

function Gallery() {
  const galleryItems = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Modern Gym Equipment',
      category: 'Equipment'
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/703012/pexels-photo-703012.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Weight Training Area',
      category: 'Strength Training'
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Cardio Zone',
      category: 'Cardio'
    },
    {
      id: 4,
      image: 'https://images.pexels.com/photos/1552103/pexels-photo-1552103.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Personal Training',
      category: 'Training'
    },
    {
      id: 5,
      image: 'https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Group Classes',
      category: 'Classes'
    },
    {
      id: 6,
      image: 'https://images.pexels.com/photos/1552108/pexels-photo-1552108.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Fitness Community',
      category: 'Community'
    }
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-5">
          <h2 className="fw-bold display-6 mb-3">Our Gym Gallery</h2>
          <p className="lead text-secondary">Explore our state-of-the-art facilities and vibrant fitness community</p>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <hr className="w-25 mx-auto border-danger border-3" />
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="row g-4">
          {galleryItems.map((item) => (
            <div key={item.id} className="col-12 col-md-6 col-lg-4">
              <div className="gallery-card card border-0 shadow-sm h-100 overflow-hidden">
                <div className="position-relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="card-img-top gallery-image"
                    style={{ height: '250px', objectFit: 'cover', transition: 'transform 0.3s ease' }}
                  />
                  <div className="gallery-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center opacity-0" 
                       style={{ background: 'rgba(220, 53, 69, 0.8)', transition: 'opacity 0.3s ease' }}>
                    <div className="text-center text-white">
                      <h5 className="fw-bold">{item.title}</h5>
                      <span className="badge bg-white text-danger">{item.category}</span>
                    </div>
                  </div>
                </div>
                <div className="card-body text-center">
                  <h6 className="card-title fw-bold">{item.title}</h6>
                  <small className="text-muted">{item.category}</small>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-5">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="bg-white rounded-3 shadow-sm p-4">
                <h4 className="fw-bold mb-3">Ready to Start Your Fitness Journey?</h4>
                <p className="text-secondary mb-4">Join our community and transform your life with our world-class facilities and expert trainers.</p>
                 <Link to="/gym/contact" className="btn btn-danger btn-lg px-5">Join Now</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
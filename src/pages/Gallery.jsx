function Gallery() {
  const images = [
    'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1517963628607-235ccdd5476b?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1517344884500-96ed77e350b3?q=80&w=2071&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1517638851339-4aa32003c11a?q=80&w=2069&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1517832606299-7ae9b720a186?q=80&w=2071&auto=format&fit=crop',
  ];

  return (
    <section className="py-5">
      <div className="container">
        <h2 className="fw-bold mb-4">Gallery</h2>
        <div className="row g-3">
          {images.map((src, idx) => (
            <div key={idx} className="col-12 col-sm-6 col-md-4">
              <img src={src} alt={`Gym gallery ${idx + 1}`} className="gallery-img" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;



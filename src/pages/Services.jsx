function Services() {
  const services = [
    {
      title: 'Personal Training',
      icon: '👨‍🏫',
      desc:
        'One-on-one coaching tailored to your goals. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.',
    },
    {
      title: 'Strength & Conditioning',
      icon: '🏋️',
      desc:
        'Build strength, power, and endurance with structured programs. Cras mattis consectetur purus sit amet fermentum.',
    },
    {
      title: 'Cardio & CrossFit',
      icon: '❤️',
      desc:
        'High-intensity workouts for stamina and fat loss. Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida.',
    },
    {
      title: 'Yoga & Zumba Classes',
      icon: '🧘‍♀️',
      desc:
        'Improve mobility and have fun while you sweat. Nulla vitae elit libero, a pharetra augue. Vestibulum id ligula porta felis euismod semper.',
    },
    {
      title: 'Nutrition Guidance',
      icon: '🥗',
      desc:
        'Diet plans and habit coaching for long-term results. Sed posuere consectetur est at lobortis.',
    },
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="fw-bold mb-4">Our Services</h2>
        <div className="row g-4">
          {services.map((s) => (
            <div key={s.title} className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm text-center py-4">
                <div className="mb-3" style={{ fontSize: '3rem' }}>{s.icon}</div>
                <div className="card-body pt-0">
                  <h5 className="card-title">{s.title}</h5>
                  <p className="card-text text-secondary">{s.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;



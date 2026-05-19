import "./styles/Testimonials.css";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Jenkins",
      role: "Product Director, EduTech",
      text: "The AI Study Bot completely transformed our student engagement! The integration was clean, and the responsiveness exceeded our expectations.",
      stars: 5,
      avatar: "SJ"
    },
    {
      name: "David Chen",
      role: "CTO, SaaSFlow",
      text: "Exceptional engineering and eye for detail. The task management Kanban app is incredibly smooth, and the socket communication runs flawlessly.",
      stars: 5,
      avatar: "DC"
    },
    {
      name: "Elena Rostova",
      role: "Lead Designer, Skyward",
      text: "A rare developer who understands both pixel perfection and performant backend code. The Weather Dashboard was executed beautifully.",
      stars: 5,
      avatar: "ER"
    }
  ];

  return (
    <div className="testimonials-section section-container" id="testimonials">
      <div className="testimonials-container">
        <h2>
          Client <span>Reviews</span>
        </h2>
        <p className="testimonials-subtitle">Don't just take my word for it. Here is what industry professionals say.</p>
        
        <div className="testimonials-grid">
          {testimonials.map((t, idx) => (
            <div className="testimonial-card" key={idx} data-cursor="disable">
              <div className="testimonial-header">
                <div className="testimonial-avatar">{t.avatar}</div>
                <div>
                  <h4>{t.name}</h4>
                  <p>{t.role}</p>
                </div>
              </div>
              <div className="testimonial-stars">
                {"★".repeat(t.stars)}
              </div>
              <p className="testimonial-text">"{t.text}"</p>
              <div className="testimonial-glow"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

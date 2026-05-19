import "./styles/Process.css";

const Process = () => {
  const steps = [
    {
      num: "01",
      title: "Discovery",
      desc: "Understanding project goals, target audience, and functional requirements to establish a solid roadmap."
    },
    {
      num: "02",
      title: "Planning",
      desc: "Architecting the technical stack, planning data flows, designing wireframes, and setting up milestones."
    },
    {
      num: "03",
      title: "Development",
      desc: "Writing high-quality, scalable, and responsive code while implementing premium interactive UI/UX components."
    },
    {
      num: "04",
      title: "Testing",
      desc: "Rigorous manual and automated testing, device responsiveness audits, and performance tuning."
    },
    {
      num: "05",
      title: "Deployment",
      desc: "Deploying the secure production build to lightning-fast CDN servers and setting up analytic tracking."
    }
  ];

  return (
    <div className="process-section section-container" id="process">
      <div className="process-container">
        <h2>
          How I <span>Work</span>
        </h2>
        <p className="process-subtitle">A systematic, production-grade approach to building premium web applications.</p>
        
        <div className="process-grid">
          {steps.map((step, idx) => (
            <div className="process-card" key={idx} data-cursor="disable">
              <div className="process-num">{step.num}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
              <div className="process-card-glow"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Process;

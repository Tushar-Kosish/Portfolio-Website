import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>SIH Winner</h4>
                <h5>Smart India Hackathon</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Lead Full-Stack Architect & Developer for SmartEvacai — an AI-driven disaster evacuation monitoring, GIS route planning, and scenario simulation platform built for high-stakes emergency management.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Open Source Contributor</h4>
                <h5>GSoC & GSSoC 2026</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Contributed to high-impact open-source repositories. Resolved core codebase inefficiencies, developed modular REST APIs, optimized database schemas, and had multiple PRs merged across automation scripts and web platforms.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech AI & ML</h4>
                <h5>Chandigarh Engineering College</h5>
              </div>
              <h3>2029</h3>
            </div>
            <p>
              Bachelor of Technology (B.Tech) – Artificial Intelligence & Machine Learning. Specializing in autonomous AI agent development, full-stack systems, and cloud infrastructure.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>100-Day DSA Challenge</h4>
                <h5>LeetCode</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Actively solving complex Data Structures & Algorithms challenges on LeetCode in C++, Python, and Java to master space-time algorithmic optimization.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;

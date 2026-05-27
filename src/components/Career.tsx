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
                <h4>B.Tech AI & ML</h4>
                <h5>Chandigarh Engineering College</h5>
              </div>
              <h3>2029</h3>
            </div>
            <p>
              Bachelor of Technology (B.Tech) – Artificial Intelligence & Machine Learning.
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
              Contributed to high-impact open-source repositories. Successfully resolved codebase inefficiencies, developed modular backend APIs, optimized database schemas, and had multiple Pull Requests (PRs) merged focusing on robust automation scripts and web application stability.
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
              Actively completing a rigorous 100-day Data Structures and Algorithms challenge on LeetCode to sharpen algorithmic efficiency.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;

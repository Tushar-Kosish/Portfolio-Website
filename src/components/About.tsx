import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <div className="about-image-container" data-cursor="disable">
          <img src="./images/tushar.jpg" alt="Tushar Kosish" className="about-image" />
        </div>
        <h3 className="title">About Me</h3>
        <p className="para">
          Driven B.Tech Artificial Intelligence & Machine Learning student and Smart India Hackathon (SIH) Winner specializing in full-stack architecture, autonomous AI agents, and open-source engineering. Proficient in building scalable MERN stack web applications, high-performance database engines, and 3D WebGL interfaces. Recognized open-source contributor in GSoC & GSSoC 2026 with multiple merged Pull Requests.
        </p>
        <div className="github-activity-section">
          <h4 className="github-snake-title">GitHub Contributions & Activity</h4>
          <div className="github-graphs-wrapper">
            <div className="github-snake-container">
              <picture>
                <source
                  media="(prefers-color-scheme: dark)"
                  srcSet="https://raw.githubusercontent.com/Tushar-Kosish/Tushar-Kosish/output/github-contribution-grid-snake-dark.svg"
                />
                <source
                  media="(prefers-color-scheme: light)"
                  srcSet="https://raw.githubusercontent.com/Tushar-Kosish/Tushar-Kosish/output/github-contribution-grid-snake.svg"
                />
                <img
                  alt="GitHub Contribution Snake"
                  src="https://raw.githubusercontent.com/Tushar-Kosish/Tushar-Kosish/output/github-contribution-grid-snake-dark.svg"
                  className="github-snake-img"
                  loading="lazy"
                />
              </picture>
            </div>
            <div className="github-graph-container">
              <img
                src="https://github-readme-activity-graph-nu.vercel.app/graph?username=Tushar-Kosish&bg_color=0c090f&color=c2a4ff&line=06b6d4&point=c2a4ff&area=true&hide_border=true"
                alt="Tushar Kosish's Activity Graph"
                className="github-activity-img"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <a href="mailto:tusharkosish6@gmail.com" className="about-email" data-cursor="disable">
          tusharkosish6@gmail.com
        </a>
      </div>
    </div>
  );
};

export default About;

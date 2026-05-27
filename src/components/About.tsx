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
          Driven and detail-oriented B.Tech Artificial Intelligence & Machine Learning student specializing in full-stack backend architecture and open-source development. Proficient in building scalable web applications using the MERN Stack (MongoDB, Express.js, React.js, Node.js) and engineering robust automation logic with Python. Recognized open-source contributor in GSoC & GSSoC 2026 with multiple merged Pull Requests in core repositories. Actively mastering Data Structures & Algorithms (DSA) to build highly optimized software solutions.
        </p>
        <div className="github-snake-container">
          <h4 className="github-snake-title">GitHub Activity</h4>
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
        <a href="mailto:tusharkaushish2007@gmail.com" className="about-email" data-cursor="disable">
          tusharkaushish2007@gmail.com
        </a>
      </div>
    </div>
  );
};

export default About;

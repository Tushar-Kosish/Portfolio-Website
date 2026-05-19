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
          Driven and detail-oriented B.Tech Artificial Intelligence & Machine Learning student specializing in full-stack backend architecture and open-source development. Proficient in building scalable web applications using the MERN Stack (MongoDB, Express.js, React.js, Node.js) and engineering robust automation logic with Python. Recognized open-source contributor selected for GSSoC 2026. Actively mastering Data Structures & Algorithms (DSA) to build highly optimized software solutions.
        </p>
        <a href="mailto:tusharkaushish2007@gmail.com" className="about-email" data-cursor="disable">
          tusharkaushish2007@gmail.com
        </a>
      </div>
    </div>
  );
};

export default About;

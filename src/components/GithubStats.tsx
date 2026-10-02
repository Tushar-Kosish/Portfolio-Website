import { FaGithub } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";
import "./styles/GithubStats.css";

const GithubStats = () => {
  return (
    <div className="github-section section-container" id="github">
      <div className="github-container">
        <h2>
          GitHub <span>Contributions</span> & Impact
        </h2>
        <p className="github-subtitle">
          Real-time metrics, commit graphs, open-source activity, and contribution streak.
        </p>

        <div className="github-grid">
          {/* Contribution Snake */}
          <div className="github-card full-width">
            <div className="github-card-header">
              <h3>Contribution Snake Grid</h3>
              <span>Active GitHub Graph</span>
            </div>
            <div className="github-img-wrapper">
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
                  className="github-img"
                  loading="lazy"
                />
              </picture>
            </div>
          </div>

          {/* Activity Graph */}
          <div className="github-card full-width">
            <div className="github-card-header">
              <h3>Commit Activity Timeline</h3>
              <span>Annual Activity</span>
            </div>
            <div className="github-img-wrapper">
              <img
                src="https://github-readme-activity-graph-nu.vercel.app/graph?username=Tushar-Kosish&bg_color=0d1117&color=c2a4ff&line=06b6d4&point=c2a4ff&area=true&hide_border=true"
                alt="Tushar Kosish Activity Graph"
                className="github-img"
                loading="lazy"
              />
            </div>
          </div>

          {/* Streak Stats & Overview */}
          <div className="github-card half-width">
            <div className="github-card-header">
              <h3>Streak Statistics</h3>
              <span>Continuous Commits</span>
            </div>
            <div className="github-img-wrapper">
              <img
                src="https://streak-stats.demolab.com/?user=Tushar-Kosish&theme=dark&hide_border=true"
                alt="GitHub Streak Stats"
                className="github-img"
                loading="lazy"
              />
            </div>
          </div>

          {/* Top Languages */}
          <div className="github-card half-width">
            <div className="github-card-header">
              <h3>Most Used Languages</h3>
              <span>Language Analytics</span>
            </div>
            <div className="github-img-wrapper">
              <img
                src="https://github-readme-stats.shion.dev/api/top-langs/?username=Tushar-Kosish&theme=dark&hide_border=false&include_all_commits=true&count_private=true&layout=compact"
                alt="Top Languages Stats"
                className="github-img"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className="github-cta">
          <a
            href="https://github.com/Tushar-Kosish"
            target="_blank"
            rel="noreferrer"
            className="github-btn"
            data-cursor="disable"
          >
            <FaGithub className="github-btn-icon" />
            <span>Explore Full GitHub Profile</span>
            <MdArrowOutward />
          </a>
        </div>
      </div>
    </div>
  );
};

export default GithubStats;

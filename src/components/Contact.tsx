import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Website Building & Freelance</h4>
            <p className="contact-cta-desc">
              Looking for a custom website, interactive 3D WebGL application, or autonomous AI solution? Let's bring your vision to life.
            </p>
            <h4>Email</h4>
            <p>
              <a href="mailto:tusharkosish6@gmail.com" data-cursor="disable">
                tusharkosish6@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:+916283173524" data-cursor="disable">
                +91 62831 73524
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h4>Social & Community</h4>
            <a
              href="https://github.com/Tushar-Kosish"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/tushar-k-6983883a6"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="https://discord.gg/p5Y7MkNP"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Discord <MdArrowOutward />
            </a>
            <a
              href="https://x.com/Tusharkosish"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Twitter <MdArrowOutward />
            </a>
            <a
              href="https://www.instagram.com/tusharkausish?stkn=YXlrazVrMnBoeXVy"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Tushar Kosish</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

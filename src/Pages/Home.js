import "./Home.css";
import Typewriter from "typewriter-effect";
import resume from "./Resume.pdf";
import profile from "./profile.jpg";
import Navbar from "./Navbar";
import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import call from "./call.png";
import mail from "./mail.png";
import map from "./map.png";
import Background from "./Background";
function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainRef = useRef(null);
  const mainInView = useInView(mainRef, { once: true });
  const barRef = useRef(null);
  const barInView = useInView(barRef, { once: true });
  const contact = useRef(null);
  const contactInView = useInView(contact, { once: true });
  const profileRef = useRef(null);
  const profileInView = useInView(profileRef, { once: true });
  const projectRef = useRef(null);
  const projectInView = useInView(projectRef, { once: true });
  const [projectClicked, setProjectClicked] = useState([false, false]);
  const formRef = useRef(null);
  const formInView = useInView(formRef, { once: true });
  function handleClick(index) {
    projectClicked[index] = !projectClicked[index];
    setProjectClicked([...projectClicked]);
  }
  return (
    <div className="App">
      <Background />
      <header>
        <Navbar />
      </header>
      <div className="sideDiv" ref={mainRef}>
        <div
          className="middle"
          style={{
            transform: mainInView ? "none" : "translatey(-200px)",
            opacity: mainInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <p>Hi, I am</p>
          <div className="typewriter">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(800)
                  .typeString("Rahul Agarwal")

                  .start();
              }}
            />
          </div>
          <h2>Welcome to my portfolio website.</h2>
          <h2>Please feel free to check out my portfolio</h2>
          <h2>website that showcase my skills and resume below.</h2>
          <div className="belowMid">
            <a href={resume}>Resume</a>
          </div>
        </div>
      </div>
      <div id="about">
        <div className="maincontent">
          <div className="content" ref={ref}>
            <div
              className="aboutTitle"
              style={{
                transform: isInView ? "none" : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
            >
              <h1>About Me</h1>
            </div>

            <p>
              My name is Rahul Agarwal and I am a student at Thapar Institute of
              Engineering and Technology. I am passionate about front end
              designing and full stack development, and am always striving to
              improve and learn more. I am excited to share my portfolio with
              you and I hope that it showcases my abilities and the quality of
              my work. Please feel free to contact me if you have any questions
              or would like to work together on a project. Thank you for
              visiting!
            </p>
            <p>Some of my skills are listed below:</p>
            <ul>
              <li>
                HTML
                <span className="progress" ref={barRef}>
                  <span
                    className="progress-value"
                    id="one"
                    style={{
                      width: barInView ? "80% " : 0,
                      transition:
                        "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s",
                    }}
                  ></span>
                  80%
                </span>
              </li>
              <li>
                CSS
                <span className="progress">
                  <span
                    className="progress-value"
                    id="two"
                    style={{
                      width: barInView ? "80% " : 0,
                      transition:
                        "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s",
                    }}
                  ></span>
                  80%
                </span>
              </li>
              <li>
                JavaScript
                <span className="progress">
                  <span
                    className="progress-value"
                    id="three"
                    style={{
                      width: barInView ? "70% " : 0,
                      transition:
                        "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.8s",
                    }}
                  ></span>
                  70%
                </span>
              </li>
              <li>
                React
                <span className="progress">
                  <span
                    className="progress-value"
                    id="four"
                    style={{
                      width: barInView ? "60% " : 0,
                      transition:
                        "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.9s",
                    }}
                  ></span>
                  60%
                </span>
              </li>
              <li>
                Java
                <span className="progress">
                  <span
                    className="progress-value"
                    id="five"
                    style={{
                      width: barInView ? "80% " : 0,
                      transition:
                        "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
                    }}
                  ></span>
                  80%
                </span>
              </li>
            </ul>
          </div>

          <div
            ref={profileRef}
            className="side"
            style={{
              transform: profileInView ? "none" : "translateY(-200px)",
              opacity: profileInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            <img src={profile} className="profile" alt="profile" />
          </div>
        </div>
      </div>
      {/* ------------------- PROJECTS ------------------ */}

      <div className="projects" ref={projectRef} id="projects">
        <h1>Projects</h1>
        <div
          className="projectDiv"
          style={{
            transform: projectInView ? "none" : "translateX(-200px)",
            opacity: projectInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <div className="project project1">
            <div className="bgImage1"></div>
            <div
              className="projectContent"
              onClick={() => handleClick(0)}
              style={{ animation: projectClicked[0] ? "rotation 0.2s" : null }}
            >
              <div
                style={{ display: projectClicked[0] ? "none" : "block" }}
                className="projectMain"
              >
                <h1>WORDLE</h1>
                <p>
                  Wordle is a web-based word game created and developed by Welsh
                  software engineer Josh Wardle and owned and published by the
                  New York Times Company since 2022. Players have six attempts
                  to guess a five-letter word, with feedback given for each
                  guess in the form of colored tiles indicating when letters
                  match or occupy the correct position.
                </p>
              </div>
              <div
                style={{ display: projectClicked[0] ? "block" : "none" }}
                className="projectMain"
              >
                <h1>WORDLE</h1>
                <a href="https://whydecode.github.io/wordle" target="_blank">
                  VISIT
                </a>
              </div>
            </div>
          </div>
          <div className="project project2">
            <div className="bgImage2"></div>
            <div
              className="projectContent"
              onClick={() => handleClick(1)}
              style={{ animation: projectClicked[1] ? "rotation 0.2s" : null }}
            >
              <div
                style={{ display: projectClicked[1] ? "none" : "block" }}
                className="projectMain"
              >
                <h1>TESLA-Clone</h1>
                <p>
                  Tesla is an American multinational automotive, artificial
                  intelligence, and clean energy company headquartered in
                  Austin, Texas. Tesla designs and manufactures electric
                  vehicles (electric cars and trucks), battery energy storage
                  from home to grid-scale, solar panels and solar roof tiles,
                  and related products and services.
                </p>
              </div>
              <div
                style={{ display: projectClicked[1] ? "block" : "none" }}
                className="projectMain"
              >
                <h1>TESLA-Clone</h1>
                <a
                  href="https://whydecode.github.io/tesla-clone"
                  target="_blank"
                >
                  VISIT
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ------------------- CONTACTS ------------------ */}
      <div id="contact" className="contact">
        <div
          id="content"
          ref={contact}
          style={{
            transform: contactInView ? "none" : "translateX(-200px)",
            opacity: contactInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <h1>Get In Touch</h1>
          <br />
          <h2>Location</h2>
          <p>
            <img src={map} className="contact-logo" alt="call" />
            Bharatpur, Rajasthan
          </p>
          <h2> Contact Details</h2>
          <div className="mydetails">
            <a href="tel:+919711192865" className="contact-link">
              <img src={call} className="contact-logo" alt="call" />
              9711192865
            </a>
          </div>
          <div className="mydetails">
            <a
              href="mailto:rahulagarwal2205@gmail.com"
              className="contact-link"
            >
              <img src={mail} className="contact-logo" alt="call" />
              <span class="material-symbols-rounded"></span>
              rahulagarwal2205@gmail.com
            </a>
          </div>
        </div>
        <div
          className="formdiv"
          ref={formRef}
          style={{
            transform: formInView ? "none" : "translateX(200px)",
            opacity: formInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <form name="contact" method="post" onSubmit="submit">
            <h2>Contact</h2>
            <input type="hidden" name="form-name" value="contact" />
            <div>
              <input type="text" name="name" placeholder="Name" required />
            </div>
            <div>
              <input type="email" name="email" placeholder="Email" required />
            </div>
            <div>
              <input
                type="text"
                name="message"
                placeholder="Message"
                id="message"
                required
              />
            </div>
            <button type="submit" id="submitbutton">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Home;

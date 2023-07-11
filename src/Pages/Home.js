import { useEffect } from "react";
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
import htmlLogo from "./Images/html.png";
import cssLogo from "./Images/css.png";
import javaScriptLogo from "./Images/javascript.svg";
import reactLogo from "./Images/react-icon.png";
import javaLogo from "./Images/java.png";
import clipart from "./Images/clipart.png";
import hello from "./Images/hello.png";
import tesla from "./Images/tesla.png";
import wordle from "./Images/wordle.png";
import samsung from "./Images/samsung.png";
import mystore from "./Images/mystore.png";
import task from "./Images/task.png";
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
  const [isVisible, setIsVisible] = useState(false);

  const formRef = useRef(null);
  const formInView = useInView(formRef, { once: true });
  function handleClick(index) {
    projectClicked[index] = !projectClicked[index];
    setProjectClicked([...projectClicked]);
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const temp = scrollTop > 250;
      setIsVisible(temp);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="complete">
      <div className="App">
        <header>
          <Navbar />
        </header>

        <button
          className="back-to-top"
          onClick={scrollToTop}
          style={{ display: isVisible ? "block" : "none" }}
        >
          <div className="text">
            <span>Back</span>
            <span>to</span>
            <span>top</span>
          </div>
          <div className="clone">
            <span>Back</span>
            <span>to</span>
            <span>top</span>
          </div>
          <svg
            width="20px"
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </button>

        <div className="sideDiv" ref={mainRef}>
          <div
            className="middle"
            style={{
              transform: mainInView ? "none" : "translatey(-200px)",
              opacity: mainInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            <p>
              <img src={hello} alt="hello" className="hello" /> Hi, I am
            </p>
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
            <h2>
              Welcome to my portfolio website. Please feel free to check out my
              portfolio website that showcase my skills and resume below.
            </h2>
            <div className="belowMid">
              <a href={resume}>Resume</a>
            </div>
          </div>
          <div
            className="clipart"
            style={{
              transform: mainInView ? "none" : "translatey(-200px)",
              opacity: mainInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            <img src={clipart} alt="clipart" />
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
                My name is Rahul Agarwal and I currently pursuing bachelors in
                Computer Engineering at Thapar Institute of Engineering and
                Technology. I am passionate about front end designing and full
                stack development, and am always striving to improve and learn
                more.
              </p>
              <p>
                I am excited to share my portfolio with you and I hope that it
                showcases my abilities and the quality of my work. Please feel
                free to contact me if you have any questions or would like to
                work together on a project. Thank you for visiting!
              </p>
              <p>Some of my skills are listed below:</p>
              <ul className="skillList" ref={barRef}>
                <li>
                  <div className="item1">
                    <img src={htmlLogo} alt="HTML" />
                    <p>
                      The HyperText Markup Language or HTML is the standard
                      markup language for documents designed to be displayed in
                      a web browser.
                    </p>
                  </div>
                  <span className="progress">
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
                  <div className="item1">
                    <img src={cssLogo} alt="CSS" />
                    <p>
                      Cascading Style Sheets (CSS) is a style sheet language
                      used for describing the presentation of a document written
                      in a markup language such as HTML or XML
                    </p>
                  </div>
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
                  <div className="item1">
                    <img src={javaScriptLogo} alt="JavaScript" />
                    <p>
                      JavaScript, often abbreviated as JS, is a programming
                      language that is one of the core technologies of the World
                      Wide Web, alongside HTML and CSS.
                    </p>
                  </div>
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
                  <div className="item1">
                    <img src={reactLogo} alt="React" />
                    <p>
                      React (also known as React.js or ReactJS) is a free and
                      open-source front-end JavaScript library for building user
                      interfaces based on components.
                    </p>
                  </div>
                  <span className="progress">
                    <span
                      className="progress-value"
                      id="four"
                      style={{
                        width: barInView ? "70% " : 0,
                        transition:
                          "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.9s",
                      }}
                    ></span>
                    70%
                  </span>
                </li>
                <li>
                  <div className="item1">
                    <img src={javaLogo} alt="Java" />
                    <p>
                      Java is a high-level, class-based, object-oriented
                      programming language that is designed to have as few
                      implementation dependencies as possible.
                    </p>
                  </div>
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

        <div className="projects" id="projects">
          <h1>Projects</h1>
          <div className="projectContent" ref={projectRef}>
            <div
              className="projectCard"
              style={{
                transform: projectInView ? "none" : "translateX(-200px)",
                opacity: projectInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
              }}
            >
              <div className="projectImage">
                <img src={mystore} alt="Ecommerce" />
              </div>
              <div className="projectInfo">
                <h2>Ecommerce Store</h2>
                <p>MERN Stack Development</p>
                <p>React, Node, Express, MongoDB</p>
                <div className="projectButtons">
                  <a
                    href="https://mern-store-ml17.onrender.com/"
                    target="_blank"
                  >
                    Link
                  </a>
                  <a
                    href="https://github.com/whydecode/Ecommerce"
                    target="_blank"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
            <div
              className="projectCard"
              style={{
                transform: projectInView ? "none" : "translateX(-200px)",
                opacity: projectInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
            >
              <div className="projectImage">
                <img src={task} alt="Ecommerce" />
              </div>
              <div className="projectInfo">
                <h2>Task Management System</h2>
                <p>MERN Stack Development</p>
                <p>React, Node, Express, MongoDB</p>
                <div className="projectButtons">
                  <a
                    href="https://task-management-zkh0.onrender.com/"
                    target="_blank"
                  >
                    Link
                  </a>
                  <a
                    href="https://github.com/whydecode/task-management"
                    target="_blank"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
            <div
              className="projectCard"
              style={{
                transform: projectInView ? "none" : "translateX(-200px)",
                opacity: projectInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s",
              }}
            >
              <div className="projectImage">
                <img src={samsung} alt="" />
              </div>
              <div className="projectInfo">
                <h2>Samsung Clone</h2>
                <p>Web Development, Web Design</p>
                <p>React, Sass</p>
                <div className="projectButtons">
                  <a
                    href="https://whydecode-samsung.netlify.app/"
                    target="_blank"
                  >
                    Link
                  </a>
                  <a
                    href="https://github.com/whydecode/samsung-clone"
                    target="_blank"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
            <div
              className="projectCard"
              style={{
                transform: projectInView ? "none" : "translateX(-200px)",
                opacity: projectInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.9s",
              }}
            >
              <div className="projectImage">
                <img src={tesla} alt="" />
              </div>
              <div className="projectInfo">
                <h2>Tesla Clone</h2>
                <p>Web Development, Web Design</p>
                <p>React</p>
                <div className="projectButtons">
                  <a
                    href="https://whydecode.github.io/tesla-clone/"
                    target="_blank"
                  >
                    Link
                  </a>
                  <a
                    href="https://github.com/whydecode/tesla-clone"
                    target="_blank"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
            <div
              className="projectCard"
              style={{
                transform: projectInView ? "none" : "translateX(-200px)",
                opacity: projectInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.1s",
              }}
            >
              <div className="projectImage">
                <img src={wordle} alt="" />
              </div>
              <div className="projectInfo">
                <h2>Wordle</h2>
                <p>Web Development</p>
                <p>React</p>
                <div className="projectButtons">
                  <a href="https://whydecode.github.io/wordle/" target="_blank">
                    Link
                  </a>
                  <a href="https://github.com/whydecode/wordle" target="_blank">
                    Code
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
                <span className="material-symbols-rounded"></span>
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
    </div>
  );
}

export default Home;

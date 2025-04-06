import Navbar from '../../Components/Navbar/Navbar';
import Resume from '../../../public/pdfs/Curriculum Vitae_Paraoan.pdf';
import { BackgroundBeams } from '../../Components/UI/backgroundBeams';
import { SiHtml5, SiJavascript, SiSpringboot, SiPostgresql, SiMysql, SiPostman } from "react-icons/si";
import { FaCss3, FaJava, FaReact, FaGitAlt, FaGithub } from "react-icons/fa";
import './About.css';


function About() {

    return (
        <div className="About-Screen">
            <BackgroundBeams />
            <Navbar />
            <div className="About-Container">
                <section className='About-Me-Container'>
                    <div className='About-Me-Content'>
                        <div className='About-Me-Content-1'>
                            <h2>WHO AM I?</h2>
                            <h1>Hi, I am Zyril</h1>
                            <p>
                                Innovative IT professional with a strong foundation in Backend Development and Database Management.
                                A graduate of the University of Saint Louis Tuguegarao, I thrive on solving problems and
                                delivering impactful digital solutions. Skilled in Analyzing and creating solutions, I bring ideas to life
                                with precision and creativity.
                            </p>
                            <a href={Resume} target="_blank" rel="noreferrer">
                                <button className="About-button">
                                    My Resume
                                    <svg fill="currentColor" viewBox="0 0 24 24" className="aboutMeicon">
                                        <path
                                            clipRule="evenodd"
                                            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                                            fillRule="evenodd"
                                        ></path>
                                    </svg>
                                </button>
                            </a>
                        </div>

                        <div className='About-Me-Content-2'>
                            <div className="aboutMe-container">
                                {/* Top Left  Github */}
                                <a
                                    href="https://github.com/Zy-IT?tab=overview&from=2025-04-01&to=2025-04-06"
                                    target="_blank"
                                    rel="noreferrer"
                                    data-text="Github"
                                    style={{ '--r': -15, '--order': 0, '--row': 0, '--col': 0 }}
                                    className="glass"
                                >
                                    <svg viewBox="0 0 496 512" height="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                                    </svg>
                                </a>

                                {/* Top Middle LinkedIn */}
                                <a
                                    href="https://www.linkedin.com/in/zyril-paraoan-24bb8932b/  "
                                    target="_blank"
                                    rel="noreferrer"
                                    data-text="LinkedIn"
                                    style={{ '--r': 5, '--order': 1, '--row': 0, '--col': 1 }}
                                    className="glass"
                                >
                                    <svg viewBox="0 0 448 512" height="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                                    </svg>
                                </a>

                                {/* Bottom Left Email */}
                                <a
                                    href="https://mail.google.com/mail/?view=cm&fs=1&to=zyrilparaoann@gmail.com&su=Subject%20Here&body=Hello%20there!%0A%0AWrite%20your%20message%20here."
                                    target="_blank"
                                    rel="noreferrer"
                                    data-text="Email"
                                    style={{ '--r': 25, '--order': 2, '--row': 1, '--col': 0 }}
                                    className="glass"
                                >
                                    <svg viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                                    </svg>
                                </a>


                                {/* Bottom Middle Facebook */}
                                <a
                                    href="https://www.facebook.com/zyril.paraoan.3/"
                                    target="_blank"
                                    rel="noreferrer"
                                    data-text="Facebook"
                                    style={{ '--r': 45, '--order': 3, '--row': 1, '--col': 1 }}
                                    className="glass"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 320 512"
                                        height="1em"
                                        fill="#1877F2"
                                    >
                                        <path d="M279.14 288l14.22-92.66h-88.91V127.41c0-25.35 12.42-50.06 52.24-50.06H293V6.26S259.5 0 225.36 0c-73.44 0-121.15 44.38-121.15 124.72v70.62H22.89V288h81.32v224h100.17V288z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    <section className='About-Me-Skills-section'>
                        <div className='About-Me-Skills-Title'>
                            <h1>Tech</h1>
                            <h1 className='Aboute-Me-Title-Sub'>Stacks</h1>
                        </div>
                        <div className="About-Me-Skills">

                            <div className="skills-marquee-container">
                                <div className="skills-marquee">
                                    <div className="skills-track">
                                        {/* First set of items */}
                                        <div className="skill-card">
                                            <div className="skill-icon html-icon">
                                                <i className="fab fa-html5"><SiHtml5 /></i>
                                            </div>
                                            <div className="skill-name">HTML</div>
                                        </div>
                                        <div className="skill-card">
                                            <div className="skill-icon css-icon">
                                                <i className="fab fa-css3-alt"><FaCss3 /></i>
                                            </div>
                                            <div className="skill-name">CSS</div>
                                        </div>
                                        <div className="skill-card">
                                            <div className="skill-icon js-icon">
                                                <i className="fab fa-js"><SiJavascript /></i>
                                            </div>
                                            <div className="skill-name">JavaScript</div>
                                        </div>
                                        <div className="skill-card">
                                            <div className="skill-icon java-icon">
                                                <i className="fab fa-java"><FaJava /></i>
                                            </div>
                                            <div className="skill-name">Java</div>
                                        </div>
                                        <div className="skill-card">
                                            <div className="skill-icon springboot-icon">
                                                <i className="fab fa-java"><SiSpringboot /></i>
                                            </div>
                                            <div className="skill-name">Springboot</div>
                                        </div>
                                        <div className="skill-card">
                                            <div className="skill-icon db-icon">
                                                <i className="fas fa-database"><SiPostgresql /></i>
                                            </div>
                                            <div className="skill-name">PostgreSQL</div>
                                        </div>
                                        <div className="skill-card">
                                            <div className="skill-icon db-icon">
                                                <i className="fas fa-database"><SiMysql /></i>
                                            </div>
                                            <div className="skill-name">MySQL</div>
                                        </div>
                                        <div className="skill-card">
                                            <div className="skill-icon api-icon">
                                                <i className="fas fa-plug"><SiPostman /></i>
                                            </div>
                                            <div className="skill-name">Postman</div>
                                        </div>
                                        <div className="skill-card">
                                            <div className="skill-icon react-icon">
                                                <i className="fab fa-react"><FaReact /></i>
                                            </div>
                                            <div className="skill-name">React</div>
                                        </div>
                                        <div className="skill-card">
                                            <div className="skill-icon Git-icon">
                                                <i className="fab fa-react"><FaGitAlt /></i>
                                            </div>
                                            <div className="skill-name">Git</div>
                                        </div>
                                        <div className="skill-card">
                                            <div className="skill-icon Github-icon">
                                                <i className="fab fa-react"><FaGithub /></i>
                                            </div>
                                            <div className="skill-name">Github</div>
                                        </div>

                                        {/* Duplicate set for seamless scrolling */}
                                        <div className="skill-card">
                                            <div className="skill-icon html-icon">
                                                <i className="fab fa-html5"></i>
                                            </div>
                                            <div className="skill-name">HTML</div>
                                        </div>
                                        <div className="skill-card">
                                            <div className="skill-icon css-icon">
                                                <i className="fab fa-css3-alt"></i>
                                            </div>
                                            <div className="skill-name">CSS</div>
                                        </div>
                                        <div className="skill-card">
                                            <div className="skill-icon js-icon">
                                                <i className="fab fa-js"></i>
                                            </div>
                                            <div className="skill-name">JavaScript</div>
                                        </div>
                                        <div className="skill-card">
                                            <div className="skill-icon java-icon">
                                                <i className="fab fa-java"></i>
                                            </div>
                                            <div className="skill-name">Java</div>
                                        </div>
                                        <div className="skill-card">
                                            <div className="skill-icon db-icon">
                                                <i className="fas fa-database"></i>
                                            </div>
                                            <div className="skill-name">PostgreSQL</div>
                                        </div>
                                        <div className="skill-card">
                                            <div className="skill-icon db-icon">
                                                <i className="fas fa-database"></i>
                                            </div>
                                            <div className="skill-name">MySQL</div>
                                        </div>
                                        <div className="skill-card">
                                            <div className="skill-icon api-icon">
                                                <i className="fas fa-plug"></i>
                                            </div>
                                            <div className="skill-name">Postman</div>
                                        </div>
                                        <div className="skill-card">
                                            <div className="skill-icon react-icon">
                                                <i className="fab fa-react"></i>
                                            </div>
                                            <div className="skill-name">React</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Work Experience */}
                    <div className='About-Me-Work-Experience'>
                        <h1>Work Experience</h1>
                        <div className='About-Me-Content-4-1'>
                            <h2>Internship</h2>
                            <p>Backend Developer Intern at ZYRIK Technologies</p>
                            <p>2023 - Present</p>
                            <p>Worked on various projects, focusing on backend development and database management.</p>
                        </div>
                    </div>

                    {/* Achievements  */}
                    <div className='About-Me-Content-5'>
                        <h1>Achievements</h1>
                        <div className='About-Me-Achievements-grid'>
                            <div className='About-Me-Achievements-card'>
                                <h2>Top 10 in Hackathon</h2>
                                <p>Participated in a hackathon and secured a place in the top 10.</p>
                            </div>
                            <div className='About-Me-Achievements-card'>
                                <h2>Top 10 in Hackathon</h2>
                                <p>Participated in a hackathon and secured a place in the top 10.</p>
                            </div>
                            <div className='About-Me-Achievements-card'>
                                <h2>Top 10 in Hackathon</h2>
                                <p>Participated in a hackathon and secured a place in the top 10.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div >
        </div >
    );
}



export default About;
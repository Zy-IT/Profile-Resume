/* eslint-disable react/prop-types */
import Navbar from "../../Components/Navbar/Navbar";
import ScrollAnimation from "../../Components/ScrollAnimation/ScrollAnimation";
import { BackgroundBeams } from "../../Components/UI/backgroundBeams";
import './ProjectsAchievements.css';

function ProjectsAchievements() {
    // Project data array
    const projects = [
        {
            id: 1,
            title: "Stay at Lease",
            year: "2023 - 2024",
            description: "A mobile application design to promote Rentable Properties",
            image: "/path/to/stay-at-lease-image.jpg",
            url: null,
            techStack: ["REACT NATIVE", "REACTJS", "EXPRESSJS", "NODEJS", "MYSQL", "AXIOS", "FIGMA", "Postman"]
        },
        {
            id: 2,
            title: "RB Cauayan New Website",
            year: "2025",
            description: "A modern website redesign for Rural Bank of Cauayan to ensure its up to date and Included the Loans Application also",
            image: "/src/assets/RbCauayanWebsite.jpg",
            url: "https://rbcauayan.com",
            techStack: ["REACTJS", "AXIOS", "SPRINGBOOT", "JAVA", "POSTGRESQL", "CPANEL", ""]
        },
        {
            id: 3,
            title: "Chanelling System",
            year: "2025",
            description: "An Inhouse System Developed to Speed up one of their core banking process. Disclosure of Information cannot be disclose unless interviewed.",
            image: "/src/assets/ChannelingSystem.jpg",
            url: null,
            techStack: ["REACTJS", "AXIOS", "SPRINGBOOT", "JAVA", "POSTGRESQL",]
        }
    ];

    const ProjectCard = ({ project }) => {
        const cardContent = (
            <div className="Projects-Deployed-Card-Content">
                <div className="Projects-Deployed-Image-Container">
                    {project.image && (
                        <img
                            src={project.image}
                            alt={project.title}
                            className="Projects-Deployed-Image"
                        />
                    )}
                </div>
                <div className="Projects-Deployed-Title-Container">
                    <div className="Projects-Deployed-Title">
                        <h2>{project.title}</h2>
                    </div>
                    <div className="Projects-Deployed-Year">
                        <h3>{project.year}</h3>
                    </div>
                </div>
                <div className="Projects-Deployed-Description">
                    <p>{project.description}</p>
                </div>
                <div className="Projects-Deployed-Tech-Used-Wrapper">
                    {project.techStack.map((tech, index) => (
                        <div key={index} className="Projects-Deployed-Tech-Container">
                            <h4>{tech}</h4>
                        </div>
                    ))}
                </div>
            </div>
        );

        // If URL exists, wrap in anchor tag
        if (project.url) {
            return (
                <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="Projects-Deployed-Card Projects-Deployed-Card-Link"
                >
                    {cardContent}
                </a>
            );
        }

        // If no URL, just return the card
        return (
            <div className="Projects-Deployed-Card">
                {cardContent}
            </div>
        );
    };

    return (
        <div className="Projects-Screen">
            <BackgroundBeams />
            <Navbar />
            <div className="Projects-Outer-Container">
                <div className="Projects-Container">
                    <div className="Projects-Deployed-Container">
                        <ScrollAnimation delay={0.1}>
                            <div className="Projects-Deployed-Header">
                                <h1>Accomplished Projects</h1>
                            </div>
                        </ScrollAnimation>

                        <div className="Projects-Deployed-Grid-Layout">
                            {projects.map((project, index) => (
                                <ScrollAnimation key={project.id} delay={0.3 + (index * 0.20)}>
                                    <ProjectCard project={project} />
                                </ScrollAnimation>
                            ))}
                        </div>
                    </div>

                    <div className="Projects-Achievements">
                        <ScrollAnimation delay={0.2}>
                            <div className="Project-Achievements-Headers">
                                <h1>Achievements</h1>
                            </div>
                        </ScrollAnimation>

                        <div className="Projects-Achievements-Grid-Layout">
                            <ScrollAnimation delay={0.3}>
                                <div className="Projects-Achievements-Card">
                                    <div className="Project-Achievment-Image">
                                        <img src="/src/assets/.jpg" alt="Pitch Presentation Program" />
                                    </div>

                                    <div className="Project-Achievement-Title-Wrapper">
                                        <div className="Project-Achievement-Title">
                                            <h3>IdeaTech Participation</h3>
                                        </div>
                                        <div className="Project-Achievement-Year">
                                            <h5>2023</h5>
                                        </div>
                                    </div>

                                    <div className="Project-Description-Context">
                                        <p>
                                            Submitted the stay at lease project for pitch presentation and qualifiers for the
                                            <br />
                                            startup systems.
                                        </p>
                                    </div>
                                </div>
                            </ScrollAnimation>

                            <ScrollAnimation delay={0.4}>
                                <div className="Projects-Achievements-Card">
                                    <div className="Project-Achievment-Image">
                                        <img src="/src/assets/.jpg" alt="National Presentation Program" />
                                    </div>

                                    <div className="Project-Achievement-Title-Wrapper">
                                        <div className="Project-Achievement-Title">
                                            <h3>PCITE</h3>
                                        </div>
                                        <div className="Project-Achievement-Year">
                                            <h5>2023</h5>
                                        </div>
                                    </div>

                                    <div className="Project-Description-Context">
                                        <p>
                                            Submitted the stay at lease project for national presentation and exposure
                                            latest techs that are being developed and sponsorships offered to some studies.
                                        </p>
                                    </div>
                                </div>
                            </ScrollAnimation>

                            <ScrollAnimation delay={0.5}>
                                <div className="Projects-Achievements-Card">
                                    <div className="Project-Achievment-Image">
                                        <img src="/src/assets/.jpg" alt="Mentorship Program" />
                                    </div>

                                    <div className="Project-Achievement-Title-Wrapper">
                                        <div className="Project-Achievement-Title">
                                            <h3>NC-2 Computer Servicing</h3>
                                        </div>
                                        <div className="Project-Achievement-Year">
                                            <h5>2023</h5>
                                        </div>
                                    </div>

                                    <div className="Project-Description-Context">
                                        <p>
                                            Participated in a Training and Exam for NC-2 Certification.
                                        </p>
                                    </div>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectsAchievements;
/* eslint-disable react/prop-types */
import Navbar from "../../Components/Navbar/Navbar";
import ScrollAnimation from "../../Components/ScrollAnimation/ScrollAnimation";
import { BackgroundBeams } from "../../Components/UI/backgroundBeams";
import './ProjectsAchievements.css';

import StayatLeasePic from "../../assets/StayatLeasePic.jpg"
import rbCauayanImage from "../../assets/RbCauayanWebsite.jpg";
import loansApplication from "../../assets/LoansApplication.png"
import channelingImage from "../../assets/ChannelingSystem.jpg";
import securityImplementation from "../../assets/SecurityImplementation.jpg";
import employeeRecords from "../../assets/EmployeeRecords.png";
import iDeatechImage from "../../assets/iDeatech2023.png";
import imagePosting from "../../assets/ImagePosting.png";
import psiteImage from "../../assets/PSITE2023.png";
import nc2Image from "../../assets/NC2.png";

function ProjectsAchievements() {
    // Project data array
    const projects = [

        {
            id: 1,
            title: "RB Cauayan New Website",
            year: "2025",
            category: "Company Project",
            status: "Finished",
            description: "A modern website redesign for Rural Bank of Cauayan for better display of services and offers.",
            image: rbCauayanImage,
            url: "https://rbcauayan.com",
            techStack: ["REACTJS", "Turbify", "cPanel", "Vercel"]
        },
        {
            id: 2,
            title: "RB Cauayan Loans Application",
            year: "2025",
            category: "Company Project",
            status: "Finished",
            description: "A basic Loan Application to submit few information when applying for a loan.",
            image: loansApplication,
            url: "https://rbcauayan.com/ApplyLoan",
            techStack: ["REACTJS", "AXIOS", "ZUSTAND", "SPRING BOOT", "JAVA", "POSTGRESQL", "CPANEL", "WinSW", "INTERNET INFORMATION SERVICE(IIS)",]
        },
        {
            id: 3,
            title: "Chanelling System",
            year: "2025",
            category: "Company Project",
            status: "Finished",
            description: "An Inhouse System Developed to Speed up one of their core banking process. Disclosure of Information cannot be disclose unless interviewed.",
            image: channelingImage,
            url: null,
            techStack: ["REACTJS", "AXIOS", "ZUSTAND", "SPRING BOOT", "JAVA", "POSTGRESQL", "WinSW", "INTERNET INFORMATION SERVICE(IIS)",]
        },
        {
            id: 4,
            title: "Employee Records System",
            year: "2025",
            category: "Company Project",
            status: "Discontinued",
            description: "A In house System that is supposed to be used for a better storage of employees information but discontinued due to Outsourcing of a Employee Records/Payroll System.",
            image: employeeRecords,
            url: null,
            techStack: ["REACTJS", "AXIOS", "ZUSTAND", "SPRING BOOT", "JAVA", "POSTGRESQL", "Docker"]
        },
        {
            id: 5,
            title: "Stay at Lease",
            year: "2023 - 2024",
            category: "Capstone Project",
            status: "Finished",
            description: "A mobile application design to promote Rentable Properties.",
            image: StayatLeasePic,
            url: null,
            techStack: ["REACT NATIVE", "REACTJS", "EXPRESSJS", "NODEJS", "MYSQL", "AXIOS", "FIGMA", "Postman"]
        },
        {
            id: 6,
            title: "Security Implementation Prototype",
            year: "2025",
            category: "Personal Project",
            status: "Finished",
            description: "A Prototype Project Developed to Test Spring Security and Spring Cache. Utilized Role Based Access Control (RBAC) to control Authorization and Efficient Data Retreival Using Caching Methods.",
            image: securityImplementation,
            url: null,
            techStack: ["REACTJS", "AXIOS", "ZUSTAND", "SPRING BOOT", "JAVA", "POSTGRESQL", "JPA/HIBERNATE", "Docker"]
        },
        {
            id: 7,
            title: "Image Posting Prototype",
            year: "2025",
            category: "Personal Project",
            status: "Finished",
            description: "A Prototype Project Developed to Test Image Storing using formData in the frontnend and tested entity relationships using Live Jpa/Hibernate.",
            image: imagePosting,
            url: null,
            techStack: ["REACTJS", "AXIOS", "SPRING BOOT", "JAVA", "POSTGRESQL", "JPA/HIBERNATE"]
        }
    ];

    const achievements = [
        {
            id: 1,
            title: "IdeaTech Participation",
            year: "2023",
            category: "Pitch Presentation",
            status: "Completed",
            description: "Submitted the stay at lease project for pitch presentation and qualifiers for the startup systems.",
            image: iDeatechImage
        },
        {
            id: 2,
            title: "PSITE",
            year: "2023",
            category: "National Presentation",
            status: "Completed",
            description: "Submitted the stay at lease project for national presentation and exposure latest techs that are being developed and sponsorships offered to some studies.",
            image: psiteImage
        },
        {
            id: 3,
            title: "NC-2 Computer Servicing",
            year: "2023",
            category: "Certification",
            status: "Certified",
            description: "Participated in a Training and Exam for NC-2 Certification.",
            image: nc2Image
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

                <div className="Projects-Meta-Container">
                    <div className="Projects-Category-Badge">
                        <span>{project.category}</span>
                    </div>
                    <div className={`Projects-Status-Badge ${project.status.toLowerCase().replace(' ', '-')}`}>
                        <span>{project.status}</span>
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

        return (
            <div className="Projects-Deployed-Card">
                {cardContent}
            </div>
        );
    };

    const AchievementCard = ({ achievement }) => {
        return (
            <div className="Projects-Achievements-Card">
                <div className="Project-Achievment-Image">
                    <img src={achievement.image} alt={achievement.title} />
                </div>

                <div className="Project-Achievement-Title-Wrapper">
                    <div className="Project-Achievement-Title">
                        <h3>{achievement.title}</h3>
                    </div>
                    <div className="Project-Achievement-Year">
                        <h5>{achievement.year}</h5>
                    </div>
                </div>

                <div className="Projects-Meta-Container">
                    <div className="Projects-Category-Badge">
                        <span>{achievement.category}</span>
                    </div>
                    <div className={`Projects-Status-Badge ${achievement.status.toLowerCase().replace(' ', '-')}`}>
                        <span>{achievement.status}</span>
                    </div>
                </div>

                <div className="Project-Description-Context">
                    <p>{achievement.description}</p>
                </div>
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
                                <h3>Press to Navigate</h3>
                            </div>
                        </ScrollAnimation>

                        <div className="Projects-Deployed-Grid-Layout">
                            {projects.map((project, index) => (
                                <ScrollAnimation key={project.id} delay={0.3 + (index * 0.15)}>
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
                            {achievements.map((achievement, index) => (
                                <ScrollAnimation key={achievement.id} delay={0.3 + (index * 0.1)}>
                                    <AchievementCard achievement={achievement} />
                                </ScrollAnimation>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectsAchievements;
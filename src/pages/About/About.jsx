import Navbar from '../../Components/Navbar/Navbar';
import Resume from '../../../public/pdfs/Curriculum Vitae_Paraoan.pdf';
import './About.css';


function About() {


    return (
        <div className="About-Screen">
            <Navbar />
            <div className="About-Container">
                <section className='About-Me-Container'>
                    <div className='About-Me-Content'>
                        <div className='About-Me-Content-1'>
                            <h2>WHO AM I?</h2>
                            <h1>Hi, I'm Zyril</h1>
                            <p>
                                Innovative IT professional with a strong foundation in Backend Development and Database Management.
                                A graduate of the University of Saint Louis Tuguegarao, I thrive on solving complex challenges and
                                delivering impactful digital solutions. Skilled in bridging logic and design, I bring ideas to life
                                with precision and creativity.
                            </p>
                            <a href={Resume} target="_blank" rel="noreferrer">
                                <button class="About-button">
                                    My Resume
                                    <svg fill="currentColor" viewBox="0 0 24 24" class="icon">
                                        <path
                                            clip-rule="evenodd"
                                            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                                            fill-rule="evenodd"
                                        ></path>
                                    </svg>
                                </button>
                            </a>
                        </div>
                        <div className='About-Me-Content-2'>
                            <div className="container">
                                {/* Top Left */}
                                <div
                                    data-text="Github"
                                    style={{ '--r': -15, '--order': 0, '--row': 0, '--col': 0 }}
                                    className="glass"
                                >
                                    <svg viewBox="0 0 496 512" height="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                                    </svg>
                                </div>

                                {/* Top Middle */}
                                <div
                                    data-text="LinkedIn"
                                    style={{ '--r': 5, '--order': 1, '--row': 0, '--col': 1 }}
                                    className="glass"
                                >
                                    <svg viewBox="0 0 448 512" height="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                                    </svg>
                                </div>

                                {/* Top Right */}
                                <div
                                    data-text="Discord"
                                    style={{ '--r': 5, '--order': 1, '--row': 0, '--col': 2 }}
                                    className="glass"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127.14 96.36" height="1em">
                                        <path d="M107.48,8A105,105,0,0,0,82.43,0a72.58,72.58,0,0,0-2.56,5.29A99.12,99.12,0,0,0,47.27,5.28a72.19,72.19,0,0,0-2.62-5.29A105.17,105.17,0,0,0,19.46,8C3.77,33.74-1.61,58.4.56,82.79a106.43,106.43,0,0,0,32.06,11.57,77.7,77.7,0,0,0,6.78-11.13,66.74,66.74,0,0,1-10.7-5.06c.9-.67,1.79-1.36,2.65-2.07a77.5,77.5,0,0,0,61.5,0c.88.72,1.77,1.41,2.66,2.07a66.74,66.74,0,0,1-10.7,5.06,77.7,77.7,0,0,0,6.78,11.13,106.43,106.43,0,0,0,32.06-11.57C128.75,58.4,123.37,33.74,107.48,8ZM47.87,65.57c-8.74,0-15.89-8-15.89-17.83s7.05-17.83,15.89-17.83,15.89,8,15.89,17.83S56.61,65.57,47.87,65.57ZM79.26,65.57c-8.74,0-15.89-8-15.89-17.83s7.05-17.83,15.89-17.83S95.15,38,95.15,48.75,88,65.57,79.26,65.57Z" />
                                    </svg>

                                </div>

                                {/* Bottom Left */}
                                <div
                                    data-text="Email"
                                    style={{ '--r': 25, '--order': 2, '--row': 1, '--col': 0 }}
                                    className="glass"
                                >
                                    <svg viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                                    </svg>
                                </div>

                                {/* Bottom Middle */}
                                <div
                                    data-text="Facebook"
                                    style={{ '--r': 45, '--order': 3, '--row': 1, '--col': 1 }}
                                    className="glass"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em">
                                        <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256c19.8 0 39.2-3.5 57.6-10.1L423.5 496c25.7 11.6 47.8-10.5 47.8-36.4V372.4c0-7.2-5.8-13-13-13h-69.2c-4.6 0-9.1 2.5-11.4 6.5L314.1 426.9c-5.2 8.4-15.6 10.9-24.4 5.7l-51.8-35.6c-2.1-1.4-4.6-2.1-7.2-2.1c-2.6 0-5.1 0.7-7.2 2.1l-51.8 35.6c-8.8 5.2-19.2 2.7-24.4-5.7l-35.4-62.5c-2.3-4-6.8-6.5-11.4-6.5h-69.2c-7.2 0-13 5.8-13 13v87.2c0 25.9 22.1 47.9 47.8 36.4l57.9-21.2c18.4 6.6 37.4 10.1 57.6 10.1c141.4 0 256-114.6 256-256S397.4 0 256 0z" />
                                    </svg>

                                </div>

                                {/* Bottom Right */}
                                <div
                                    data-text="Contact"
                                    style={{ '--r': 60, '--order': 5, '--row': 1, '--col': 2 }}
                                    className="glass"
                                >
                                    {/* SVG content */}
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            </div >
        </div >
    );
}



export default About;
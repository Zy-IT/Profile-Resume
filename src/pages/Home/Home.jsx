import React, { useState, useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import TypeWriter from "../../Components/TypeWriting/TypeWriting";
import './Home.css';


function Home() {

    const [showIntro, setShowIntro] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);
    const [startShine, setStartShine] = useState(false);

    useEffect(() => {

        const fadeTimer = setTimeout(() => {
            setFadeOut(true);
        }, 2500); // 2.5 seconds

        const switchTimer = setTimeout(() => {
            setShowIntro(false);
        }, 3000); // 3 seconds

        return () => {
            clearTimeout(fadeTimer);
            clearTimeout(switchTimer);
        };
    }, []);

    useEffect(() => {
        // Start shine effect after all entrance animations complete
        const shineDelay = 8000; // 7s (last animation) + 1s (animation duration)
        setTimeout(() => setStartShine(true), shineDelay);
    }, []);

    if (showIntro) {
        return (
            <div className={`Intro-Screen ${fadeOut ? 'fade-out' : ''}`}>
                <div className="Intro-Content">
                    <h1>Good Day Mate</h1>
                    <p>Loading...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="Home-Screen">
            <Navbar />

            {/*Home Section */}
            <section>
                <div className="Home-Container">
                    {/* 1st Paragraph */}
                    <div className="Home-Title">
                        <div className="Home-1-Title-Content">
                            <h1>
                                <TypeWriter text="Crafting Visions -" delay={500} speed={70} />
                            </h1>
                        </div>
                        <div className="Home-2-Title-Content">
                            <h1>
                                <TypeWriter text="Deploying Digital Innovations" delay={2000} speed={70} />
                            </h1>
                        </div>
                    </div>
                    {/* 2nd Paragraph */}
                    <div className="Home-Center">
                        <div className="Center-1-Content">
                            <h1>
                                <TypeWriter text="You're Trusted" delay={3500} speed={70} />
                            </h1>
                        </div>
                        <div className="Center-2-Content">
                            <h1>
                                <TypeWriter text="Developer" delay={4700} speed={70} />
                            </h1>
                        </div>
                    </div>

                    {/* My Whole Name */}
                    <div className="Home-Name">
                        <div className={`Home-Content-1stName ${startShine ? 'shine' : ''}`}>
                            <h1 data-text="Zyril">Zyril</h1>
                        </div>
                        <div className={`Home-Content-2ndName ${startShine ? 'shine' : ''}`}>
                            <h1 data-text="A.">A.</h1>
                        </div>
                        <div className={`Home-Content-3rdName ${startShine ? 'shine' : ''}`}>
                            <h1 data-text="Paraoan">Paraoan</h1>
                        </div>
                    </div>
                    {/* From Uiverse.io by Lakshay-art || Animated Search Input */}
                    <div className="grid"></div>
                    <div id="poda">
                        <div className="glow"></div>
                        <div className="darkBorderBg"></div>
                        <div className="white"></div>
                        <div className="border"></div>
                        <div id="main">
                            <div id="search-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" height="24" fill="none" className="feather feather-search">
                                    <circle stroke="url(#search)" r="8" cy="11" cx="11"></circle>
                                    <line stroke="url(#searchl)" y2="16.65" y1="22" x2="16.65" x1="22"></line>
                                    <defs>
                                        <linearGradient gradientTransform="rotate(50)" id="search">
                                            <stop stopColor="#f8e7f8" offset="0%"></stop>
                                            <stop stopColor="#b6a9b7" offset="50%"></stop>
                                        </linearGradient>
                                        <linearGradient id="searchl">
                                            <stop stopColor="#b6a9b7" offset="0%"></stop>
                                            <stop stopColor="#837484" offset="50%"></stop>
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            <input placeholder="Tell me what you want to know about Mr. Paraoan" type="text" name="text" className="input" />
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
            </section>


        </div>
    );
}

export default Home;
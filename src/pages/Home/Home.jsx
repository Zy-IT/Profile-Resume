import { useState, useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import TypeWriter from "../../Components/TypeWriting/TypeWriting";
import { BackgroundBeams } from "../../Components/UI/backgroundBeams";

import './Home.css';

function Home() {
    const [showIntro, setShowIntro] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);
    const [currentShine, setCurrentShine] = useState(-1);

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
        const shineDelay = 8000;
        const shineInterval = 2000;

        const timer = setTimeout(() => {
            let index = 0;
            setCurrentShine(index);

            const interval = setInterval(() => {
                index = (index + 1) % 3;
                setCurrentShine(index);
            }, shineInterval);

            return () => clearInterval(interval);
        }, shineDelay);

        return () => clearTimeout(timer);
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
        <div className="Home-Outer-Layer">
            <div className="beams-container">
                <BackgroundBeams />
            </div>
            <div className="Home-Screen">
                <Navbar />
                <section>
                    <div className="Home-Container">
                        {/* 1st Paragraph */}
                        <div className="Home-Title">
                            <div className="Home-1-Title-Content">
                                <h1>
                                    <TypeWriter text="Crafting Visions  -" delay={500} speed={70} />
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
                            <div className={`Home-Content-1stName ${currentShine === 0 ? "shine" : ""}`}>
                                <h1 data-text="Zyril">Zyril</h1>
                            </div>
                            <div className={`Home-Content-2ndName ${currentShine === 1 ? "shine" : ""}`}>
                                <h1 data-text="A.">A.</h1>
                            </div>
                            <div className={`Home-Content-3rdName ${currentShine === 2 ? "shine" : ""}`}>
                                <h1 data-text="Paraoan">Paraoan</h1>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Home;
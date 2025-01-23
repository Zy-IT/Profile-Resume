import { useState, useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import TypeWriter from "../../Components/TypeWriting/TypeWriting";
import { useHuggingFaceChat } from "../../Components/HuggingFaceChat/HuggingFaceChat";
import './Home.css';


function Home() {
    const { question, setQuestion, answer, displayedAnswer, loading, handleQuestion } = useHuggingFaceChat();
    const [showIntro, setShowIntro] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);
    const [currentShine, setCurrentShine] = useState(-1);



    const handleTagClick = (tagText) => {
        setQuestion(tagText);
        handleQuestion(); // Trigger the question handler
    };

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

                    {/* AI Assistance */}
                    <div className="AI-Assistant">
                        <div className="container_chat_bot">
                            <div className="container-chat-options">
                                <div className="chat">
                                    {/* Chat Input Section */}
                                    <div className="chat-bot">
                                        <textarea
                                            id="chat_bot"
                                            name="chat_bot"
                                            placeholder= "Hello I am Chippie, Mr. Zy's Personal Static AI Assistant...✦˚"
                                            value={question}
                                            onChange={(e) => setQuestion(e.target.value)}
                                        ></textarea>
                                    </div>
                                    {/* Display AI Response */}
                                    {(answer || displayedAnswer) && (
                                        <div className="chat-response">
                                            <p>
                                                <strong>Chippie:</strong>{' '}
                                                {loading ? "Typing..." : displayedAnswer}
                                            </p>
                                        </div>
                                    )}

                                    {/* Options Section */}
                                    <div className="options">
                                        <div className="btns-add">
                                            {/* Add optional buttons here */}
                                        </div>
                                        <button
                                            className="btn-submit"
                                            onClick={handleQuestion}
                                            disabled={loading}
                                        >
                                            {loading ? 'Loading...' : (
                                                <i>
                                                    <svg viewBox="0 0 512 512">
                                                        <path
                                                            fill="currentColor"
                                                            d="M473 39.05a24 24 0 0 0-25.5-5.46L47.47 185h-.08a24 24 0 0 0 1 45.16l.41.13l137.3 58.63a16 16 0 0 0 15.54-3.59L422 80a7.07 7.07 0 0 1 10 10L226.66 310.26a16 16 0 0 0-3.59 15.54l58.65 137.38c.06.2.12.38.19.57c3.2 9.27 11.3 15.81 21.09 16.25h1a24.63 24.63 0 0 0 23-15.46L478.39 64.62A24 24 0 0 0 473 39.05"
                                                        ></path>
                                                    </svg>
                                                </i>
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="tags">
                                <span onClick={() => handleTagClick("Tell me something about Mr. Zy")}>
                                    Tell Me Something about Mr. Zy
                                </span>
                                <span onClick={() => handleTagClick("What are his skills")}>
                                    What are his skills?
                                </span>
                                <span onClick={() => handleTagClick("More")}>More</span>
                            </div>
                        </div>
                    </div>

                </div>
            </section >

        </div >
    );
}

export default Home;
import React, { useState, useEffect } from "react";
import './TypeWriting.css';

const TypeWriting = ({ text, delay = 0, speed = 50 }) => {
    const [displayText, setDisplayText] = useState("");
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        let timeoutId;
        let intervalId;

        timeoutId = setTimeout(() => {
            let currentIndex = 0;
            intervalId = setInterval(() => {
                if (currentIndex < text.length) {
                    setDisplayText(text.substring(0, currentIndex + 1));
                    currentIndex++;
                } else {
                    clearInterval(intervalId);
                    setIsComplete(true);
                }
            }, speed);
        }, delay);

        return () => {
            clearTimeout(timeoutId);
            clearInterval(intervalId);
        };
    }, [text, delay, speed]);

    return (
        <span className="TypeWriter" style={{ borderRight: isComplete ? 'none' : '2px solid #FF5722' }}>
            {displayText}
        </span>
    );
};

export default TypeWriting;
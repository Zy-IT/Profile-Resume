/* eslint-disable react/prop-types */
import { useEffect, useRef } from 'react';
import './ScrollAnimation.css';

const ScrollAnimation = ({ children, delay = 0 }) => {
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {

                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, delay * 1000);
                }
            });
        },
            {
                threshold: 0.1,
                rootMargin: '50px',
            }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(elementRef.current);
            }
        };
    }, [delay]);

    return (
        <div ref={elementRef} className="Scroll-Animation" style={{ transitionDelay: `${delay}s` }}>
            {children}
        </div>
    );
}

export default ScrollAnimation;
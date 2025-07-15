import React, { useState, useEffect } from 'react';
import MatrixGame from './MatrixGame';

const MatrixPage = () => {
    const [showGame, setShowGame] = useState(false);
    const [matrixNumbers, setMatrixNumbers] = useState([]);

    useEffect(() => {
        const generateMatrixRain = () => {
            const numbers = Array.from({ length: 150 }, (_, i) => ({
                id: i,
                left: Math.random() * 100,
                animationDelay: Math.random() * 5,
                animationDuration: 3 + Math.random() * 4,
            }));
            setMatrixNumbers(numbers);
        };
        generateMatrixRain();
    }, []);

    const handleBluePill = () => {
        document.body.style.filter = 'blur(2px)';
        setTimeout(() => {
            window.open('https://drive.google.com/file/d/1TqrWyIwEX29p4GDXGbHFCSD4ZymPOt0S/view?usp=drivesdk', '_blank');
            document.body.style.filter = 'none';
        }, 1000);
    };

    const handleRedPill = () => {
        setShowGame(true);
    };

    const handleGameWin = () => {
        setTimeout(() => {
            window.open('https://drive.google.com/file/d/1TqrWyIwEX29p4GDXGbHFCSD4ZymPOt0S/view?usp=drivesdk', '_blank');
        }, 2000);
    };

    if (showGame) {
        return <MatrixGame onWin={handleGameWin} onBack={() => setShowGame(false)} />;
    }

    return (
        <div className="matrix-container">
            <div className="matrix-rain">
                {matrixNumbers.map((item) => (
                    <div
                        key={item.id}
                        className="matrix-column"
                        style={{
                            left: `${item.left}%`,
                            animationDelay: `${item.animationDelay}s`,
                            animationDuration: `${item.animationDuration}s`,
                        }}
                    >
                        {Array.from({ length: 20 }, (_, i) => (
                            <span key={i} className="matrix-char">
                                {Math.random() > 0.5
                                    ? Math.floor(Math.random() * 10)
                                    : String.fromCharCode(65 + Math.floor(Math.random() * 26))}
                            </span>
                        ))}
                    </div>
                ))}
            </div>

            <div className="matrix-content">
                <div className="morpheus-container">
                    <div className="morpheus-image">
                        <div className="morpheus-silhouette">
                            <div className="sunglasses"></div>
                        </div>
                    </div>

                    <div className="dialogue-box">
                        <p className="morpheus-text">
                            "This is your last chance. After this, there is no going back."
                        </p>
                        <p className="morpheus-text">
                            "You take the blue pill—the story ends, you see my resume and believe whatever you want to believe."
                        </p>
                        <p className="morpheus-text">
                            "You take the red pill—you stay in Wonderland, and I show you how deep the rabbit hole goes through a challenge."
                        </p>
                    </div>

                    <div className="pills-container">
                        <div className="pill-choice">
                            <button
                                className="pill blue-pill"
                                onClick={handleBluePill}
                                aria-label="Take the blue pill - Direct to resume"
                            >
                                <div className="pill-shine"></div>
                                <span className="pill-label">Blue Pill</span>
                                <span className="pill-description">Direct Path</span>
                            </button>
                        </div>

                        <div className="vs-text">OR</div>

                        <div className="pill-choice">
                            <button
                                className="pill red-pill"
                                onClick={handleRedPill}
                                aria-label="Take the red pill - Play the game"
                            >
                                <div className="pill-shine"></div>
                                <span className="pill-label">Red Pill</span>
                                <span className="pill-description">The Challenge</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MatrixPage;

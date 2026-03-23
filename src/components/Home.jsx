import { useEffect, useState } from "react";
import "./Home.css";

function Home() {
    const text = "Front-End React Developer";
    const typingSpeed = 100;
    const deletingSpeed = 80;
    const pauseTime = 1500;

    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [index, setIndex] = useState(1);

    useEffect(() => {

        const handleTyping = () => {
            if (!isDeleting) {
                if (index < text.length) {
                    setDisplayedText(text.slice(0, index + 1));
                    setIndex(index + 1);
                } else {
                    setTimeout(() => setIsDeleting(true), pauseTime);
                }
            } else {
                if (index > 1) {
                    setDisplayedText(text.slice(0, index - 1));
                    setIndex(index - 1);
                } else {
                    setIsDeleting(false);
                }
            }
        };

        const timeout = setTimeout(
            handleTyping,
            isDeleting ? deletingSpeed : typingSpeed
        );

        return () => clearTimeout(timeout);
    }, [index, isDeleting, text]);

    return (
        <section id="home-section">
            <div className="container">
                <div className="content-home">
                    <div className="content-box">
                        <p>Hi, my name is</p>
                        <h1>Nancy Emad</h1>
                        <p>{displayedText}</p>
                        <p>
                            I build modern, responsive web interfaces using React.js and modern
                            frontend tools. Passionate about clean UI, smooth user experiences,
                            and writing maintainable code.
                        </p>
                    </div>

                    <div className="content-btns">
                        <button onClick={() => {
                                    const link = document.createElement("a")
                                    link.href = "/Nancy_Emad_Abdelrahiem_Frontend.pdf"
                                    link.download = "Nancy_Emad_Abdelrahiem_Frontend.pdf"
                                    link.click();
                                }}>
                            <i className="fa-solid fa-download"></i> Download CV
                        </button>
                    </div>
                </div>

                <div className="imge">
                    <img src="/me.png" alt="meImge" />
                </div>
            </div>
        </section>
    );
}

export default Home;

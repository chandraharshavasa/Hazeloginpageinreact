import React, { useEffect, useState } from 'react';
import '../styles/Login.css';

function Login() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const carousel = document.querySelector('.carousel');
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    }, [currentIndex]);

    const prevSlide = () => {
        setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : 2); // 2 is last index (for 3 slides)
    };

    const nextSlide = () => {
        setCurrentIndex(currentIndex < 2 ? currentIndex + 1 : 0); // Cycling back to first slide
    };

    return (
        <div className="login-container">
            <div className="login-left">
                <div className="header">
                    <h2 className="logo">HAZE.</h2>
                    <div className="language-select">
                        <span>EN</span>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/b/be/Flag_of_England.svg" alt="EN flag" />
                    </div>
                </div>
                <p className="welcome-text"><b>Hi there!</b></p>
                <p className="welcome-text2">Welcome to Haze. Community Dashboard</p>
                <button type="button" className="google-login">
                    <img src="https://www.svgrepo.com/show/355037/google.svg" className="google-icon" alt="Google Icon" />
                    Log in with Google
                </button>
                <div className="separator">or</div>
                <form className="login-form" action="#" method="POST">
                    <label htmlFor="email" align="left">Your email</label>
                    <input type="email" id="email" name="email" placeholder="Your email" required />

                    <label htmlFor="password" align="left">Password</label>
                    <input type="password" id="password" name="password" placeholder="Password" required />

                    <a href="#" className="forgot-password">Forgot password?</a>
                    <button type="submit" className="login-btn">Log In</button>
                </form>
                <p className="signup">Don’t have an account? <a href="#">Sign up</a></p>
            </div>

            <div className="login-right">
                <div className="header-buttons">
                    <a href="#" className="btn-1">Sign Up</a>
                    <a href="#" className="btn">Join Us</a>
                </div>

                <div className="image-overlay">
                    <div className="carousel">
                        <div className="slide active">
                            <img src="./image1.png" alt="Slide 1" />
                        </div>
                        <div className="slide">
                            <img src="./image1.png" alt="Slide 2" />
                        </div>
                        <div className="slide">
                            <img src="./image1.png" alt="Slide 3" />
                        </div>
                    </div>
                    <div className="carousel-nav">
                        <button className="prev" onClick={prevSlide}>&#8592;</button>
                        <button className="next" onClick={nextSlide}>&#8594;</button>
                    </div>
                </div>
            </div>
        </div>
    );
}



export default Login;

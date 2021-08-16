import React from 'react'
import './home.css'
import { ReactComponent as HomeBackground } from './Home_Background.svg'
import Header from '../Header/Header'
import Footer1 from '../Footer/Footer1'
function Home() {
    return (
        <>
        <Header />
        <div className="main" data-aos="fade-up">
            <div>The simplest way to keep notes</div>
            <div>Tame your work, organize your life. Remember everything and tackle any project with all your notes in one place.</div>
            <div className="main-btn-area">
                <div className="main-btn"><a href="/signup">Sign Up Now</a></div>
            </div>
        </div>
        <div className="home_bg">
        <HomeBackground  width="70%" height="10%" />
        </div>
        <div className="features">
            <div data-aos="fade-down">Comprehensive underneath, simple on the surface</div>
            <div className="features-box">
                <div data-aos="fade-right">
                    <h1>Use it everywhere</h1>
                    <div className="feature-info">Notes stay updated across all your devices, automatically and in real time.</div>
                    </div>
                <div data-aos="fade-left">
                <h1>Go back in time</h1>
                <div className="feature-info">Notes are backed up with every save, so you can see what you noted last week or last month.</div>
                </div>
                <div data-aos="fade-right"> 
                <h1>Stay organized</h1>
                <div className="feature-info">Notes are organized in a way where you can find them easily.</div>
                </div>
                <div data-aos="fade-left">
                <h1>It’s free</h1>
                <div className="feature-info">This App is completely free.</div>
                </div>
                <div>
                </div>
            </div>

        </div>
        <Footer1 />
        </>
    )
}

export default Home

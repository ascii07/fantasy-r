import React from 'react';
import './Home.css';
import genPro2 from '../Assets/image/genpro2.png';

const HomePage = () => {
  // Function to handle "GET APP LINK" button click
  const handleGetAppLink = () => {
    const mobileNumber = document.querySelector('.input-section input').value;
    if (mobileNumber && mobileNumber.startsWith('+91')) {
      alert(`A download link will be sent to ${mobileNumber}`);
      // Here you would typically call an API to send the link
    } else {
      alert('Please enter a valid mobile number starting with +91');
    }
  };

  // Function to handle "Download Now" button click
  const handleDownloadNow = () => {
    window.location.href = 'https://example.com/download-gen-pro-app'; // Replace with your actual download URL
  };

  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-content">
          <h1>GEN PRO - IS THE BEST FANTASY GAME IN INDIA</h1>
          <p className="sub-text">1000+ downloads daily</p>
          <div className="download-icon">
            <i className="fa fa-cloud-download" aria-hidden="true"></i>
          </div>
          <p className="description">
            GEN PRO takes the excitement of real-life sports and combines it with the thrill of strategy and competition.
          </p>
          <div className="input-section">
            <input type="text" placeholder="+91 ENTER YOUR MOBILE NUMBER" />
            <div className="privacy-policy">
              <input type="checkbox" />
              <label>I accept Privacy policy</label>
            </div>
            <button className="get-app-button" onClick={handleGetAppLink}>GET APP LINK</button>
          </div>
        </div>
        <div className="hero-image-container">
          <img src={genPro2} alt="Gen Pro App Screenshot" className="hero-image" />
        </div>
      </section>

      <section className="features-section">
        <h2>Why Choose GEN PRO?</h2>
        <div className="features">
          <div className="feature">
            <i className="fa fa-trophy" aria-hidden="true"></i>
            <h3>Compete & Win</h3>
            <p>Compete with friends and other players to win amazing prizes.</p>
          </div>
          <div className="feature">
            <i className="fa fa-gamepad" aria-hidden="true"></i>
            <h3>Real-time Stats</h3>
            <p>Get real-time statistics and updates on all your players.</p>
          </div>
          <div className="feature">
            <i className="fa fa-shield" aria-hidden="true"></i>
            <h3>Secure & Trusted</h3>
            <p>Your data and transactions are secure with our robust system.</p>
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <h2>What Our Users Say</h2>
        <div className="testimonials">
          <div className="testimonial">
            <p>"GEN PRO has completely changed the way I enjoy sports. The app is fantastic!"</p>
            <h4>- Rahul</h4>
          </div>
          <div className="testimonial">
            <p>"I love the competition and the thrill of winning prizes. Highly recommend GEN PRO!"</p>
            <h4>- Priya</h4>
          </div>
        </div>
      </section>

      <section className="call-to-action-section">
        <h2>Join the GEN PRO Community Today!</h2>
        <p>Download the app now and start your fantasy sports journey.</p>
        <button className="cta-button" onClick={handleDownloadNow}>Download Now</button>
      </section>
    </div>
  );
};

export default HomePage;

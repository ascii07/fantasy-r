import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <div className="footer-logo">
            <h2>GEN PRO</h2>
            <p>GEN PRO is a fantasy sports game that exceeds all expectations</p>
          </div>
          <div className="footer-nav">
            <a href="/home">HOME</a>
          
            <a href="/HowToplay">FEATURES</a>
            <a href="/faqs">CONTACT</a>
            <a href="/userssay">USERS SAY</a>
            <a href="/TermsAndCondition">Terms And Condition</a>
            <a href="/privacy_policy">Privacy Policy</a>
            <a href="/Disclamier">Disclaimer</a>
          </div>
          <div className="footer-disclaimer">
            <p>18+</p>
            <p>DISCLAIMER</p>
            <p>Geographical Restrictions Location Compliance: Our platform is not accessible from states where DFS is prohibited, including Andhra Pradesh, Assam, Nagaland, Odisha, Sikkim, and Telangana.</p>
            <p>This game involves an element of financial risk and may be addictive.</p>
            <p>Please play responsibly at your own work.</p>
            <p>© 2024 GEN PRO. All rights reserved.</p>
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-payment">
            <img src="https://via.placeholder.com/50x30.png?text=RuPay" alt="RuPay" />
            <img src="https://via.placeholder.com/50x30.png?text=MasterCard" alt="MasterCard" />
            <img src="https://via.placeholder.com/50x30.png?text=Diners+Club" alt="Diners Club" />
            <img src="https://via.placeholder.com/50x30.png?text=AMEX" alt="AMEX" />
            <img src="https://via.placeholder.com/50x30.png?text=Paytm" alt="Paytm" />
            <img src="https://via.placeholder.com/50x30.png?text=Maestro" alt="Maestro" />
            <img src="https://via.placeholder.com/50x30.png?text=PayU" alt="PayU" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

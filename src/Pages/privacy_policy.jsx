// src/Pages/PrivacyPolicy.jsx

import React from 'react';

const PrivacyPolicy = () => {
  const styles = {
    container: {
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px',
      backgroundColor: '#ffffff',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      fontFamily: 'Arial, sans-serif',
    },
    header: {
      fontSize: '2.5em',
      marginBottom: '20px',
      textAlign: 'center',
    },
    sectionHeader: {
      fontSize: '2em',
      marginTop: '20px',
    },
    subHeader: {
      fontSize: '1.5em',
      marginTop: '15px',
    },
    paragraph: {
      fontSize: '1em',
      color: '#555',
      lineHeight: '1.6',
    },
    list: {
      paddingLeft: '20px',
      margin: '10px 0',
    },
    listItem: {
      listStyleType: 'disc',
      marginBottom: '5px',
    },
    link: {
      color: '#007bff',
      textDecoration: 'none',
    },
    linkHover: {
      textDecoration: 'underline',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Privacy Policy</h1>
      <p style={styles.paragraph}>
        Welcome to our Privacy Policy. Your privacy is critically important to us.
      </p>

      <h2 style={styles.sectionHeader}>Personal Identification Information</h2>
      <p style={styles.paragraph}>
        When you register or use our services, we collect personal details such as your name, email address, phone number, and date of birth.
      </p>
      <h3 style={styles.subHeader}>Phone Numbers</h3>
      <p style={styles.paragraph}>
        We collect your phone number specifically to send you the download link for our app or for other service-related communications.
      </p>
      <h3 style={styles.subHeader}>Financial Information</h3>
      <p style={styles.paragraph}>
        When processing payments, we may collect payment details such as credit card information or bank account details to facilitate transactions.
      </p>

      <h2 style={styles.sectionHeader}>Usage Data</h2>
      <p style={styles.paragraph}>
        We gather data on how you interact with our platform, including your gaming activities, preferences, pages visited, and time spent on the site.
      </p>

      <h2 style={styles.sectionHeader}>Device and Connection Information</h2>
      <p style={styles.paragraph}>
        Information about your device, operating system, browser type, and internet connection is collected to enhance your experience and security.
      </p>

      <h2 style={styles.sectionHeader}>Automatic Data Collection</h2>
      <p style={styles.paragraph}>
        We automatically collect data using cookies and similar technologies to track your activities and improve our services.
      </p>

      <h2 style={styles.sectionHeader}>Third-Party Service Providers</h2>
      <p style={styles.paragraph}>
        We share your information with trusted partners who assist us in operating our platform, processing payments, and delivering services. These partners include payment processors, cloud service providers, and customer support platforms. They are bound by confidentiality obligations and are prohibited from using your data for any other purpose.
      </p>

      <h2 style={styles.sectionHeader}>Legal Compliance</h2>
      <p style={styles.paragraph}>
        We may disclose your data to comply with legal obligations, enforce our policies, or protect our rights and safety. This includes responding to lawful requests by public authorities and meeting regulatory requirements.
      </p>

      <h2 style={styles.sectionHeader}>Business Transfers</h2>
      <p style={styles.paragraph}>
        In the event of a merger, acquisition, or sale of assets, your personal data may be transferred as part of the business operations. We will notify you before your personal data becomes subject to a different privacy policy.
      </p>

      <h2 style={styles.sectionHeader}>Security Measures</h2>
      <h3 style={styles.subHeader}>Encryption</h3>
      <p style={styles.paragraph}>
        We employ industry-standard encryption (such as SSL/TLS) to protect your data during transmission and storage, ensuring that your information is secure from unauthorized access.
      </p>
      <h3 style={styles.subHeader}>Access Control</h3>
      <p style={styles.paragraph}>
        Only authorized personnel have access to your personal information. We implement strict access controls and authentication procedures to safeguard your data from unauthorized access.
      </p>
      <h3 style={styles.subHeader}>Regular Security Audits</h3>
      <p style={styles.paragraph}>
        We conduct regular audits and assessments to ensure our security measures are up to date and effective. These include vulnerability scans, penetration testing, and compliance checks.
      </p>
      <h3 style={styles.subHeader}>User Responsibilities</h3>
      <p style={styles.paragraph}>
        Users are responsible for maintaining the confidentiality of their account credentials and should notify us immediately of any unauthorized use or security breach.
      </p>

      <h2 style={styles.sectionHeader}>Your Rights</h2>
      <h3 style={styles.subHeader}>Access and Correction</h3>
      <p style={styles.paragraph}>
        You can request access to your personal data and ask us to correct any inaccuracies. Contact us at [support email] to make these requests.
      </p>
      <h3 style={styles.subHeader}>Account Deletion</h3>
      <p style={styles.paragraph}>
        You may request the deletion of your account and personal information at any time, subject to legal and regulatory requirements. Submit your request through your account settings or contact us at [support email].
      </p>
      <h3 style={styles.subHeader}>Data Portability</h3>
      <p style={styles.paragraph}>
        You have the right to request a copy of your data in a commonly used and machine-readable format. Contact us at [support email] to obtain a copy of your data.
      </p>
      <h3 style={styles.subHeader}>Objection and Restriction</h3>
      <p style={styles.paragraph}>
        You may object to or request restrictions on the processing of your data under certain circumstances. Contact us at [support email] for assistance with these requests.
      </p>
      <h3 style={styles.subHeader}>Withdraw Consent</h3>
      <p style={styles.paragraph}>
        Where we rely on your consent to process your data, you can withdraw this consent at any time without affecting the lawfulness of processing based on consent before its withdrawal. Update your preferences in your account settings or contact us at [genpro@support.com].
      </p>

      <h2 style={styles.sectionHeader}>Cookies and Tracking</h2>
      <h3 style={styles.subHeader}>Cookies</h3>
      <p style={styles.paragraph}>
        We use cookies to enhance your experience, remember your preferences, and analyze site usage. Cookies are small data files stored on your device that help us recognize you and improve your interaction with our platform.
      </p>
      <h3 style={styles.subHeader}>Types of Cookies Used</h3>
      <p style={styles.paragraph}>
        <ul style={styles.list}>
          <li style={styles.listItem}>**Session Cookies**: Temporary cookies that expire when you close your browser.</li>
          <li style={styles.listItem}>**Persistent Cookies**: Remain on your device until deleted or until they expire.</li>
          <li style={styles.listItem}>**Analytical Cookies**: Used to understand user behavior and improve site functionality.</li>
        </ul>
      </p>
      <h3 style={styles.subHeader}>Third-Party Analytics</h3>
      <p style={styles.paragraph}>
        We use third-party analytics tools, such as Google Analytics, to understand how you use our services and improve them accordingly. These tools may collect information about your use of the site and provide us with aggregated data.
      </p>
      <h3 style={styles.subHeader}>Advertising</h3>
      <p style={styles.paragraph}>
        Cookies may be used to deliver personalized advertisements and measure their effectiveness. We partner with third-party advertisers to display ads based on your interests and interactions on our platform.
      </p>
      <h3 style={styles.subHeader}>Managing Cookies</h3>
      <p style={styles.paragraph}>
        You can manage cookie settings through your browser or opt-out of certain data collection practices by visiting [link to cookie management tool or detailed instructions].
      </p>

      <h2 style={styles.sectionHeader}>Privacy Management</h2>
      <h3 style={styles.subHeader}>Privacy Dashboard</h3>
      <p style={styles.paragraph}>
        We provide tools in your account settings to help you manage your privacy preferences and control how your information is used. You can access and adjust your settings at any time.
      </p>
      <h3 style={styles.subHeader}>Opt-Out Options</h3>
      <p style={styles.paragraph}>
        You can opt out of certain data collection and usage practices, such as marketing communications and personalized ads. Follow the instructions provided in the communications or adjust your settings in your account preferences.
      </p>

      <h2 style={styles.sectionHeader}>Policy Updates</h2>
      <h3 style={styles.subHeader}>Updates</h3>
      <p style={styles.paragraph}>
        We may update this policy periodically to reflect changes in our practices or legal requirements. We will notify you of significant changes via email or prominent notices on our platform.
      </p>
      <h3 style={styles.subHeader}>User Notifications</h3>
      <p style={styles.paragraph}>
        In the event of substantial changes to this policy, we will notify you through email or prominent notices on our platform. You can always find the latest version of our privacy policy on our website at [privacy policy link].
      </p>

      <h2 style={styles.sectionHeader}>Contact Information</h2>
      <h3 style={styles.subHeader}>Support Team</h3>
      <p style={styles.paragraph}>
        If you have any questions or concerns about your privacy, please contact our support team at <a href="mailto:genpro@support.com" style={styles.link}>genpro@support.com</a>.
      </p>
      <h3 style={styles.subHeader}>Mailing Address</h3>
      <p style={styles.paragraph}>
        GEN PRO Fantasy Sports India, [GURUGRAM HARYANA 122001]
      </p>
    </div>
  );
};

export default PrivacyPolicy;

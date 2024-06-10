import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    font-family: 'Arial', sans-serif;
    color: #333;
    line-height: 1.6;
    @media (max-width: 768px) {
        padding: 15px;
    }
`;

const Title = styled.h1`
    font-size: 2.5em;
    color: #2c3e50;
    text-align: center;
    margin-bottom: 20px;
    @media (max-width: 768px) {
        font-size: 2em;
    }
`;

const SectionTitle = styled.h2`
    font-size: 1.5em;
    color: #34495e;
    margin-top: 20px;
    margin-bottom: 10px;
    @media (max-width: 768px) {
        font-size: 1.2em;
    }
`;

const List = styled.ul`
    list-style-type: disc;
    padding-left: 20px;
    margin-bottom: 20px;
`;

const ListItem = styled.li`
    margin-bottom: 10px;
`;

const Strong = styled.strong`
    color: #2c3e50;
`;

const Paragraph = styled.p`
    margin-bottom: 20px;
`;

const Highlight = styled.span`
    background-color: #f1c40f;
    padding: 2px 4px;
    border-radius: 4px;
`;

const PrivacyPolicy = () => {
    return (
        <Container>
            <Title>Game Privacy Policy</Title>
            <Paragraph>Welcome to <Highlight>GEN PRO Fantasy Sports India</Highlight>. Your privacy and security are our top priorities.</Paragraph>
            <Paragraph>
                This Game Privacy Policy outlines how we collect, use, and protect your personal information on our real-money fantasy sports platform. 
                We are committed to ensuring that your personal data is handled responsibly and securely.
            </Paragraph>

            <SectionTitle>1. Information We Collect</SectionTitle>
            <List>
                <ListItem><Strong>Personal Identification Information:</Strong> When you register or use our services, we may collect personal details such as your name, email address, phone number, and date of birth.</ListItem>
                <ListItem><Strong>Usage Data:</Strong> We gather data on how you interact with our platform, including your gaming activities, preferences, and time spent on the site.</ListItem>
                <ListItem><Strong>Device and Connection Information:</Strong> Information about your device, operating system, and internet connection may be collected to enhance your experience and security.</ListItem>
            </List>

            <SectionTitle>2. How We Use Your Information</SectionTitle>
            <List>
                <ListItem><Strong>To Provide Services:</Strong> We use your information to create and manage your account, process transactions, and provide customer support.</ListItem>
                <ListItem><Strong>To Enhance User Experience:</Strong> We analyze your usage data to improve our services, tailor content, and offer personalized recommendations.</ListItem>
                <ListItem><Strong>To Ensure Security:</Strong> Your data helps us to verify your identity, prevent fraud, and maintain the security of our platform.</ListItem>
                <ListItem><Strong>To Communicate with You:</Strong> We use your contact information to send important updates, offers, and notifications related to your account and our services.</ListItem>
            </List>

            <SectionTitle>3. Sharing Your Information</SectionTitle>
            <List>
                <ListItem><Strong>Third-Party Service Providers:</Strong> We may share your information with trusted partners who assist us in operating our platform, processing payments, and delivering services.</ListItem>
                <ListItem><Strong>Legal Compliance:</Strong> We may disclose your data to comply with legal obligations, enforce our policies, or protect our rights and safety.</ListItem>
                <ListItem><Strong>Business Transfers:</Strong> In the event of a merger, acquisition, or sale of assets, your personal data may be transferred as part of the business operations.</ListItem>
            </List>

            <SectionTitle>4. Data Security</SectionTitle>
            <List>
                <ListItem><Strong>Encryption:</Strong> We employ industry-standard encryption to protect your data during transmission and storage.</ListItem>
                <ListItem><Strong>Access Control:</Strong> Only authorized personnel have access to your personal information, and we implement strict controls to safeguard your data.</ListItem>
                <ListItem><Strong>Regular Security Audits:</Strong> We conduct regular audits and assessments to ensure our security measures are up to date and effective.</ListItem>
            </List>

            <SectionTitle>5. User Rights</SectionTitle>
            <List>
                <ListItem><Strong>Access and Correction:</Strong> You can request access to your personal data and ask us to correct any inaccuracies.</ListItem>
                <ListItem><Strong>Account Deletion:</Strong> You may request the deletion of your account and personal information at any time, subject to legal and regulatory requirements.</ListItem>
                <ListItem><Strong>Data Portability:</Strong> You have the right to request a copy of your data in a commonly used and machine-readable format.</ListItem>
            </List>

            <SectionTitle>6. Cookies and Tracking Technologies</SectionTitle>
            <List>
                <ListItem><Strong>Cookies:</Strong> We use cookies to enhance your experience, remember your preferences, and analyze site usage.</ListItem>
                <ListItem><Strong>Third-Party Analytics:</Strong> We may use third-party analytics tools to understand how you use our services and improve them accordingly.</ListItem>
                <ListItem><Strong>Advertising:</Strong> Cookies may be used to deliver personalized advertisements and measure their effectiveness.</ListItem>
            </List>

            <SectionTitle>7. Transparency and User Control</SectionTitle>
            <List>
                <ListItem><Strong>Privacy Dashboard:</Strong> We provide tools to help you manage your privacy preferences and control how your information is used.</ListItem>
                <ListItem><Strong>Opt-Out Options:</Strong> You can opt out of certain data collection and usage practices, such as marketing communications and personalized ads.</ListItem>
            </List>

            <SectionTitle>8. Changes to This Policy</SectionTitle>
            <List>
                <ListItem><Strong>Updates:</Strong> We may update this policy periodically to reflect changes in our practices or legal requirements. We will notify you of significant changes and provide the updated policy on our website.</ListItem>
                <ListItem><Strong>User Notifications:</Strong> You will be notified through email or prominent notices on our platform in the event of substantial changes.</ListItem>
            </List>

            <SectionTitle>9. Contact Us</SectionTitle>
            <Paragraph><Strong>Support Team:</Strong> If you have any questions or concerns about your privacy, please contact our support team at <Highlight>genpro@support.com</Highlight>.</Paragraph>
            <Paragraph>Disclaimer: This policy is intended for users in India and complies with local privacy regulations regarding the handling of personal and financial data.</Paragraph>
        </Container>
    );
}

export default PrivacyPolicy;

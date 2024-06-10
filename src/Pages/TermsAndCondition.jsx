import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    font-family: 'Arial', sans-serif;
    color: #333;
    line-height: 1.6;
    background: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
    font-size: 2.5em;
    color: #2c3e50;
    text-align: center;
    margin-bottom: 20px;
`;

const Subtitle = styled.h2`
    font-size: 1.5em;
    color: #34495e;
    margin-top: 20px;
    margin-bottom: 10px;
`;

const List = styled.ul`
    list-style-type: none;
    padding-left: 0;
    margin-bottom: 20px;
`;

const ListItem = styled.li`
    margin-bottom: 10px;
`;

const Paragraph = styled.p`
    margin-bottom: 20px;
`;

const TermsAndConditions = () => {
    return (
        <Container>
            <Title>Welcome to Fantasy Sports India!</Title>
            <Paragraph>
                These Terms & Conditions govern your use of our fantasy sports platform where users can enjoy non-monetary contests. 
                By accessing or using our services, you agree to comply with these terms. Please read them carefully.
            </Paragraph>

            <Subtitle>1. Eligibility</Subtitle>
            <List>
                <ListItem><strong>Age Requirement:</strong> You must be at least 18 years old to participate in contests on our platform.</ListItem>
                <ListItem><strong>Jurisdiction:</strong> Our services are intended for users residing in India. Access from other regions may be restricted or prohibited.</ListItem>
            </List>

            <Subtitle>2. Account Registration</Subtitle>
            <List>
                <ListItem><strong>Accurate Information:</strong> You must provide accurate and complete information during registration. You are responsible for maintaining the confidentiality of your account credentials.</ListItem>
                <ListItem><strong>Account Management:</strong> You agree to keep your account information up-to-date and to notify us of any unauthorized use of your account.</ListItem>
            </List>

            <Subtitle>3. Use of the Platform</Subtitle>
            <List>
                <ListItem><strong>Non-Monetary Contests:</strong> Our platform offers non-monetary contests and prizes. We do not support or facilitate any form of gambling or monetary betting.</ListItem>
                <ListItem><strong>User Conduct:</strong> You agree to use our services in a manner that is lawful and respectful to others.</ListItem>
            </List>

            <Subtitle>4. Privacy and Data Protection</Subtitle>
            <List>
                <ListItem><strong>Data Usage:</strong> We collect and use your data as described in our Privacy Policy. Your data is protected and will not be shared with third parties without your consent.</ListItem>
                <ListItem><strong>Cookies:</strong> Our website uses cookies to enhance your user experience. By using our services, you agree to our use of cookies.</ListItem>
            </List>

            <Subtitle>5. Limitation of Liability</Subtitle>
            <List>
                <ListItem><strong>No Warranty:</strong> Our services are provided "as is" without warranties of any kind. We do not guarantee uninterrupted access or error-free functionality.</ListItem>
                <ListItem><strong>Limited Liability:</strong> We are not liable for any damages arising from your use of our platform, to the fullest extent permitted by law.</ListItem>
            </List>

            <Subtitle>Contact Us</Subtitle>
            <Paragraph>
                <strong>Support Team:</strong> If you have any questions or concerns about these Terms & Conditions, please contact our support team at genpro@support.com.
            </Paragraph>
            <Paragraph>
                <strong>Disclaimer:</strong> This policy is intended for users in India and complies with local regulations regarding online gaming and data protection.
            </Paragraph>
        </Container>
    );
};

export default TermsAndConditions;

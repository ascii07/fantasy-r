import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    font-family: 'Arial', sans-serif;
    color: #333;
    line-height: 1.6;
`;

const Title = styled.h1`
    font-size: 2.5em;
    color: #2c3e50;
    text-align: center;
    margin-bottom: 20px;
`;

const Paragraph = styled.p`
    margin-bottom: 20px;
`;

const Disclaimer = () => {
    return (
        <Container>
            <Title>DISCLAIMER FOR GEN PRO</Title>
            <Paragraph>
                The information provided on the Gen Pro Fantasy Sports app is for general informational purposes only. We make every effort to ensure the accuracy and reliability of the information displayed on our platform, but we cannot guarantee its completeness or timeliness.
            </Paragraph>
            <Paragraph>
                Gen Pro is not responsible for any errors or omissions in the information provided, nor for any actions taken based on the information found on our app. It is essential to note that the content available on Gen Pro should not be considered as legal, financial, or professional advice.
            </Paragraph>
            <Paragraph>
                Participating in fantasy sports involves an element of risk, and users should exercise caution when making decisions based on the information available on our platform. Gen Pro encourages users to conduct their own research and consult with professionals before making any financial or legal decisions.
            </Paragraph>
            <Paragraph>
                Gen Pro does not promote or endorse any form of gambling or illegal activities. Our platform is designed purely for entertainment purposes, and any references to actual teams, players, or contests are purely coincidental.
            </Paragraph>
            <Paragraph>
                Gen Pro cannot be held liable for any losses or damages incurred while using our app. Users are responsible for their own decisions and actions while participating in fantasy sports games and should always comply with local laws and regulations.
            </Paragraph>
            <Paragraph>
                By using the Gen Pro Fantasy Sports app, you acknowledge that you have read and understood the disclaimer stated above. You agree to hold Gen Pro and its affiliates harmless from any claims, damages, or losses that may arise from your use of the app.
            </Paragraph>
            <Paragraph>
                Please note that this disclaimer may be subject to change without prior notice. It is recommended to review the disclaimer periodically for any updates or modifications.
            </Paragraph>
        </Container>
    );
}

export default Disclaimer;

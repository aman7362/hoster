import React from 'react';
import { Container, Typography, Paper, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const PrivacyPolicy = () => {
    const navigate = useNavigate();

    const policyStyles = {
        padding: '40px',
        backgroundColor: '#20232A',
        color: '#F1F1F1',
        borderRadius: '20px',
        margin: '20px 0',
        boxShadow: '0 18px 36px rgba(0, 0, 0, 0.5)',
    };

    return (
        <Container maxWidth="md" style={{ marginTop: '40px' }}>
            <Paper style={policyStyles}>
                <Typography variant="h4" gutterBottom>Privacy Policy</Typography>
                <Typography variant="body1" paragraph>
                    This Privacy Policy describes how we handle your personal information. We collect, use, and share
                    personal information to help the Yuri application work and to keep it safe.
                </Typography>
                <Typography variant="h6">Information We Collect</Typography>
                <Typography variant="body1" paragraph>
                    We collect your information when you register, sign in, or use our application services. The information gathered
                    includes your name, email address, and usage data.
                </Typography>
                <Typography variant="h6">How We Use Information</Typography>
                <Typography variant="body1" paragraph>
                    The information we collect is used to improve our application's functionality, to contact you about your
                    account, to provide customer service, and for research.
                </Typography>
                <Typography variant="h6">Sharing of Information</Typography>
                <Typography variant="body1" paragraph>
                    We do not share your personal information with third parties without your consent, except as necessary
                    to provide you with the services and to comply with the law.
                </Typography>
                <Typography variant="h6">Data Security</Typography>
                <Typography variant="body1" paragraph>
                    We implement security measures to protect your personal information against unauthorized access and
                    disclosure.
                </Typography>
                <Typography variant="h6">Contact Us</Typography>
                <Typography variant="body1" paragraph>
                    If you have any questions or concerns about our Privacy Policy, please contact us at support@yuriapp.com.
                </Typography>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => navigate(-1)}
                    style={{ marginTop: '20px' }}
                >
                    Back
                </Button>
            </Paper>
        </Container>
    );
}

export default PrivacyPolicy;
import React, { useEffect } from 'react';
import { Container, CssBaseline, Typography, Button, createTheme, ThemeProvider, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const theme = createTheme({
    palette: {
        mode: 'dark',
        background: { default: '#0D1117' },
    },
});

const DocumentationPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container maxWidth="md" style={{ marginTop: '20px', textAlign: 'center' }}>
                <Paper style={{ padding: '20px', backgroundColor: 'rgba(0, 0, 0, 0.7)', borderRadius: '10px' }} data-aos="fade-up">
                    <Typography variant="h4" gutterBottom>
                        Documentation
                    </Typography>
                    <Typography variant="body1" paragraph>
                        N/A
                    </Typography>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG0aJ-KoYfAAKCTDspIXgXFYNLtRFgMHKHgA&s"
                        alt="Documentation"
                        style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
                        loading="lazy"
                    />
                    <Button
                        variant="contained"
                        color="secondary"
                        style={{ marginTop: '20px' }}
                        onClick={() => navigate('/')}
                    >
                        Back to Home
                    </Button>
                </Paper>
                <footer style={{ marginTop: '30px', color: '#FFFFFF', textAlign: 'center' }}>
                    © 2023 AKRITI Inc. <a href='/copyright?'>All rights reserved.</a> | <a href="/privacy-policy" style={{ color: '#FF7F50' }}>Privacy Policy</a>
                </footer>
            </Container>
        </ThemeProvider>
    );
};

export default DocumentationPage;
import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, TextField, Button, Container, CssBaseline, createTheme, ThemeProvider, Paper, Slide } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: { main: '#3A3D40' },
        secondary: { main: '#FF7F50' },
        background: { default: '#0D1117', paper: '#20232A' },
        text: { primary: '#F1F1F1' },
    },
    typography: {
        fontFamily: "'Montserrat', sans-serif",
        h6: { fontWeight: 700, letterSpacing: '1px' },
        h5: { fontWeight: 600 },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    borderRadius: '12px',
                    fontSize: '1.1rem',
                    padding: '10px 20px',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                        backgroundColor: '#FF7F50',
                        transform: 'scale(1.05)',
                    },
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiInput-underline:before': {
                        borderBottomColor: '#FF7F50',
                    },
                    '& .MuiInput-underline:after': {
                        borderBottomColor: '#3A3D40',
                    },
                },
            },
        },
    },
});

const HomePage = () => {
    const [roomCode, setRoomCode] = useState('');
    const [captchaInput, setCaptchaInput] = useState('');
    const [generatedCaptcha, setGeneratedCaptcha] = useState('');
    const [showCaptcha, setShowCaptcha] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({ duration: 1000 });
        generateCaptcha();

        // Simulate falling squares  
        const generateShapes = () => {
            const container = document.getElementById('shape-container');
            const shapes = [];
            for (let i = 0; i < 30; i++) {
                const shape = document.createElement('div');
                const size = Math.random() * 20 + 10;
                shape.style.width = `${size}px`;
                shape.style.height = `${size}px`;
                shape.style.border = '2px solid rgba(255, 255, 255, 0.2)';
                shape.style.position = 'absolute';
                shape.style.top = `${Math.random() * 100}%`;
                shape.style.left = `${Math.random() * 100}%`;
                shape.style.borderRadius = '50%';
                shape.style.animation = `falling ${Math.random() * 5 + 5}s linear infinite`;
                container.appendChild(shape);
                shapes.push(shape);
            }
        };

        setTimeout(generateShapes, 1000);
    }, []);

    const generateCaptcha = () => {
        const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const captchaLength = 6;
        let captcha = '';
        for (let i = 0; i < captchaLength; i++) {
            captcha += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        setGeneratedCaptcha(captcha);
    };

    const handleFormSubmit = (ev) => {
        ev.preventDefault();
        if (captchaInput === generatedCaptcha) {
            navigate(`/rooms/${roomCode}`);
        } else {
            alert('Captcha does not match. Please try again.');
            setCaptchaInput('');
            generateCaptcha();
        }
    };

    const animatedBackgroundStyles = {
        background: 'linear-gradient(135deg, #1F1C2C, #928DAB)',
        backgroundSize: '180% 180%',
        animation: 'gradientShift 20s ease infinite',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        position: 'relative',
        overflow: 'hidden',
    };

    const floatingFormStyles = {
        padding: '40px',
        backgroundColor: '#20232A',
        boxShadow: '0 18px 36px rgba(0, 0, 0, 0.5)',
        borderRadius: '20px',
        marginTop: '40px',
        animation: 'float 6s ease-in-out infinite',
    };

    const gradientInputStyle = {
        background: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '8px',
        padding: '10px',
        margin: '20px 0',
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div style={animatedBackgroundStyles}>
                <style>{`  
                    @keyframes gradientShift {  
                        0% { background-position: 0% 50%; }  
                        50% { background-position: 100% 50%; }  
                        100% { background-position: 0% 50%; }  
                    }  
                    @keyframes float {  
                        0%, 100% { transform: translateY(0); }  
                        50% { transform: translateY(-20px); }  
                    }  
                    @keyframes falling {  
                        0% { transform: translateY(-100%); }  
                        100% { transform: translateY(100vh); }  
                    }  
                `}</style>
                <div id="shape-container" style={{ position: 'absolute', width: '100%', height: '100%' }}></div>

                <AppBar position="static" color="primary" elevation={0} style={{ borderRadius: '10px' }}>
                    <Toolbar>
                        <Typography variant="h6" style={{ flexGrow: 1, textAlign: 'center', color: '#fff' }}>
                            Yuri
                        </Typography>
                        <Button color="inherit" onClick={() => navigate('/docs')}>DOCS</Button>  {/* Add the DOCS button here */}
                        <Button color="inherit" onClick={() => navigate('/scheduleMeetings?')}>Schedule A Meeting</Button>
                    </Toolbar>
                </AppBar>
                <Container maxWidth="sm" style={{ marginBottom: '30px', textAlign: 'center' }}>
                    <Paper style={floatingFormStyles} data-aos="fade-up">
                        <form onSubmit={handleFormSubmit}>
                            <Typography variant="h5" gutterBottom>
                                Enter Room Number
                            </Typography>
                            <div style={gradientInputStyle}>
                                <TextField
                                    fullWidth
                                    variant="standard"
                                    label="Room Number"
                                    value={roomCode}
                                    onChange={e => {
                                        setRoomCode(e.target.value);
                                        setShowCaptcha(!!e.target.value);
                                    }}
                                    required
                                    placeholder='Enter Room Number'
                                    margin="normal"
                                    InputLabelProps={{ style: { color: '#c1c1c1' } }}
                                    inputProps={{ style: { color: '#FFF', backgroundColor: 'transparent' }, 'aria-label': 'Room Number' }}
                                />
                            </div>
                            <Slide direction="down" in={showCaptcha} mountOnEnter unmountOnExit>
                                <div>
                                    <div style={{ marginTop: '20px', marginBottom: '10px', color: '#c1c1c1' }}>
                                        <Typography variant="body2">Enter the captcha:</Typography>
                                        <Typography variant="h6" style={{ letterSpacing: '3px', color: '#FF7F50' }}>{generatedCaptcha}</Typography>
                                    </div>
                                    <div style={gradientInputStyle}>
                                        <TextField
                                            fullWidth
                                            variant="standard"
                                            label="Captcha"
                                            value={captchaInput}
                                            onChange={e => setCaptchaInput(e.target.value)}
                                            required
                                            placeholder='Enter Captcha'
                                            margin="normal"
                                            InputLabelProps={{ style: { color: '#c1c1c1' } }}
                                            inputProps={{ style: { color: '#FFF', backgroundColor: 'transparent' }, 'aria-label': 'Captcha' }}
                                        />
                                    </div>
                                </div>
                            </Slide>
                            <Button
                                type='submit'
                                variant="contained"
                                color="secondary"
                                fullWidth
                                style={{ marginTop: '20px' }}
                                disabled={!roomCode || (showCaptcha && !captchaInput)}
                            >
                                Join
                            </Button>
                        </form>
                    </Paper>
                </Container>
                <Container maxWidth="sm" style={{ marginBottom: '50px', textAlign: 'center' }}>
                    <Paper style={{
                        padding: '30px',
                        boxShadow: '0 16px 32px rgba(0, 0, 0, 0.3)',
                        borderRadius: '20px',
                        backgroundColor: '#2C2C2C'
                    }} data-aos="fade-up" data-aos-delay="200">
                        <Typography variant="h5" gutterBottom>
                            About Yuri
                        </Typography>
                        <img
                            src="https://images.pexels.com/photos/4031710/pexels-photo-4031710.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="About Yuri"
                            style={{ width: '100%', height: 'auto', borderRadius: '10px', marginBottom: '15px' }}
                            loading="lazy"
                        />
                        <Typography variant="body1" style={{ color: '#c2c2c2' }}>
                            Yuri is a cutting-edge application crafted to effortlessly connect users to their desired virtual spaces. Whether for conferences, meetings, or casual chats, Yuri promises a sophisticated and seamless experience, enhanced by superior design and intuitive functionality and Please checkout our <a href='/privacy-policy'>Privacy Policy</a>.
                        </Typography>
                    </Paper>
                </Container>
            </div>
        </ThemeProvider>
    );
}

export default HomePage;

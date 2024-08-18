import React from 'react';
import { Container, Typography, Paper, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const EasterEgg = () => {
    const navigate = useNavigate();

    const easterEggStyles = {
        padding: '40px',
        backgroundColor: '#282C34',
        color: '#61DAFB',
        borderRadius: '20px',
        margin: '20px 0',
        boxShadow: '0 18px 36px rgba(0, 0, 0, 0.5)',
        textAlign: 'center',
    };

    return (
        <Container maxWidth="sm" style={{ marginTop: '40px' }}>
            <Paper style={easterEggStyles}>
                <Typography variant="h3" gutterBottom>🎉 Surprise! 🎉</Typography>
                <Typography variant="body1" paragraph>
                    You have discovered an Easter Egg! Congratulations! This hidden gem is here to reward your curious nature with a bit of fun.
                </Typography>
                <Typography variant="body1" paragraph>
                    Remember, life is full of mysteries and surprises. Keep exploring and you might find more hidden treasures!
                </Typography>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => navigate('/')}
                    style={{ marginTop: '20px' }}
                >
                    Go Back Home
                </Button>
            </Paper>
        </Container>
    );
}

export default EasterEgg;
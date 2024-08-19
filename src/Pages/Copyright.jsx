import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const CopyrightPage = () => {
    const navigate = useNavigate();

    return (
        <Container maxWidth="sm">
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                sx={{
                    bgcolor: '#0D1117', // Dark background color  
                    color: 'white', // Text color  
                    borderRadius: 2,
                    boxShadow: 3,
                    p: 4,
                    textAlign: 'center',
                    mt: 8,
                }}
            >
                <Typography variant="h4" gutterBottom>
                    © 2023 YURI
                </Typography>
                <Typography variant="body1" sx={{ mb: 4 }}>
                    All rights reserved. This software and its content are protected by copyright law.
                    Unauthorized usage, reproduction, or distribution of this material is strictly prohibited.
                </Typography>
                <Typography variant="body2" sx={{ mb: 4 }}>
                    This application is designed to enhance your productivity by facilitating effective meeting management.
                    Your efforts in using our application are appreciated, and we strive to continuously improve your experience.
                </Typography>
                <Button
                    variant="contained"
                    onClick={() => navigate('/')}
                    sx={{
                        bgcolor: '#ffff00', // Purple background for the button  
                        '&:hover': {
                            bgcolor: '#ffa500', // Darker purple on hover  
                        },
                    }}
                >
                    BACK TO HOME
                </Button>
            </Box>
        </Container>
    );
};

export default CopyrightPage;
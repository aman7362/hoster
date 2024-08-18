import React from 'react';
import { Container, Typography, Paper } from '@mui/material';

const OfflinePage = () => {
    const offlinePageStyles = {
        padding: '40px',
        textAlign: 'center',
        backgroundColor: '#343A40',
        color: '#DC3545',
        borderRadius: '20px',
        boxShadow: '0 18px 36px rgba(0, 0, 0, 0.5)',
    };

    return (
        <Container maxWidth="sm" style={{ marginTop: '40px' }}>
            <Paper style={offlinePageStyles}>
                <Typography variant="h3" gutterBottom>No Internet Connection</Typography>
                <Typography variant="body1" paragraph>
                    It looks like you’re not connected to the Internet. Please check your connection and try again.
                </Typography>
            </Paper>
        </Container>
    );
}

export default OfflinePage;
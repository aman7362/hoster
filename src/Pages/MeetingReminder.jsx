import React, { useState } from 'react';
import {
    Box, Button, TextField, CircularProgress, Snackbar, Dialog, DialogTitle, DialogContent, DialogActions
} from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import { useNavigate } from 'react-router-dom';

// Alert Component  
const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} {...props} />;
});

const MeetingReminder = () => {
    const navigate = useNavigate();
    const [openDialog, setOpenDialog] = useState(true);
    const [meetingName, setMeetingName] = useState('');
    const [meetingTime, setMeetingTime] = useState('');
    const [meetingLink, setMeetingLink] = useState('');
    const [loading, setLoading] = useState(false);
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [notification, setNotification] = useState('');

    const handleMeetingNameChange = (e) => {
        setMeetingName(e.target.value);
    };

    const handleMeetingTimeChange = (e) => {
        setMeetingTime(e.target.value);
    };

    const handleMeetingLinkChange = (e) => {
        setMeetingLink(e.target.value);
    };

    const handleCloseSnackbar = () => setOpenSnackbar(false);

    const scheduleMeeting = () => {
        setLoading(true);
        // Simulating API call  
        setTimeout(() => {
            setLoading(false);
            setNotification('Meeting scheduled successfully!');
            setOpenSnackbar(true);
            resetForm();
        }, 2000);
    };

    const resetForm = () => {
        setMeetingName('');
        setMeetingTime('');
        setMeetingLink('');
    };

    return (
        <Dialog open={openDialog} onClose={() => setOpenDialog(true)} maxWidth="sm" fullWidth>
            <DialogTitle>Schedule a Meeting</DialogTitle>
            <DialogContent>
                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    sx={{ bgcolor: '#1A1A1A', color: 'white', p: 2, borderRadius: 2 }}
                >
                    <TextField
                        label="Meeting Name"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={meetingName}
                        onChange={handleMeetingNameChange}
                        sx={{ backgroundColor: '#555', input: { color: 'white' }, label: { color: 'white' } }}
                    />
                    <TextField

                        type="datetime-local"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={meetingTime}
                        onChange={handleMeetingTimeChange}
                        sx={{ backgroundColor: '#555', input: { color: 'white' }, label: { color: 'white' } }}
                    />
                    <TextField
                        label="Meeting Link (Optional)"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={meetingLink}
                        onChange={handleMeetingLinkChange}
                        sx={{ backgroundColor: '#555', input: { color: 'white' }, label: { color: 'white' } }}
                    />
                </Box>
            </DialogContent>
            <DialogActions>
                <Button
                    variant="contained"
                    color="secondary"
                    style={{ marginTop: '20px' }}
                    onClick={() => navigate('/')}
                >
                    Back to Home
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={scheduleMeeting}
                    disabled={loading}
                    sx={{
                        backgroundColor: '#e63946',
                        '&:hover': { backgroundColor: '#d62839' },
                    }}
                >
                    {loading ? <CircularProgress size={24} color="inherit" /> : 'Schedule Meeting'}
                </Button>
            </DialogActions>

            <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
                    {notification}
                </Alert>
            </Snackbar>
        </Dialog>
    );
};

export default MeetingReminder;
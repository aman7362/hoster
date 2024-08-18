import { Routes, Route } from 'react-router-dom';
import { Snackbar, IconButton } from '@mui/material';
import WifiIcon from '@mui/icons-material/Wifi';

import { useEffect, useState } from 'react';

// MY IMPORTS  
import HomePage from "./Pages/home/index";
import RoomPage from './Pages/room';
import DocumentationPage from './Pages/DocumentationPage';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import EasterEgg from './Pages/EasterEgg';
import PageNotFound from './Pages/PageNotFound';
import OfflinePage from './Pages/OfflinePage'
import YuriRemind from './Pages/MeetingReminder';


function App() {
  const [isOnline, setIsOnline] = useState(true);
  const [showOnlineNotification, setShowOnlineNotification] = useState(false);

  useEffect(() => {
    setIsOnline(navigator.onLine);

    const handleOnline = () => {
      setIsOnline(true);
      setShowOnlineNotification(true);
    };

    const handleOffline = () => {
      setIsOnline(false);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const handleCloseNotification = () => {
    setShowOnlineNotification(false);
  };

  return (
    <div className="App">
      {!isOnline && <OfflinePage />}

      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={showOnlineNotification}
        autoHideDuration={3000}
        onClose={handleCloseNotification}
        message="Back Online!"
        action={
          <IconButton size="small" color="inherit" onClick={handleCloseNotification}>
            <WifiIcon />
          </IconButton>
        }
      />

      {isOnline && (
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='rooms/:roomId' element={<RoomPage />} />
          <Route path='/docs' element={<DocumentationPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path='/scheduleMeetings?' element={<YuriRemind />} />
          <Route path="/memo!" element={<EasterEgg />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
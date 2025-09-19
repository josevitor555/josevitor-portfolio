// react-router-dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AudioPlayer from './components/AudioPlayer';
import { useState } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import DevelopmentAlert from './components/ui/comp-314';

// Pages
import MyApp from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import WelcomePage from './pages/WelcomePage';

// import AuthPage from './pages/Auth'
// import NotFoundPage from './pages/NotFoundPage'

// Import CSS with sub-folder
import './App.css'

const App = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <LanguageProvider>
      <Router>
        <AudioPlayer isPlaying={isPlaying} />
        <DevelopmentAlert />
        <Routes>
          <Route path="/" element={<MyApp isPlaying={isPlaying} setIsPlaying={setIsPlaying} />} />
          <Route path="/auth" element={<AuthPage />} />

          {/* Page not found */}
          {/* <Route path="*" element={<NotFoundPage />} /> */}

          {/* Welcome Page */}
          <Route path="/welcome" element={<WelcomePage />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;

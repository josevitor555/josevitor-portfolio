// react-router-dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AudioPlayer from './components/AudioPlayer';
import { useState } from 'react';

// Pages
import MyApp from './pages/HomePage'
// import AuthPage from './pages/Auth'
// import NotFoundPage from './pages/NotFoundPage'

// Import CSS with sub-folder
import './App.css'

const App = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <Router>
      <AudioPlayer isPlaying={isPlaying} />
      <Routes>
        <Route path="/" element={<MyApp isPlaying={isPlaying} setIsPlaying={setIsPlaying} />} />
        {/* <Route path="/auth" element={<AuthPage />} /> */}

        {/* Page not found */}
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;

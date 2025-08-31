// react-router-dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Pages
import MyApp from './pages/HomePage'
// import AuthPage from './pages/Auth'
// import NotFoundPage from './pages/NotFoundPage'

// Import CSS with sub-folder
import './App.css'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MyApp />} />
        {/* <Route path="/auth" element={<AuthPage />} /> */}

        {/* Page not found */}
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;

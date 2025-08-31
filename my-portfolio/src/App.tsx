// react-router-dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// pages
import MyApp from './pages/MyApp'

// Import CSS with sub-folder
import './App.css'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MyApp />} />
      </Routes>
    </Router>
  )
}

export default App;
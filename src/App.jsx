import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './assets/components/Navbar'
import Home from './assets/pages/Home'
import Login from './assets/pages/Login';
import Signup from './assets/pages/Signup';
import Dashboard from './assets/pages/Career';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

function App() {
  return (
    <Router>
      <Navbar />
      {/* Aquí margen top igual a la altura de la navbar (usualmente ~64px) */}
      <Box sx={{ mt: '64px' }}>
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Container>
      </Box>
    </Router>
  );
}

export default App;
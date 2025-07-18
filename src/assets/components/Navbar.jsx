import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';

function Navbar() {
  return (
    <AppBar position="fixed"> {/* fixed para que quede pegada arriba */}
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          AcademicApp
        </Typography>
        <Button color="inherit" component={RouterLink} to="/">Home</Button>
        <Button color="inherit" component={RouterLink} to="/login">Login</Button>
        <Button color="inherit" component={RouterLink} to="/signup">Signup</Button>
        <Button color="inherit" component={RouterLink} to="/dashboard">Dashboard</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;

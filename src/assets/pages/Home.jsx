import { Typography, Box } from '@mui/material';

function Home() {
  return (
    <Box sx={{ textAlign: 'center', mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Bienvenido a la página de inicio
      </Typography>
      <Typography>
        Aquí va el contenido principal de tu app.
      </Typography>
    </Box>
  );
}

export default Home;

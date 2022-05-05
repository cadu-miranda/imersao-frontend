import { Box, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'fixed',
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.6)',
        width: '100vw',
        zIndex: 9999,
        height: '50px'
      }}
    >
      <Box
        component="img"
        src="/static/illustrations/footer-img.svg"
        sx={{
          backgroundSize: 'contain'
        }}
      />
    </Box>
  );
}

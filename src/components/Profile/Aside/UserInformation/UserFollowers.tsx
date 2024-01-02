import { Box, Typography } from '@mui/material';

export default function UserFollowers() {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{ gap: '1.25rem', width: '100%', mb: '2.5rem' }}
    >
      <Box display="flex" flexDirection="column" sx={{ gap: '0.375rem' }}>
        <Typography sx={{ fontSize: '1.5rem' }}>5</Typography>
        <Typography sx={{ fontSize: '1.25rem', color: '#FFFFFF80' }}>
          Seguindo
        </Typography>
      </Box>
      <Box display="flex" flexDirection="column" sx={{ gap: '0.375rem' }}>
        <Typography sx={{ fontSize: '1.5rem' }}>10</Typography>
        <Typography sx={{ fontSize: '1.25rem', color: '#FFFFFF80' }}>
          Seguidores
        </Typography>
      </Box>
    </Box>
  );
}

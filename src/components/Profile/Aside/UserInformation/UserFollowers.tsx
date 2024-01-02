import { Box, Typography } from '@mui/material';

export default function UserFollowers() {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{ gap: '1.25rem', width: '100%' }}
    >
      <Box>
        <Typography sx={{ fontSize: '1.5rem' }}>5</Typography>
      </Box>
      <Box>
        <Typography sx={{ fontSize: '1.5rem' }}>10</Typography>
      </Box>
    </Box>
  );
}

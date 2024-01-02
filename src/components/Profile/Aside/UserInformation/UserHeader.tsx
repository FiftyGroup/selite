import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { grey } from '@mui/material/colors';

export default function UserHeader() {
  return (
    <Box display="flex" sx={{ gap: '.75rem', mb: '2.5rem' }}>
      <Avatar
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
        sx={{ width: 136, height: 136 }}
      />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        justifyContent="center"
        sx={{ gap: '.25rem' }}
      >
        <Typography
          sx={{
            fontSize: '2.1875rem',
            fontWeight: 'medium',
          }}
          color={grey[100]}
          gutterBottom
        >
          Usuário
        </Typography>
        <Typography
          sx={{
            fontSize: '1.125rem',
            fontWeight: 'light',
            color: '#FFFFFF80',
          }}
          color={grey[100]}
          gutterBottom
        >
          @usuario
        </Typography>
      </Box>
    </Box>
  );
}

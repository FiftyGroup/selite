// import { Badge } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { grey } from '@mui/material/colors';
import BadgeBox from './BadgeBox';

export default function UserHeader() {
  return (
    <Box
      display="flex"
      justifyContent={'space-between'}
      alignItems={'flex-end'}
      sx={{
        gap: '.75rem',
        width: '100%',
        background:
          'linear-gradient(180deg, #A027FF 4.69%, rgba(0, 0, 0, 0.00) 100%);',
        padding: '40px',
        borderRadius: '0.625rem 0.625rem 0 0',
      }}
    >
      <Box display="flex" alignItems={'flex-end'} sx={{ gap: '10px' }}>
        <Avatar
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          sx={{ width: 136, height: 136, marginTop: '16px' }}
        />
        <Box
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
          sx={{ gap: '.25rem', marginBottom: '10px' }}
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
      <BadgeBox />
    </Box>
  );
}

import Box from '@mui/material/Box';
import UserHeader from './UserInformation/UserHeader';
import UserFollowers from './UserInformation/UserFollowers';
import Button from '@mui/material/Button';
import UserInformations from './UserInformation/UserInformations';

export default function Aside() {
  return (
    <Box
      display="flex"
      alignItems="center"
      flexDirection="column"
      sx={{
        p: '2.5rem',
        background:
          'linear-gradient(180deg, #A027FF 4.69%, rgba(0, 0, 0, 0.00) 100%);',
        borderRadius: '0.625rem',
        width: '35.75rem',
        gap: '2.5rem',
        height: '800px',
      }}
    >
      <UserHeader />
      <UserFollowers />
      <Button
        sx={{
          background: '#34184F',
          fontSize: '1rem',
          color: '#FFF',
          fontWeight: 400,
          padding: '.75rem 1.5rem',
          borderRadius: '.625rem',
          fontFamily: "'Poppins', sans-serif",
          letterSpacing: '0.2rem',
        }}
      >
        Editar perfil
      </Button>

      <UserInformations />
    </Box>
  );
}

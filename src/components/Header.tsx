import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import { lightBlue, grey } from '@mui/material/colors';
import NavLink from './NavLink/NavLink';

export default function Header() {
  return (
    <Box
      sx={{
        width: '70vw',
        height: '4.5rem',
        bgcolor: grey[900],
        mb: '3.75rem',
      }}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <div style={{ marginLeft: '1rem' }}>Logo</div>
      <NavLink />
      <Box
        sx={{ width: '8rem' }}
        display="flex"
        alignItems="center"
        justifyContent="space-around"
        marginRight=".5rem"
      >
        <p>Username</p>
        <Avatar sx={{ bgcolor: lightBlue[500] }}>J</Avatar>
      </Box>
    </Box>
  );
}

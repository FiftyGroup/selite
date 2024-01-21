import Box from '@mui/material/Box';
import UserHeader from './UserInformation/UserHeader';
import UserFollowers from './UserInformation/UserFollowers';

export default function Aside() {
  return (
    <Box
      display="flex"
      alignItems="center"
      flexDirection="column"
      sx={{
        background: '#1A1D1F',
        borderRadius: ' 0 0 0.625rem 0.625rem',
      }}
    >
      <UserHeader />
      <UserFollowers />
    </Box>
  );
}

import Box from '@mui/material/Box';
import UserHeader from './UserInformation/UserHeader';
import UserFollowers from './UserInformation/UserFollowers';

export default function Aside() {
  return (
    <Box
      display="flex"
      alignItems="flex-start"
      flexDirection="column"
      sx={{
        p: '2.5rem',
        background:
          'linear-gradient(180deg, #A027FF 4.69%, rgba(0, 0, 0, 0.00) 100%);',
        borderRadius: '0.625rem',
      }}
    >
      <UserHeader />
      <UserFollowers />
    </Box>
  );
}

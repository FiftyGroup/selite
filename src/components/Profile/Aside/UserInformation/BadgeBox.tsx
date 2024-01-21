import { Box } from '@mui/material';

export default function BadgeBox() {
  return (
    <Box
      display={'flex'}
      sx={{
        background: '#202225',
        height: 'max-content',
        gap: '16px',
        padding: '16px',
        borderRadius: '10px',
        marginBottom: '7px',
      }}
    >
      <img src="src\img\icons\Badge-Certified-Moderator.svg" alt="" />
      <img src="src\img\icons\Badge-Discord-Partner.svg" alt="" />
      <img src="src\img\icons\Badge-Discord-Staff.svg" alt="" />
      <img src="src\img\icons\Badge-Early-Bot-Dev.svg" alt="" />
    </Box>
  );
}

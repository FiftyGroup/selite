import { List, ListItem, ListItemText } from '@mui/material';

export default function UserInformations() {
  return (
    <List sx={{ width: '100%' }}>
      <ListItem
        sx={{
          display: 'flex',
          alignContent: 'center',
          justifyContent: 'space-between',
        }}
      >
        <ListItemText
          sx={{
            fontSize: '1.5rem',
          }}
          primary="Projects"
        />
        <ListItemText sx={{ textAlign: 'right' }} primary="5" />
      </ListItem>
      <ListItem
        sx={{
          display: 'flex',
          alignContent: 'center',
          justifyContent: 'center',
        }}
      >
        <ListItemText sx={{ width: 'max-content;' }} primary="Likes" />
        <ListItemText sx={{ textAlign: 'right' }} primary="25" />
      </ListItem>
    </List>
  );
}

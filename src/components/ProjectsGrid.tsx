import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { grey } from '@mui/material/colors';
import { CardMedia } from '@mui/material';

interface ProjectData {
  id: string;
  title: string;
  description: string;
  url: string;
}

export default function ProjectsGrid({
  projectsData,
}: {
  projectsData: ProjectData[] | [];
}) {
  return (
    <>
      <Box
        display="flex"
        flexWrap="wrap"
        sx={{ background: '#1A1D1F', padding: '17px 37px' }}
      >
        <Typography
          textAlign={'left'}
          fontSize={'22px'}
          fontWeight={'bold'}
          color={grey[100]}
          sx={{ paddingBottom: '20px' }}
        >
          Projects
        </Typography>
        <Grid container spacing={6}>
          {projectsData.map((projectData) => (
            <Grid item>
              <Card
                key={projectData.id}
                sx={{
                  width: '223px',
                  height: '343px',
                  bgcolor: grey[800],
                  padding: '1rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                }}
              >
                <CardContent sx={{ padding: '0' }}>
                  <CardMedia
                    sx={{
                      height: 148,
                      width: '198px',
                      background:
                        'linear-gradient(180deg, #000 0%, #A027FF 100%);',
                      marginBottom: '20px',
                      borderRadius: '7px',
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: '1.25rem',
                      fontWeight: 500,
                      paddingBottom: '4px',
                    }}
                    color={grey[100]}
                    gutterBottom
                  >
                    {projectData.title}
                  </Typography>
                  <Typography color={grey[100]}>
                    {projectData.description}
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{
                    justifyContent: 'center',
                    borderTop: '2px solid #1A1D1F',
                    width: '100%',
                  }}
                >
                  <Button size="small">Detalhes</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}

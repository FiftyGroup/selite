import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { grey } from '@mui/material/colors';

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
  const isDesktop = useMediaQuery('(min-width:600px)');

  return (
    <Box display="flex" flexWrap="wrap" sx={{ width: '70vw' }}>
      <Grid container spacing={2}>
        {projectsData.map((projectData) => (
          <Grid item xs={isDesktop ? 3 : 6}>
            <Card
              key={projectData.id}
              sx={{ maxWidth: 500, bgcolor: grey[800] }}
            >
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color={grey[100]}
                  gutterBottom
                >
                  {projectData.title}
                </Typography>
                <Typography color={grey[100]}>
                  {projectData.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Detalhes</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

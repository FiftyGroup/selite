import { useState } from 'react';
import Container from '@mui/material/Container';
import ProjectsGrid from '../components/ProjectsGrid';
import Aside from '../components/Profile/Aside/Aside';

export default function Profile() {
  const [projectsData /** setProjectsData*/] = useState([
    {
      id: '1',
      title: 'titulo 1',
      description: 'descricao 1',
      url: 'url1aaaaaaaa',
    },
    {
      id: '2',
      title: 'titulo 2',
      description: 'descricao 2',
      url: 'url2',
    },
    {
      id: '3',
      title: 'titulo 3',
      description: 'descricao 3',
      url: 'url3',
    },
    {
      id: '4',
      title: 'titulo 4',
      description: 'descricao 4',
      url: 'url4',
    },
    {
      id: '5',
      title: 'titulo 5',
      description: 'descricao 5',
      url: 'url5',
    },
  ]);

  return (
    <Container
      maxWidth="md"
      sx={{
        width: '70vw',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.25rem',
      }}
    >
      <Aside />
      <ProjectsGrid projectsData={projectsData} />
    </Container>
  );
}

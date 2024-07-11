import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../layout';
import { Coordenador } from '../pages/Coordenador';

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Coordenador /> },
        { path: 'professores', element: <Coordenador /> },
        { path: 'disciplinas', element: <Coordenador /> },
        { path: 'alunos', element: <Coordenador /> },
        { path: 'turmas', element: <Coordenador /> },
      ],
    },
  ],
  {
    basename: import.meta.env.VITE_BASE,
  },
);

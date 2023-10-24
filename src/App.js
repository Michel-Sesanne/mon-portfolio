import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import AppRoutes from './routes';
import { ListeProjetsProvider } from './components/ListeProjets/ListeProjets'

export default function App() {
  return (
    <ListeProjetsProvider>
      <Router>
        <Layout>
          <AppRoutes />
        </Layout>
      </Router>
    </ListeProjetsProvider>
  );
}
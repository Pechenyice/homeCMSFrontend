import './App.css';
import { ErrorsList, InfosList } from 'components';
import { useAuth } from 'hooks';
import { lazy, Suspense } from 'react';

const ClientApp = lazy(() => import('apps/ClientApp'));
const AdministratorApp = lazy(() => import('apps/AdministratorApp'));

function App() {
  const { isAdmin } = useAuth();

  return (
    <>
      <ErrorsList />
      <InfosList />
      <Suspense fallback={<></>}>{isAdmin ? <AdministratorApp /> : <ClientApp />}</Suspense>
    </>
  );
}

export default App;

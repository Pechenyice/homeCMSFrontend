import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { CommonBaseRoutesInfo, ErrorsList, InfosList, Profile } from 'components';
import { AuthProvider } from 'contexts/AuthContext';
import { ErrorsProvider } from 'contexts/ErrorsContext';
import { InfosProvider } from 'contexts/InfosContext';
import { useAuth } from 'hooks';
import { useEffect } from 'react';

function App() {
  const { isAuthenticated, isAdmin } = useAuth();

  useEffect(() => {
    console.log(isAuthenticated);
  }, [isAuthenticated]);

  return (
    <AuthProvider>
      <ErrorsProvider>
        <InfosProvider>
          <ErrorsList />
          <InfosList />

          <Router>
            <Routes>
              <Route path="/" element={<CommonBaseRoutesInfo />}>
                <Route path="profile" element={<Profile />} />
                <Route path="/login" element={<div>test</div>} />
              </Route>
            </Routes>
          </Router>
        </InfosProvider>
      </ErrorsProvider>
    </AuthProvider>
  );
}

export default App;

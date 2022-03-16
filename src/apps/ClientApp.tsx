import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CommonBaseRoutesInfo, Main, Profile } from 'components';
import NotFound from 'components/404/404';
import { useAuth, useInfos } from 'hooks';
import { useEffect } from 'react';

const ClientApp = () => {
  const { addInfo } = useInfos();
  const { profile } = useAuth();

  useEffect(() => {
    addInfo(`Добро пожаловать в систему Homekid, ${profile?.name}`);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="*" element={<NotFound />} />

        <Route path="/" element={<CommonBaseRoutesInfo />}>
          <Route path="/" element={<Main />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<div>test</div>} />
        </Route>
      </Routes>
    </Router>
  );
};

export default ClientApp;

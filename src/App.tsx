import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { CommonBaseRoutesInfo, Profile } from 'components';
import { AuthProvider } from 'contexts/AuthContext';
import { IEvent } from 'types/interfaces';

function App() {
  const [errors, setErrors] = useState<IEvent[]>([]);
  const [infos, setInfos] = useState<IEvent[]>([]);

  const addError = (text: IEvent['text']) => {
    const id = errors[errors.length - 1].id + 1;
    setErrors([...errors, { id, text }]);
  };

  const addInfo = (text: IEvent['text']) => {
    const id = infos[infos.length - 1].id + 1;
    setInfos([...infos, { id, text }]);
  };

  return (
    <AuthProvider onError={addError} onInfo={addInfo}>
      <Router>
        <Routes>
          <Route path="/" element={<CommonBaseRoutesInfo />}>
            <Route path="profile" element={<Profile />} />
            <Route path="/login" element={<div>test</div>} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;

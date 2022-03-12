import { Outlet } from 'react-router-dom';
import { Main, ErrorsList, Preloader } from 'components';

const CommonBaseRoutesInfo = () => {
  return (
    <>
      <Main />
      <Preloader />
      <ErrorsList />
      <Outlet />
    </>
  );
};

export default CommonBaseRoutesInfo;

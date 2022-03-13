import { Outlet } from 'react-router-dom';
import { Main, ErrorsList, Preloader } from 'components';

const CommonBaseRoutesInfo = () => {
  return (
    <>
      <Main />
      <Outlet />
    </>
  );
};

export default CommonBaseRoutesInfo;

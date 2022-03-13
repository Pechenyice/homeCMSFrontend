import { useErrors } from 'hooks';
import { Link } from 'react-router-dom';

export const Main = () => {
  const { addError } = useErrors();
  return (
    <>
      <div onClick={() => addError('from main')}>main page</div>
      <Link to={'/login'}>to login</Link>
    </>
  );
};

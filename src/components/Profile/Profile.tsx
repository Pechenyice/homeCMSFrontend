import styles from 'Profile.module.scss';
import { PageHeading } from 'components';
import { Action, Breadcrumbs, Layout } from 'components/kit';
import { useAuth } from 'hooks';
import { EditIcon } from 'assets/icons';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const { profile } = useAuth();
  const navigate = useNavigate();

  return (
    <Layout>
      <Breadcrumbs paths={[{ link: '/profile', alias: 'Профиль' }]} />
      <PageHeading
        heading="Профиль"
        status={profile?.status}
        action={
          <Action
            text="Редактировать"
            icon={<EditIcon />}
            onClick={() => navigate('/profile/edit')}
          />
        }
      />
      <div>profile</div>
    </Layout>
  );
};

export default Profile;

import { Action, Checkbox, H3, Input, Text, TextArea } from 'components/kit';
import { useAuth, useDistricts, useOrganizationTypes } from 'hooks';
import { getValueByIdFromInput } from 'utils';
import styles from './ProfilePage.module.scss';

export const ProfilePage = () => {
  const { profile, handleLogout } = useAuth();
  const { data: districts, isLoading: districtsLoading } = useDistricts();
  const { data: organizationTypes, isLoading: organizationTypesLoading } = useOrganizationTypes();

  return (
    <div className={styles.styled}>
      <div className={styles.half}>
        <Input value={profile?.name} heading="Краткое наименование организации" readOnly />
        <TextArea value={profile?.fullName} heading="Полное наименование организации" readOnly />
        {districtsLoading ? (
          <div>loading</div>
        ) : (
          <Input
            value={getValueByIdFromInput(districts, profile?.type)}
            heading="Тип организации"
            readOnly
          />
        )}
        {organizationTypesLoading ? (
          <div>loading</div>
        ) : (
          <Input
            value={getValueByIdFromInput(organizationTypes, profile?.district)}
            heading="Район"
            readOnly
          />
        )}
      </div>
      <div className={styles.half}>
        <Input value={profile?.supervisor} heading="Руководитель организации" readOnly />
        <Input
          value={profile?.responsible}
          heading="Ответственный за предоставление информации"
          readOnly
        />
        <div className={styles.group}>
          <H3>Об организации</H3>
          <Checkbox
            checked={profile?.educationLicense}
            readOnly
            label={<Text>Наличие лицензии на осуществление образовательной деятельности</Text>}
          />
          <Checkbox
            checked={profile?.medicineLicense}
            readOnly
            label={<Text>Наличие лицензии на осуществление медицинской деятельности</Text>}
          />
          <Checkbox
            checked={profile?.innovationGround}
            readOnly
            label={<Text>Наличие инновационной площадки в организации</Text>}
          />
        </div>
      </div>
      <div className={styles.footer}>
        <Action isDeleteMode text="Выйти из аккаунта" onClick={handleLogout} />
      </div>
    </div>
  );
};

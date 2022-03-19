import {
  Action,
  Checkbox,
  H3,
  Input,
  Skeleton,
  ESkeletonMode,
  Text,
  TextArea,
} from 'components/kit';
import { useAuth, useDistricts, useErrors, useOrganizationTypes } from 'hooks';
import { useEffect, useMemo } from 'react';
import { getValueByIdFromSelect } from 'utils';
import styles from './ProfilePage.module.scss';

export const ProfilePage = () => {
  const { profile, handleLogout } = useAuth();
  const { addError } = useErrors();

  const { data: districts, isLoading: districtsLoading, isError: districtsError } = useDistricts();
  const {
    data: organizationTypes,
    isLoading: organizationTypesLoading,
    isError: organizationTypesError,
  } = useOrganizationTypes();

  const { company } = useMemo(() => profile ?? { company: null }, [profile]);

  const memoizedDistrictsError = useMemo(() => districtsError, [districtsError]);
  const memoizedOrganizationTypesError = useMemo(
    () => organizationTypesError,
    [organizationTypesError]
  );

  useEffect(() => {
    if (memoizedDistrictsError)
      addError('Произошла ошибка во время загрузки районов, пожалуйста, перезагрузите страницу!');
    if (memoizedOrganizationTypesError)
      addError(
        'Произошла ошибка во время загрузки типов организации, пожалуйста, перезагрузите страницу!'
      );
  }, [memoizedDistrictsError, memoizedOrganizationTypesError]);

  return (
    <div className={styles.styled}>
      <div className={styles.half}>
        <Input value={company?.name} heading="Краткое наименование организации" readOnly />
        <TextArea value={company?.fullName} heading="Полное наименование организации" readOnly />
        {organizationTypesLoading ? (
          <Skeleton mode={ESkeletonMode.INPUT} withLoader heading="Тип организации" />
        ) : (
          <Input
            value={getValueByIdFromSelect(organizationTypes, company?.type)}
            heading="Тип организации"
            readOnly
          />
        )}
        {districtsLoading ? (
          <Skeleton mode={ESkeletonMode.INPUT} withLoader heading="Район" />
        ) : (
          <Input
            value={getValueByIdFromSelect(districts, company?.district)}
            heading="Район"
            readOnly
          />
        )}
      </div>
      <div className={styles.half}>
        <Input value={company?.supervisor} heading="Руководитель организации" readOnly />
        <Input
          value={company?.responsible}
          heading="Ответственный за предоставление информации"
          readOnly
        />
        <div className={styles.group}>
          <H3>Об организации</H3>
          <Checkbox
            checked={company?.educationLicense}
            readOnly
            label={<Text>Наличие лицензии на осуществление образовательной деятельности</Text>}
          />
          <Checkbox
            checked={company?.medicineLicense}
            readOnly
            label={<Text>Наличие лицензии на осуществление медицинской деятельности</Text>}
          />
          <Checkbox
            checked={company?.innovationGround}
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
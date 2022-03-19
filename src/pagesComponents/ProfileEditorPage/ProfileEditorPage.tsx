import {
  Action,
  Checkbox,
  H3,
  Input,
  Skeleton,
  ESkeletonMode,
  Text,
  TextArea,
  Select,
} from 'components/kit';
import { useAuth, useDistricts, useErrors, useOrganizationTypes } from 'hooks';
import { ChangeEvent, useEffect, useMemo, useState } from 'react';
import { IInput, IProfileState, IInputsState } from 'types/interfaces';
import { registerInput, textInputValidator } from 'utils';
import styles from './ProfileEditorPage.module.scss';

export const ProfileEditorPage = () => {
  const { profile, handleLogout } = useAuth();
  const { addError } = useErrors();

  const { company } = useMemo(() => profile ?? { company: null }, [profile]);

  const { data: districts, isLoading: districtsLoading, isError: districtsError } = useDistricts();
  const {
    data: organizationTypes,
    isLoading: organizationTypesLoading,
    isError: organizationTypesError,
  } = useOrganizationTypes();

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

  const [state, setState] = useState<IProfileState>({
    name: registerInput(company?.name ?? '', textInputValidator),
    fullName: registerInput(company?.fullName ?? '', textInputValidator),
    type: company?.type!,
    district: company?.district!,
    supervisor: registerInput(company?.supervisor ?? '', textInputValidator),
    responsible: registerInput(company?.responsible ?? '', textInputValidator),
    educationLicense: company?.educationLicense ?? false,
    medicineLicense: company?.medicineLicense ?? false,
    innovationGround: company?.innovationGround ?? false,
  });

  useEffect(() => {
    console.log(state);
  }, [state]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const [key, value] = [e.target.name, e.target.value];

    const validationResult = (state as unknown as IInputsState)[key].validator(value);

    setState({
      ...state,
      [key]: {
        ...(state as unknown as IInputsState)[key],
        value,
        error: {
          exist: !validationResult.success,
          text: validationResult.text,
        },
      },
    });
  };

  const bindCheckToggle = (name: string) => () => {
    setState({
      ...state,
      [name]: !(state as unknown as IInputsState)[name],
    });
  };

  const bindSelect = (name: string) => (option: number) => {
    setState({
      ...state,
      [name]: option,
    });
  };

  return (
    <div className={styles.styled}>
      <div className={styles.half}>
        <Input
          name="name"
          value={state.name.value}
          onChange={handleChange}
          heading="Краткое наименование организации"
        />
        <TextArea
          name="fullName"
          value={state.fullName.value}
          onChange={handleChange}
          heading="Полное наименование организации"
        />
        {organizationTypesLoading ? (
          <Skeleton mode={ESkeletonMode.INPUT} withLoader heading="Тип организации" />
        ) : organizationTypesError ? (
          <Input value={''} heading="Тип организации" readOnly />
        ) : (
          <Select
            value={state.type}
            options={organizationTypes!}
            heading="Тип организации"
            onChangeOption={bindSelect('type')}
          />
        )}
        {districtsLoading ? (
          <Skeleton mode={ESkeletonMode.INPUT} withLoader heading="Район" />
        ) : districtsError ? (
          <Input value={''} heading="Район" readOnly />
        ) : (
          <Select
            value={state.district}
            options={districts!}
            heading="Район"
            onChangeOption={bindSelect('district')}
          />
        )}
      </div>
      <div className={styles.half}>
        <Input
          name="supervisor"
          value={state.supervisor.value}
          onChange={handleChange}
          heading="Руководитель организации"
        />
        <Input
          name="responsible"
          value={state.responsible.value}
          onChange={handleChange}
          heading="Ответственный за предоставление информации"
        />
        <div className={styles.group}>
          <H3>Об организации</H3>
          <Checkbox
            checked={state.educationLicense}
            onToggle={bindCheckToggle('educationLicense')}
            label={<Text>Наличие лицензии на осуществление образовательной деятельности</Text>}
          />
          <Checkbox
            checked={state.medicineLicense}
            onToggle={bindCheckToggle('medicineLicense')}
            label={<Text>Наличие лицензии на осуществление медицинской деятельности</Text>}
          />
          <Checkbox
            checked={state.innovationGround}
            onToggle={bindCheckToggle('innovationGround')}
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

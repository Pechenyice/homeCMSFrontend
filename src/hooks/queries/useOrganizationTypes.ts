import { API } from 'api';
import { useQuery } from 'react-query';
import { organizationTypesKey } from './keys';

export const useOrganizationTypes = () =>
  useQuery(organizationTypesKey, API.queries.fetchOrganizationTypes);

import { API } from 'api';
import { useQuery } from 'react-query';
import { districtsKey } from './keys';

export const useDistricts = () => useQuery(districtsKey, API.queries.fetchDistricts);

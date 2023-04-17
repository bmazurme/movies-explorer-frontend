import { useSelector } from 'react-redux';

import { userSelector } from '../store/selectors';

export default function useUser() {
  const { data } = useSelector(userSelector);

  return data;
}

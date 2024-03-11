import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { add, remove } from '../slices/loading/slice';
import { get } from 'lodash';
import { loginActions } from '../slices/login';
import { profileActions } from '../slices/profile';
import { dropdownActions } from '../slices/dropdown';
import { manpowerActions } from '../slices/manpower';

const combinedActions = {
  login: loginActions,
  profile: profileActions,
  dropdown: dropdownActions,
  manpower: manpowerActions
}

const useAction = (path) => {
  const dispatch = useDispatch();

  return useCallback(async (...args) => {
    await dispatch(add(path))
    await dispatch(get(combinedActions, path)(...args))
    await dispatch(remove(path))
  }, [])
}

export default useAction
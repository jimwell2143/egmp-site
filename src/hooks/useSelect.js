import { useSelector } from 'react-redux';
import { get } from 'lodash';
import { loadingSelector } from '../slices/loading';
import { loginSelector } from '../slices/login';
import { profileSelector } from '../slices/profile';
import { dropdownSelector } from '../slices/dropdown';
import { manpowerSelector } from '../slices/manpower';

const combiedSelector = {
  login: loginSelector,
  loading: loadingSelector,
  profile: profileSelector,
  dropdown: dropdownSelector,
  manpower: manpowerSelector
}

const useSelect = (path, props) => {
  try{    
    return useSelector(state => get(combiedSelector, path)(state, props))      
  }catch(e){
    console.log(e, `selector ${path} not found`)
  }
}

export default useSelect


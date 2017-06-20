import * as cons from '../utils/constants';

export const setUserDetails = (data)=> {
	return {
		type: cons.SET_USER_DETAILS,
		data
	}
}
import * as cons from '../utils/constants';

const userDetails = (state={}, action)=> {
	switch(action.type){
		case cons.SET_USER_DETAILS:
			return {...state, ...action.data}
		default:
			return state;
	}
}

export default userDetails;
import { connect } from 'react-redux';
import User from '../../components/user/User';
import { setUserDetails } from '../../actions/actions';

const mapStateToProps = (state, ownProps)=> {
	return {
		userDetails: state.userDetails,
	}
}

const mapDispatchToProps = (dispatch)=> {
	return{
		setUserDetails: (data)=> {
			dispatch(setUserDetails(data))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(User);

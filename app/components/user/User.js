import React from 'react';

import { Container } from 'native-base';

import UserHeaderContainer from '../../containers/user/UserHeaderContainer';
import UserContentContainer from '../../containers/user/UserContentContainer';


export default()=>
	<Container>
		<UserHeaderContainer/>
		<UserContentContainer/>
	</Container>

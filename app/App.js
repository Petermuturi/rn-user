import React from 'react';

import { StyleProvider } from 'native-base';
import getTheme from '../native-base-theme/components';

import UserContainer from './containers/user/UserContainer';

export default ()=> 
	<StyleProvider style={getTheme()}>
     <UserContainer/>
   </StyleProvider>

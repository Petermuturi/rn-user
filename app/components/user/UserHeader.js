import React from 'react';

import { Text, Header, Left } from 'native-base';
import { Platform } from 'react-native';

export default()=>
	<Header>
		<Left>
			<Text style={{color: Platform.OS === 'android' ? '#fff' : "#000"}}>The User</Text>
		</Left>
	</Header>

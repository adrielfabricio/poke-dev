import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import colors from '../../constants/color';

const Loading: React.FC = () => (
	<View style={{ marginHorizontal: 10 }}>
		<ActivityIndicator size={'large'} color={colors.gray} />
	</View>
);

export default Loading;

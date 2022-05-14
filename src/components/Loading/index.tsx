import React from 'react';
import { ActivityIndicator } from 'react-native';
import colors from '../../constants/color';
import { Container } from './styles';

const Loading: React.FC = () => (
	<Container>
		<ActivityIndicator size={'large'} color={colors.gray} />
	</Container>
);

export default Loading;

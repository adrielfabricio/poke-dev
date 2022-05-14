import React from 'react';
import { View } from 'react-native';

import BackArrow from '../../assets/back_arrow.svg';
import { IHeaderProps } from './interfaces';
import {
	Container,
	TitleView,
	Title,
	ScreentTitleView,
	ScreenTitle,
	RightButton,
	goBackHeaderConfig,
} from './styles';

const Header: React.FC<IHeaderProps> = ({ props }) => {
	const canGoBack = !!props.back;

	function goBack() {
		props.navigation.goBack();
	}

	return (
		<Container>
			<TitleView canGoBack={canGoBack}>
				{canGoBack && (
					<RightButton onPress={goBack}>
						<BackArrow />
					</RightButton>
				)}
				<View style={goBackHeaderConfig.viewStyle}>
					<Title canGoBack={canGoBack}>PokeDev</Title>
				</View>
			</TitleView>
			<ScreentTitleView>
				<ScreenTitle>{props.options.headerTitle}</ScreenTitle>
			</ScreentTitleView>
		</Container>
	);
};

export default Header;

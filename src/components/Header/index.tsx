import React from 'react';
import { Pressable, View } from 'react-native';

import BackArrow from '../../assets/back_arrow.svg';
import { IHeaderProps } from './interface';
import {
	Container,
	TitleView,
	Title,
	ScreentTitleView,
	ScreenTitle,
} from './styles';

const Header: React.FC<IHeaderProps> = ({ props }) => {
	const canGoBack = !!props.back;

	function goBack() {
		props.navigation.goBack();
	}

	return (
		<Container>
			<TitleView>
				{canGoBack && (
					<Pressable
						onPress={goBack}
						style={{
							paddingHorizontal: 15,
							paddingVertical: 10,
						}}>
						<BackArrow />
					</Pressable>
				)}
				<View style={{ flex: 1 }}>
					<Title>PokeDev</Title>
				</View>
			</TitleView>
			<ScreentTitleView>
				<ScreenTitle>{props.options.headerTitle}</ScreenTitle>
			</ScreentTitleView>
		</Container>
	);
};

export default Header;

import React from 'react';

import { IHeaderProps } from './interface';
import {
	Container,
	TitleView,
	Title,
	ScreentTitleView,
	ScreenTitle,
} from './styles';

const Header: React.FC<IHeaderProps> = ({ props }) => {
	return (
		<Container>
			<TitleView>
				<Title>PokeDev</Title>
			</TitleView>
			<ScreentTitleView>
				<ScreenTitle>{props.route.name}</ScreenTitle>
			</ScreentTitleView>
		</Container>
	);
};

export default Header;

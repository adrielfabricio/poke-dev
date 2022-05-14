import React from 'react';
import Arrow from '../../../assets/arrow.svg';
import { IRowProps } from './interface';
import { Container, PokemonName } from './styles';

const Row: React.FC<IRowProps> = ({ item, handlePress }) => {
	return (
		<Container onPress={handlePress}>
			<PokemonName>
				{`${item.name.charAt(0).toUpperCase()}${item.name.slice(1)}`}
			</PokemonName>
			<Arrow />
		</Container>
	);
};

export default Row;

import React from 'react';
import Arrow from '../../../assets/arrow.svg';
import { IRowProps } from './interface';
import { Container, PokemonName } from './styles';

const Row: React.FC<IRowProps> = ({ item }) => {
	return (
		<Container>
			<PokemonName>{item.name}</PokemonName>
			<Arrow />
		</Container>
	);
};

export default Row;

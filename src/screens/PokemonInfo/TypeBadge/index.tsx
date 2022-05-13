import React from 'react';
import { pokemonTypeColors } from '../../../constants/color';

import { Container, TypeName } from './styles';

interface Props {
	name: string;
}

const TypeBadge: React.FC<Props> = ({ name }) => {
	return (
		<Container
			style={{
				backgroundColor: pokemonTypeColors[name] || pokemonTypeColors.unknown,
			}}>
			<TypeName>{name}</TypeName>
		</Container>
	);
};

export default TypeBadge;

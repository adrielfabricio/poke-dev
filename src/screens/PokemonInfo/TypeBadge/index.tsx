import React from 'react';
import { pokemonTypeColors } from '../../../constants/color';

import { Props } from './interfaces';
import { Container, TypeName } from './styles';

const TypeBadge: React.FC<Props> = ({ name }) => {
	return (
		<Container
			backgroundColor={pokemonTypeColors[name] || pokemonTypeColors.unknown}>
			<TypeName>{name}</TypeName>
		</Container>
	);
};

export default TypeBadge;

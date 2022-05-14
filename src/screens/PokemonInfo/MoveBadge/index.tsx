import React from 'react';

import { Props } from './interfaces';
import { Container, MoveName } from './style';

const MoveBadge: React.FC<Props> = ({ move }) => {
	return (
		<Container>
			<MoveName>{move.name}</MoveName>
		</Container>
	);
};

export default MoveBadge;

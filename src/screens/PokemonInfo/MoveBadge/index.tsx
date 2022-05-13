import React from 'react';

import { Container, MoveName } from './style';

interface Props {
	move: {
		name: string;
		url: string;
	};
}

const MoveBadge: React.FC<Props> = ({ move }) => {
	return (
		<Container>
			<MoveName>{move.name}</MoveName>
		</Container>
	);
};

export default MoveBadge;

import React from 'react';
import { Props } from './interface';
import { Container } from './styles';

const Sprite: React.FC<Props> = ({ url, height = 96, width = 96 }) => {
	return <Container source={{ uri: url }} style={{ height, width }} />;
};

export default Sprite;

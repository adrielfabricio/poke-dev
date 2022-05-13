import React from 'react';
import { Container } from './styles';

interface Props {
	url: string;
	height?: number;
	width?: number;
}

const Sprite: React.FC<Props> = ({ url, height = 96, width = 96 }) => {
	return <Container source={{ uri: url }} style={{ height, width }} />;
};

export default Sprite;

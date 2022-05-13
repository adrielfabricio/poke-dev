import React, { useEffect, useState, Fragment } from 'react';
import { View } from 'react-native';

import requests from '../../services/requests';
import Sprite from '../../components/Sprite';

import MoveBadge from './MoveBadge';
import PokemonDefault, { Pokemon } from './interfaces';
import {
	Container,
	PokemonName,
	PokemonNameView,
	PokemonSpriteAndNameView,
	SectionTitle,
	SectionView,
	PokemonAbilitiesView,
	PokemonMovesView,
} from './styles';

interface Props {
	route: any;
}

const PokemonInfo: React.FC<Props> = ({ route }) => {
	const { name } = route.params;
	const [loading, setLoading] = useState(false);
	const [pokemon, setPokemon] = useState<Pokemon>(PokemonDefault);

	useEffect(() => {
		async function getPokemon() {
			setLoading(true);
			try {
				const response = await requests.getPokemon({ name });
				setPokemon(response);

				setLoading(false);
			} catch (error: any) {
				setLoading(false);
				console.error(error.response ? error.response.data : error);
			}
		}
		getPokemon();
	}, []);

	return (
		<Container
			showsHorizontalScrollIndicator={false}
			showsVerticalScrollIndicator={false}
			contentContainerStyle={{ paddingBottom: 20 }}>
			{!loading && pokemon && pokemon.abilities && (
				<Fragment>
					{/* sprite & name */}
					<PokemonSpriteAndNameView>
						<Sprite url={pokemon.sprites.front_default} />
						<PokemonNameView>
							<SectionTitle>Nome:</SectionTitle>
							<PokemonName>{`${pokemon.name
								.charAt(0)
								.toUpperCase()}${pokemon.name.slice(1)}`}</PokemonName>
						</PokemonNameView>
					</PokemonSpriteAndNameView>

					{/* abilities */}
					<SectionView>
						<SectionTitle>Habilidades:</SectionTitle>
						{pokemon.abilities && pokemon.abilities.length !== 0 && (
							<PokemonAbilitiesView>
								{pokemon.abilities.map(({ ability }, index) => {
									let isLast = index + 1 === pokemon.abilities?.length;
									return (
										<Fragment key={index}>
											{ability && (
												<PokemonName>{`${ability.name}${
													!isLast ? ' | ' : ''
												}`}</PokemonName>
											)}
										</Fragment>
									);
								})}
							</PokemonAbilitiesView>
						)}
					</SectionView>

					{/* moves */}
					<SectionView>
						<SectionTitle>Movimentos:</SectionTitle>
						<PokemonMovesView>
							{pokemon.moves &&
								pokemon.moves.map(({ move }, index) => (
									<MoveBadge key={`${move}-${index}`} move={move} />
								))}
						</PokemonMovesView>
					</SectionView>
				</Fragment>
			)}
		</Container>
	);
};

export default PokemonInfo;

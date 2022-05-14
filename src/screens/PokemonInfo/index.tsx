import React, { useEffect, useState, Fragment } from 'react';

import requests from '../../services/requests';
import Sprite from '../../components/Sprite';
import Loading from '../../components/Loading';

import MoveBadge from './MoveBadge';
import TypeBadge from './TypeBadge';
import PokemonDefault, { Pokemon, Props } from './interfaces';
import {
	Container,
	PokemonName,
	PokemonNameView,
	PokemonSpriteAndNameView,
	SectionTitle,
	SectionView,
	PokemonAbilitiesView,
	PokemonMovesView,
	PokemonTypeView,
	scrollViewContentContainerStyle,
	ErrorContainer,
	ErrorMessage,
} from './styles';

const PokemonInfo: React.FC<Props> = ({ route }) => {
	const { name } = route.params;
	const [loading, setLoading] = useState(false);
	const [requestError, setRequestError] = useState(false);
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
				setRequestError(true);
				console.error(error.response ? error.response.data : error);
			}
		}
		getPokemon();
	}, []);

	return (
		<Container
			showsHorizontalScrollIndicator={false}
			showsVerticalScrollIndicator={false}
			contentContainerStyle={scrollViewContentContainerStyle}>
			{!loading && pokemon && pokemon.abilities ? (
				<Fragment>
					{/* sprite & name */}
					<PokemonSpriteAndNameView>
						<Sprite url={pokemon.sprites.front_default} />
						<PokemonNameView>
							<SectionTitle>Nome:</SectionTitle>
							<PokemonName>{`${pokemon.name
								.charAt(0)
								.toUpperCase()}${pokemon.name.slice(1)}`}</PokemonName>
							<PokemonTypeView>
								{pokemon.types.map(({ type }, index) => (
									<TypeBadge key={index} name={type.name} />
								))}
							</PokemonTypeView>
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
			) : (
				<Fragment>
					{!requestError ? (
						<ErrorContainer>
							<ErrorMessage>
								{
									'Falha ao retornar informacoes do Pokemon. Verifique a conexao com internet ou contate o suporte.'
								}
							</ErrorMessage>
						</ErrorContainer>
					) : (
						<Loading />
					)}
				</Fragment>
			)}
		</Container>
	);
};

export default PokemonInfo;

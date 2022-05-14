import React, { useEffect, useState } from 'react';
import { Button, FlatList, View } from 'react-native';

import colors from '../../constants/color';
import requests from '../../services/requests';
import Loading from '../../components/Loading';

import Row from './Row';
import { IRowProps } from './Row/interfaces';
import {
	Container,
	dividerStyle,
	ErrorContainer,
	ErrorMessage,
	flatList,
} from './styles';

interface Props {
	navigation: any;
}

const PokemonList: React.FC<Props> = ({ navigation }) => {
	const [limit, setLimit] = useState(20);
	const [offset, setOffset] = useState(0);
	const [loading, setLoading] = useState(false);
	const [refresh, setRefresh] = useState(false);
	const [requestError, setRequestError] = useState(false);
	const [pokemons, setPokemons] = useState<[]>([]);

	async function getPokemons() {
		setLoading(true);
		try {
			const response: any = await requests.getPokemons({ limit, offset });
			const queryPokemons: any = refresh
				? response.results
				: pokemons.concat(response.results);
			setPokemons(queryPokemons);
			setOffset((prevState: any) => prevState + limit);
			setLoading(false);
			setRequestError(false);
			setRefresh(false);
		} catch (error: any) {
			setLoading(false);
			setRequestError(true);
			console.error(error.response);
		}
	}

	function resetData() {
		setOffset(0);
		setLimit(20);
	}

	function handlePress() {
		setRefresh(true);
		resetData();
		getPokemons();
	}

	function renderFooter() {
		return !loading ? null : <Loading />;
	}

	function renderItemSeparatorComponent() {
		return <View style={dividerStyle} />;
	}

	function renderItem({ item }: IRowProps) {
		return (
			<Row
				key={item.name}
				item={item}
				handlePress={() =>
					navigation.navigate('PokemonInfo', {
						name: item.name,
					})
				}
			/>
		);
	}

	useEffect(() => {
		getPokemons();
	}, []);

	return (
		<Container>
			{pokemons && !requestError ? (
				<FlatList
					style={flatList.style}
					contentContainerStyle={flatList.containerStyle}
					data={pokemons}
					renderItem={renderItem}
					keyExtractor={(item: any) => item.name}
					ItemSeparatorComponent={renderItemSeparatorComponent}
					onEndReached={getPokemons}
					onEndReachedThreshold={0.1}
					ListFooterComponent={renderFooter}
				/>
			) : (
				<ErrorContainer>
					<ErrorMessage>
						{'Erro durante a busca. Por favor, contate o suporte.'}
					</ErrorMessage>
					<Button
						title="Aperte para recarregar"
						onPress={handlePress}
						color={colors.primary}
					/>
				</ErrorContainer>
			)}
		</Container>
	);
};

export default PokemonList;

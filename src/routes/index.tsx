import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PokemonList from '../screens/PokemonList';
import PokemonInfo from '../screens/PokemonInfo';
import Header from '../components/Header';

const Stack = createNativeStackNavigator();

const Routes: React.FC = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					header: props => <Header props={props} />,
				}}>
				<Stack.Screen name="Lista de Pokémons" component={PokemonList} />
				<Stack.Screen name="Detalhe do Pokémon" component={PokemonInfo} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Routes;

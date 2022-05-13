import { AxiosResponse } from 'axios';
import api from './api';
import { IGetPokemons, IGetPokemon } from './interfaces';

export default {
	getPokemons: async ({ limit = 20, offset = 0 }: IGetPokemons) => {
		const response: AxiosResponse = await api.get(
			`/pokemon?offset=${offset}&limit=${limit}`,
		);
		return response.data;
	},

	getPokemon: async ({ name }: IGetPokemon) => {
		const response: AxiosResponse = await api.get(`/pokemon/${name}`);
		return response.data;
	},
};

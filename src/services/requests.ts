import { AxiosResponse } from 'axios';
import api from './api';
import { IGetPokemons } from './interfaces';

export default {
	getPokemons: async ({ limit = 20, offset = 0 }: IGetPokemons) => {
		const response: AxiosResponse = await api.get(
			`/pokemon?offset=${offset}&limit=${limit}`,
		);
		return response.data;
	},
};

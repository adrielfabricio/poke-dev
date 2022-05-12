import axios from 'axios';

import { pokemonApi } from '../constants/url';

const api = axios.create({
	baseURL: pokemonApi,
});

export default api;

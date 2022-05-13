type Ability = {
	id: number;
	name: string;
	is_main_series: boolean;
	generation: any;
	names: any;
	effect_entries: any;
	effect_changes: any;
	flavor_text_entries: any;
	pokemon: any;
};

type Moves = {
	move: {
		name: string;
		url: string;
	};
};

type PokemonAbility = {
	is_hidden: boolean;
	slot: number;
	ability: Ability;
};

type PokemonSprites = {
	front_default: string;
	front_shiny: string;
	front_female: string;
	front_shiny_female: string;
	back_default: string;
	back_shiny: string;
	back_female: string;
	back_shiny_female: string;
};

export interface Pokemon {
	id: number;
	name: string;
	base_experience: number;
	height: number;
	is_default: boolean;
	order: number;
	weight: number;
	abilities: Array<PokemonAbility> | null;
	forms: Array<Object>;
	game_indices: any;
	held_items: any;
	location_area_encounters: string;
	moves: Array<Moves>;
	species: Object;
	sprites: PokemonSprites;
	stats: Array<Object>;
	types: Array<Object>;
	past_types: Array<Object>;
}

export default {
	id: 0,
	name: '',
	base_experience: 0,
	height: 0,
	is_default: false,
	order: 0,
	weight: 0,
	abilities: null,
	forms: [{}],
	game_indices: null,
	held_items: null,
	location_area_encounters: '',
	moves: [{}],
	species: {},
	sprites: {},
	stats: [{}],
	types: [{}],
	past_types: [{}],
} as Pokemon;

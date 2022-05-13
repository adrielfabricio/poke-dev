import styled from 'styled-components/native';
import colors from '../../constants/color';

export const Container = styled.ScrollView({
	flex: 1,
	padding: 15,
});

export const SectionTitle = styled.Text({
	color: colors.gray,
	fontSize: 12,
});

export const SectionView = styled.View({
	marginBottom: 20,
});

export const PokemonSpriteAndNameView = styled.View({
	flexDirection: 'row',
	alignItems: 'flex-start',
	marginVertical: 15,
	marginBottom: 20,
});

export const PokemonNameView = styled.View({
	marginLeft: 15,
});

export const PokemonTypeView = styled.View({
	flexDirection: 'row',
	alignItems: 'flex-start',
});

export const PokemonName = styled.Text({
	color: colors.listText,
	fontSize: 24,
	fontWeight: 'bold',
	flexWrap: 'wrap',
});

export const PokemonAbilitiesView = styled.View({
	flexDirection: 'row',
	flexWrap: 'wrap',
	alignItems: 'flex-start',
});

export const PokemonMovesView = styled.View({
	flexDirection: 'row',
	flexWrap: 'wrap',
	alignItems: 'flex-start',
});

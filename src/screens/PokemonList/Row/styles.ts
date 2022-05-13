import styled from 'styled-components/native';
import colors from '../../../constants/color';

export const Container = styled.Pressable({
	flexDirection: 'row',
	justifyContent: 'space-between',
	alignItems: 'center',
	paddingVertical: 15,
});

export const PokemonName = styled.Text({
	color: colors.listText,
	fontSize: 16,
	fontWeight: 'bold',
});

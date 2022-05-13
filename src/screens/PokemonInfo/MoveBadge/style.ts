import styled from 'styled-components/native';
import colors from '../../../constants/color';

export const Container = styled.View({
	paddingHorizontal: 10,
	paddingVertical: 5,
	backgroundColor: colors.tag,
	borderRadius: 5,
	marginRight: 5,
	marginTop: 10,
});

export const MoveName = styled.Text({
	color: colors.listText,
	fontSize: 16,
	fontWeight: 'bold',
});

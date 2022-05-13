import styled from 'styled-components/native';
import colors from '../../constants/color';

export const Container = styled.View({
	display: 'flex',
	justifyContent: 'space-between',
	backgroundColor: colors.primary,
	paddingTop: 15,
});

export const TitleView = styled.View({
	alignItems: 'center',
	marginBottom: 15,
	flexDirection: 'row',
	justifyContent: 'center',
});
export const Title = styled.Text({
	color: colors.white,
	fontWeight: 'bold',
	fontSize: 17,
	textAlign: 'center',
	left: -20,
});

export const ScreentTitleView = styled.View({
	alignItems: 'center',
	backgroundColor: colors.secondary,
});
export const ScreenTitle = styled.Text({
	color: colors.white,
	fontWeight: 'bold',
	fontSize: 16,
	marginVertical: 10,
});

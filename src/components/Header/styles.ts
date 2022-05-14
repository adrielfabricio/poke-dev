import styled from 'styled-components/native';
import colors from '../../constants/color';
import { IHeaderStyleProps } from './interface';

export const Container = styled.View({
	display: 'flex',
	justifyContent: 'space-between',
	backgroundColor: colors.primary,
	paddingTop: 10,
});

export const TitleView = styled.View<IHeaderStyleProps>(props => ({
	alignItems: 'center',
	paddingVertical: props.canGoBack ? 0 : 15,
	flexDirection: 'row',
	justifyContent: 'center',
}));

export const RightButton = styled.Pressable({
	paddingHorizontal: 20,
	paddingVertical: 15,
});

export const Title = styled.Text<IHeaderStyleProps>(props => ({
	color: colors.white,
	fontWeight: 'bold',
	fontSize: 17,
	textAlign: 'center',
	left: props.canGoBack ? -25 : 0,
}));

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

export const goBackHeaderConfig = {
	viewStyle: { flex: 1 },
};

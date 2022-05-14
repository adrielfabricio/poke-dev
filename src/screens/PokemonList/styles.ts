import styled from 'styled-components/native';
import colors from '../../constants/color';

export const Container = styled.View({
	flex: 1,
	justifyContent: 'center',
});

export const ErrorContainer = styled.View({
	paddingHorizontal: 25,
});

export const ErrorMessage = styled.Text({
	color: colors.listText,
	fontSize: 16,
	fontWeight: 'bold',
	textAlign: 'center',
	marginBottom: 15,
});

export const flatList = {
	style: {},
	containerStyle: { marginHorizontal: 20, paddingTop: 10 },
};

export const dividerStyle = {
	backgroundColor: colors.gray,
	height: 1,
	flex: 1,
};

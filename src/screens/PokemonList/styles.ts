import styled from 'styled-components/native';
import colors from '../../constants/color';

export const Container = styled.View({
	flex: 1,
	justifyContent: 'center',
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

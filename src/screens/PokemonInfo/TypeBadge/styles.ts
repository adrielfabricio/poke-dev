import styled from 'styled-components/native';
import colors from '../../../constants/color';
import { ITypeBadgeStyles } from './interfaces';

export const Container = styled.View<ITypeBadgeStyles>(props => ({
	padding: 5,
	marginRight: 5,
	borderRadius: 5,
	alignItems: 'center',
	justifyContent: 'center',
	backgroundColor: props.backgroundColor,
}));

export const TypeName = styled.Text({
	color: colors.white,
});

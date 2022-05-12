import styled from 'styled-components/native';

export const Container = styled.View({
	display: 'flex',
	justifyContent: 'space-between',
	backgroundColor: '#144FA2',
});

export const TitleView = styled.View({
	alignItems: 'center',
	marginBottom: 15,
});
export const Title = styled.Text({
	color: '#fff',
	fontWeight: 'bold',
	fontSize: 17,
});

export const ScreentTitleView = styled.View({
	alignItems: 'center',
	backgroundColor: '#003175',
});
export const ScreenTitle = styled.Text({
	color: '#fff',
	fontWeight: 'bold',
	fontSize: 16,
	marginVertical: 10,
});

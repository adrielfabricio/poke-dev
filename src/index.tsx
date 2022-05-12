import React from 'react';
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

import Routes from './routes';

const App = () => {
	const isDarkMode = useColorScheme() === 'dark';
	const safeAreaViewStyles = {
		backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
		flex: 1,
	};

	return (
		<SafeAreaView style={safeAreaViewStyles}>
			<StatusBar barStyle="light-content" backgroundColor="#144FA2" />
			<Routes />
		</SafeAreaView>
	);
};

export default App;

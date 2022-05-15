import React, { Fragment, useEffect } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import Routes from './routes';
import { safeAreaViewStyles } from './styles';

const App = () => {
	useEffect(() => {
		SplashScreen.hide();
	}, []);

	return (
		<Fragment>
			<SafeAreaView style={safeAreaViewStyles.header} />
			<SafeAreaView style={safeAreaViewStyles.container}>
				<StatusBar barStyle="light-content" backgroundColor="#144FA2" />
				<Routes />
			</SafeAreaView>
		</Fragment>
	);
};

export default App;

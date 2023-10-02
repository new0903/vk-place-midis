import React, { useState, useEffect, useLayoutEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { View, ScreenSpinner, AdaptivityProvider, AppRoot, ConfigProvider, SplitLayout, SplitCol } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import Home from './panels/Home';
import Persik from './panels/Persik';
import PlacesInfo from './panels/PlacesInfo'

const App = () => {
	const [activePanel, setActivePanel] = useState('home');
	const [onboadrdingComplete, setOnboardingComplete] = useState(false);
	const [fetchedUser, setUser] = useState(null);
	const [GeodataUser, setGeodataUser] = useState(null);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);

	useEffect(() => {
		async function fetchData() {
			const user = await bridge.send('VKWebAppGetUserInfo', {});
			const geodata=await bridge.send('VKWebAppGetGeodata', {})
			setUser(user);
			setGeodataUser(geodata);
			setPopout(null);
			console.log(geodata)
		}
		fetchData();
	}, []);

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};
//popout={popout}
	return (
		<ConfigProvider>
			<AdaptivityProvider>
				<AppRoot>
					<SplitLayout >
						<SplitCol>
							<View activePanel={activePanel}>
								<Home id='home' fetchedUser={fetchedUser} go={go} />
								<Persik id='persik' go={go} />
								<PlacesInfo id='placesinfo' go={go} />
							</View>
						</SplitCol>
					</SplitLayout>
				</AppRoot>
			</AdaptivityProvider>
		</ConfigProvider>
	);
}

export default App;

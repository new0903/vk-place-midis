import React, { useState, useEffect, useLayoutEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { View, ScreenSpinner, AdaptivityProvider, AppRoot, ConfigProvider, SplitLayout, SplitCol } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import Home from './panels/Home';
import PlacesInfo from './panels/PlacesInfo'
import AddPlace from './panels/AddPlace'
import axios from 'axios';

const App = () => {
	const [activePanel, setActivePanel] = useState('home');
	const [idPlace, setIdPlace] = useState(0);
	const [fetchedUser, setUser] = useState(null);
	const [GeodataUser, setGeodataUser] = useState(null);
	const [data, setDataPlace] = useState(require("./data.json"));
	//const [photo, setPhoto] = useState(null);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);
	useEffect(() => {
		async function fetchData() {
			const user = await bridge.send('VKWebAppGetUserInfo', {});
			const geodata = await bridge.send('VKWebAppGetGeodata', {})
			setUser(user);
			setGeodataUser(geodata);
			setPopout(null);
			console.log(geodata)
			console.log(user)
		}
		fetchData();
	}, []);
	// 
	const go = (namePanel,idPlaces) => {
		//const namePanel=e.currentTarget.dataset.to
		if (namePanel=="placesinfo") {
			console.log(idPlaces)
			setIdPlace(idPlaces)
		}
		console.log(namePanel)
		setActivePanel(namePanel);
	};
	const addPlace = (place) => {
		console.log(place)
		console.log(data)
		const id = data.length + 1

		//setPhoto(photo)
		setDataPlace([...data, { id, ...place }])
		
		console.log(data)

		// const id = this.state.users.length + 1
		// this.setState({ users: [...this.state.users, { id, ...user }] })
	}
	//const data=require("./data.json")
	//popout={popout}
	return (
		<ConfigProvider>
			<AdaptivityProvider>
				<AppRoot>
					<SplitLayout >
						<SplitCol>
							<View activePanel={activePanel}>
								<Home id='home' places={data} fetchedUser={fetchedUser} geoDataUser={GeodataUser} go={go} />
								<PlacesInfo id='placesinfo'  go={go} place={data[idPlace]} />
								<AddPlace id='addPlace' go={go} fetchedUser={fetchedUser} setDataPlace={addPlace} />
							</View>
						</SplitCol>
					</SplitLayout>
				</AppRoot>
			</AdaptivityProvider>
		</ConfigProvider>
	);
}

export default App;

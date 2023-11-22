import React, { useState, useEffect, useLayoutEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { View, ScreenSpinner, Edit, Epic,SplitLayout,SplitCol } from '@vkontakte/vkui';
import { useActiveVkuiLocation, useGetPanelForView, useRouteNavigator, useSearchParams } from '@vkontakte/vk-mini-apps-router'
import Home from './panels/Home';
import PlacesInfo from './panels/PlacesInfo'
import AddPlace from './panels/AddPlace'
import axios from 'axios';
import TabBar from './components/TabBar';
import UserProfile from './panels/UserProfile';
import EditPlace from './panels/EditPlace';
import backgroundImage from './img/test.svg'//./img/test.svg
import '@vkontakte/vkui/dist/vkui.css';
import Modal from './components/modals/Modal';
import QuestPanel from './panels/QuestsPanel';
import MapPanel from './panels/MapPanel';

const App = () => {
	const { view: activeView } = useActiveVkuiLocation()
	const activePanel = useGetPanelForView('defaultView')
	const [fetchedUser, setUser] = useState(null);
	const routeNavigator = useRouteNavigator()
	const [accessToken, setAccessToken] = useState(null);
	const [activeModal, setActiveModal] = useState(null);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);

	useEffect(() => {
		async function fetchData() {
			const user = await bridge.send('VKWebAppGetUserInfo', {});
			//const geodata = await bridge.send('VKWebAppGetGeodata', {})
			// const access_Token = await bridge.send('VKWebAppGetAuthToken', { 
			// 	app_id: 51758093, 
			// 	scope: 'maps'
			// })
			// console.log(access_Token)
			// setAccessToken(access_Token)

			const data = await bridge.send('VKWebAppStorageGet', {
				keys: [user.id.toString()],
			})

			if (data.keys[0].value) {

				console.log("заходил")
				setActiveModal("OnBoardingModal")
				// если заходит не в первый раз
			} else {
				console.log("не заходил")

				// если впервые зашёл будем приветстовать так же запомним его в базу данных
				if (user) {
					setActiveModal("OnBoardingModal")
					console.log("марш в хранилище")
					bridge.send('VKWebAppStorageSet', {
						key: user.id.toString(),
						value: user.first_name,
					})
					var formData = new FormData();
					formData.append('first_name', user.first_name)
					formData.append('last_name', user.last_name)
					formData.append('photo_200', user.photo_200)
					formData.append('id', user.id)
					await axios.post('https://russcazak10.ru/web/index.php?r=api/adduser',
						formData,
						{
							headers: {
								"Content-type": "multipart/form-data",
							},
						}).then((res) => {
							console.log(res.data)
							setDataPlace(res.data)
						})
				}
			}
			setUser(user);
			//setGeodataUser(geodata);
			setPopout(null);
			//	console.log(geodata)
			console.log(user)
		}
		fetchData();
	}, []);
//quest
	return (
		<SplitLayout popout={popout} modal={<Modal activeModal={activeModal}  fetchedUser={fetchedUser} setActiveModal={setActiveModal}/>}>
			<SplitCol>


				<Epic activeStory={activeView}
					tabbar={<TabBar routeNavigator={routeNavigator} activePanel={activePanel} />}
				>
					<View id={activeView} activePanel={activePanel} >
						<Home id='home' nav='home' accessToken={accessToken} fetchedUser={fetchedUser} routeNavigator={routeNavigator} />
						<PlacesInfo id='placesinfo' nav='placesinfo' fetchedUser={fetchedUser} />
						<AddPlace id='addPlace' nav='addPlace' fetchedUser={fetchedUser} routeNavigator={routeNavigator} />
						<UserProfile id='userProfile' nav='userProfile' fetchedUser={fetchedUser} routeNavigator={routeNavigator} />
						<EditPlace id='editPlace' nav='editPlace' fetchedUser={fetchedUser} />
						<QuestPanel id='quest' nav='quest' fetchedUser={fetchedUser}/>
						<MapPanel id='map' nav='map' fetchedUser={fetchedUser}/>
					</View>
				</Epic> 
			</SplitCol>
		</SplitLayout>
	);
}

export default App;

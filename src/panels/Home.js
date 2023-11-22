import React from 'react';
import PropTypes from 'prop-types';
import Places from '../components/Places/Places';
import Filter from '../components/Filter/Filter';
import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar, ScreenSpinner, Footer } from '@vkontakte/vkui';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router'
import Map from '../components/Map';
import axios from 'axios';
import backgroundImage from '../img/test.svg'
//

class Home extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			places: [],
			placeFiltred: [],
			search: "",
			sortCategory: 0
		}


		this.Filter = this.Filter.bind(this)
		this.FilterCategory = this.FilterCategory.bind(this)
		this.getPlaces = this.getPlaces.bind(this)
	}

	FilterCategory(data) {
		this.setState({ sortCategory: data });
	}
	Filter(data) {
		this.setState({ search: data });

		// ||
		// 	namePlace.toLowerCase().indexOf(data.toLowerCase()) > -1||
		// 	userData.last_name.toLowerCase().indexOf(data.toLowerCase()) > -1||
		// 	userData.first_name.toLowerCase().indexOf(data.toLowerCase()) > -1
	}

	async getPlaces() {
		if (this.props.fetchedUser) {
			await axios.get(`https://russcazak10.ru/web/index.php?r=api%2Fgetplaces&user_id=${this.props.fetchedUser.id}`).then((res) => {
				console.log(res.data)//res.data.data
				//	console.log(data)//res.data.data
				//	setDataPlace2(res.data)
				this.setState({ places: res.data })
				console.log(this.state.places)
				this.forceUpdate()
			})
		}

	}
	render() {
		// let place = (<ScreenSpinner size='large' />) // (<Places fetchedUser={this.props.fetchedUser} Cards={this.props.places} />)
		// if (this.state.places) {
		// 	place =(<Places fetchedUser={this.props.fetchedUser} Cards={this.state.places} />)

		// }

		if (!this.state.places && !this.props.fetchedUser) {
			console.log(1)
			return (
				<Panel className="Panel__fullScreen" id={this.props.id} >


					<PanelHeader separator={false}>
						Главное
					</PanelHeader>
					<Group>
						<Div className="Filters">

							<Button size="s" align='center' mode="secondary" onClick={() => {
								this.props.routeNavigator.push('/addPlace')
							}} >
								Добавить место
							</Button>

							<Filter filter={this.Filter} />

						</Div>

						<Div className='store'>
							(<ScreenSpinner size='large' />)
						</Div>
					</Group>



				</Panel>
			)
		}
		if (this.state.places.length < 1) {
			this.getPlaces();
		}
		
		console.log(this.state.sortCategory)
		let thematicsFiltered = this.state.places.filter(
			({ namePlace, adress, userData }) => 
			namePlace.toLowerCase().indexOf(this.state.search.toLowerCase()) > -1 || 
			adress.toLowerCase().indexOf(this.state.search.toLowerCase()) > -1
		);
		if (this.state.sortCategory!=0) {
			thematicsFiltered=thematicsFiltered.filter(({category})=>category[0].id==this.state.sortCategory)
		}
		
		console.log(thematicsFiltered)
		//	this.setState({placeFiltred:thematicsFiltered})
		return (
			<Panel style={{}} className="Panel__fullScreen" id={this.props.id} >


				<PanelHeader separator={false}>
					{/* {this.props.fetchedUser &&
						<Div>
							<Cell
								before={this.props.fetchedUser.photo_200 ? <Avatar src={this.props.fetchedUser.photo_200} /> : null}
								subtitle={this.props.fetchedUser.city && this.props.fetchedUser.city.title ? this.props.fetchedUser.city.title : ''}
							>
								{`${this.props.fetchedUser.first_name} ${this.props.fetchedUser.last_name}`}
							</Cell>
						</Div>
					}  */}
					Главное
				</PanelHeader>

				<Group>
					<Div className="Filters">

						<Button size="s" align='center' mode="secondary" onClick={() => {
							this.props.routeNavigator.push('/addPlace')
						}} >
							Добавить место
						</Button>

						<Filter filter={this.Filter} filterCategory={this.FilterCategory} />

					</Div>



					{/*!this.state.places.length>0 ? (<ScreenSpinner size='large' />) : (<Places fetchedUser={this.props.fetchedUser} Cards={this.state.places} />)*/}
					{thematicsFiltered.length > 0 && (<Places fetchedUser={this.props.fetchedUser} Cards={thematicsFiltered} />)}
					{thematicsFiltered.length === 0 && <Footer>Ничего не найдено</Footer>}

				</Group>



			</Panel>
		)
	}
}


export default Home;

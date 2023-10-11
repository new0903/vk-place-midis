import React from 'react';
import PropTypes from 'prop-types';
import Places from '../components/Places/Places';
import Filter from '../components/Filter/Filter';
import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar } from '@vkontakte/vkui';


class Home extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<Panel className="Panel__fullScreen" id={this.props.id} >


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
					} */}
					Актуальное
					Control panel
				</PanelHeader>
				<Group>
					<Div className="Filters">
						<Button size="s" align='center' mode="secondary" onClick={()=>{this.props.go("addPlace")}} data-to="addPlace">
							Добавить место
						</Button>


						<Filter />
						
					</Div>

					<Div className='store'>

						<Places go={this.props.go} fetchedUser={this.props.fetchedUser} Cards={this.props.places} />

					</Div>
					
					<Div style={{display:"flex",}}>
						
					</Div>
				</Group>




			</Panel>
		)
	}
}


export default Home;

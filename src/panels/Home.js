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
			<Panel className="Panel__fullScreen" id={this.props.id}>


				<PanelHeader separator={false}>


				</PanelHeader>
				<Group>
					{this.props.fetchedUser &&
						<Div>
							<Cell
								before={this.props.fetchedUser.photo_200 ? <Avatar src={this.props.fetchedUser.photo_200} /> : null}
								subtitle={this.props.fetchedUser.city && this.props.fetchedUser.city.title ? this.props.fetchedUser.city.title : ''}
							>
								{`${this.props.fetchedUser.first_name} ${this.props.fetchedUser.last_name}`}
							</Cell>
						</Div>
					}
					<Div>
						Control panel

						<Filter />
					</Div>
					<Div className='store'>

						<Places go={this.props.go} />

					</Div>
				</Group>



				<Group header={<Header mode="secondary">Navigation Example</Header>}>
					<Div>
						<Button stretched size="l" mode="secondary" onClick={this.props.go} data-to="persik">
							Show me the Persik, please
						</Button>
					</Div>
				</Group>


			</Panel>
		)
	}
}


export default Home;

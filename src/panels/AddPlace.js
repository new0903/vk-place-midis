import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, PanelHeaderBack, Group, Button } from '@vkontakte/vkui';

import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import persik from '../img/persik.png';
import FormPlaces from "../components/Places/FormPlaces"
import './Persik.css';
// const AddPlace = props => (
// 	<Panel id={props.id}>
// 		<PanelHeader

// 		>
// 			добавить любимое место
// 		</PanelHeader>
//         <AddPlaces/>
// 	</Panel>
// );

// AddPlace.propTypes = {
// 	id: PropTypes.string.isRequired,
// 	go: PropTypes.func.isRequired,
// };

// export default AddPlace;


export default class AddPlace extends React.Component {
	constructor(props) {
		super(props)

	}

	render() {
		return (
			<Panel id={this.props.id}>
				<PanelHeader

				>
					добавить любимое место
				</PanelHeader>
				<Group>


					<FormPlaces   userData={this.props.fetchedUser} />
				</Group >
			</Panel>
		)
	}
}
//setPlace={this.props.setDataPlace}//funcPlace={this.addPlace}
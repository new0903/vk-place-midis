
import React from "react";

import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar,ScreenSpinner } from '@vkontakte/vkui';


import axios from 'axios';
import Places from '../components/Places/Places';

class UserProfile extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
			places: []
		}
		axios.get(`https://russcazak10.ru/web/index.php?r=api/userplace&id_user=${this.props.fetchedUser.id}`).then((res) => {
			console.log(res.data)
			
			this.setState({places: res.data})
			this.forceUpdate()
		})
    }
    render() {

        // let place = (<ScreenSpinner size='large' />)
        // if(!this.state.places){

        // }else{
        //     place =(<Places fetchedUser={this.props.fetchedUser} Cards={this.state.places} />)
        // }
        return (
            <Panel id={this.props.id}>

                <PanelHeader
                >
                    Профиль
                </PanelHeader>
                <Group>

                    <div>
                        {this.props.fetchedUser &&
                            <Div>
                                <Cell
                                    before={this.props.fetchedUser.photo_max_orig ? <Avatar src={this.props.fetchedUser.photo_max_orig} /> : null}
                                    subtitle={this.props.fetchedUser.city && this.props.fetchedUser.city.title ? this.props.fetchedUser.city.title : ''}
                                >
                                    {`${this.props.fetchedUser.first_name} ${this.props.fetchedUser.last_name}`}
                                </Cell>
                            </Div>
                        }
                    </div>
                    <div>
                        <Button size="s" align='center' mode="secondary" onClick={() => {
                            this.props.routeNavigator.push('/addPlace')
                        }} >
                            Добавить место
                        </Button>
                    </div>
                </Group>
                <Group>
                    <h1 style={{textAlign:"center"}}>
                        Посты
                    </h1>
                    <div>
                        
						{this.state.places ? (<Places fetchedUser={this.props.fetchedUser} Cards={this.state.places} />) :(<ScreenSpinner size='large' />)}
                      
                    </div>
                </Group>
            </Panel>)
    }
}
export default UserProfile
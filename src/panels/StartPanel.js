import React from 'react';
import PropTypes from 'prop-types';
import logo from '../img/logo.svg';
import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar } from '@vkontakte/vkui';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router'

class Start extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Panel className="Panel__fullScreen" id={this.props.id} >


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
                    лого 
                    <img src={logo} />
                    JoyRide
                    <div>
                    Разрешить доступ к геопозиции
                    <Button>
                        Да
                    </Button>
                    <Button>
                        Нет
                    </Button>
                    </div>
                    <div>
                    Выберите город

                    <div>типо выпадающий список с городами</div>
                    </div>
                    шаги

                    
                </Group>




            </Panel>
        )
    }
}


export default Start;

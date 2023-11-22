
import React from "react";

import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar,ScreenSpinner } from '@vkontakte/vkui';
import { Map } from "../components/Map";
import axios from 'axios';
import Places from '../components/Places/Places';

class MapPanel extends React.Component {
    constructor(props) {
        super(props)

    }
    render() {

        return (
            <Panel id={this.props.id}>

                <PanelHeader
                >
                    Тест карты
                </PanelHeader>
                <Group>
                    Тест
                    <Map/>
                </Group>
            </Panel>)
    }
}
export default MapPanel
import React from 'react'

import persik from '../img/persik.png';
import { Panel, Gallery, Group, PanelHeader, Header } from '@vkontakte/vkui';
import parse from 'html-react-parser';


export default class PlacesInfo extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {

        console.log(this.props)
        return (
            <Panel id={this.props.id}>
                <PanelHeader separator={false}>
                </PanelHeader>
                <Button size="s" align='center' mode="secondary" onClick={()=>{this.props.go("home")}} data-to="home">
                    Назад
                </Button>
                <div className="PlaceInfoPage">
                    <div className="PlaceInfo">
                        <Group header={<Header mode="secondary">Фоточки</Header>}>
                            <Gallery slideWidth="90%" style={{ height: 150 }} bullets="dark" showArrows looped>
                                <div >1</div>
                                <div >2</div>
                                <div> 3</div>
                                <div >4</div>
                                <div >5</div>
                            </Gallery>
                        </Group>

                        <Group>
                            <div className="PlaceInfo_content">
                                <div className="PlaceInfo_content_title"><div className="PlacesCard_title">
                               {this.props.place.namePlace}</div></div>
                                <div className="PlaceInfo_content_description">
                                    <div className="PlacesCard_title">
                               {this.props.place.adress}</div>
                                </div>
                            </div>
                        </Group>
                        <Group>
                            <div>
                               {parse(this.props.place.description)}
                            </div>
                        </Group>


                    </div>
                </div>

            </Panel>
        )
    }
}

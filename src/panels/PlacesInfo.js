import React from 'react'

import persik from '../img/persik.png';
import { Panel,Gallery, Group } from '@vkontakte/vkui';

export default class PlacesInfo extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <Panel id={this.props.id}>
                <Group>
                <div className="ProductInfoPage">
                    <div className="ProductInfo">
                        <Gallery
                            showArrows
                            align="center"
                            bullets="light"
                            className="ProductInfo_gallery"
                        >

                        </Gallery>

                        <div className="ProductInfo_content">
                            <div className="ProductInfo_content_title">test</div>
                            <div className="ProductInfo_content_description">
                                test
                            </div>
                        </div>
                    </div>
                </div>
                </Group>
                
            </Panel>
        )
    }
}

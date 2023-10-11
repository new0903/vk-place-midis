import React from 'react'
import persik from '../../img/persik.png';


import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar } from '@vkontakte/vkui';


class PlacesCard extends React.Component {
    MAX_PRODUCT_CARD_SIZE = 220
    constructor(props) {
        super(props)
        
    }

    render() {
        console.log(this.props.fetchedUser)
        return (
            <div onClick={()=>{this.props.go("placesinfo",this.props.PlaceCard.id)}}  data-to="placesinfo"  className="PlacesCard">
                <div className="PlacesCard_preview">
                    <picture className="PlacesCard_preview_picture">
                        <source srcSet={persik} type="image/webp"></source>
                        <img
                            src={persik}
                            alt=""
                            width={this.MAX_PRODUCT_CARD_SIZE}
                            height={this.MAX_PRODUCT_CARD_SIZE}
                            className="PlacesCard_preview_picture_photo PlacesCard_preview_picture_photo__unload"
                        />
                    </picture>
                    <div style={{ position: "absolute",display:"flex",alignItems:"flex-end", height:"185px" }}>
                        <div>

                            <Cell
                                before={<Avatar />}>
                                {this.props.PlaceCard.userData.first_name} {this.props.PlaceCard.userData.last_name}
                            </Cell>
                           
                        </div>

                    </div>
                </div>

                <div className="PlacesCard_bottom">
                    <div className="PlacesCard_info">
                        <div className="PlacesCard_title">{this.props.PlaceCard.namePlace}</div>
                    </div>
                </div>
            </div>
        )
    }
}


export default PlacesCard

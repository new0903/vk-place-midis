import React from 'react'
import persik from '../../img/persik.png';



class PlacesCard extends React.Component {
    MAX_PRODUCT_CARD_SIZE = 195
    constructor(props) {
        super(props)
        this.onCardClick = this.onCardClick.bind(this)
    }
    onCardClick = () => {
        // const params = `id=${id}&name=${name}&price=${price}&back=${back}`
        // routeNavigator.push(`/${ShopPanel.ProductInfo}?${params}`)

        //this.props.go()
        console.log(1)
    }
    render() {
        return (
            <div onClick={this.props.go} data-to="placesinfo" className="PlacesCard">
                <div className="PlacesCard_preview">
                    <picture className="PlacesCard_preview_picture">
                        <source srcSet="" type="image/webp"></source>
                        <img
                            src={persik}
                            alt=""
                            width={this.MAX_PRODUCT_CARD_SIZE}
                            height={this.MAX_PRODUCT_CARD_SIZE}
                            className="PlacesCard_preview_picture_photo PlacesCard_preview_picture_photo__unload"
                        />
                    </picture>
                </div>

                <div className="PlacesCard_bottom">
                    <div className="PlacesCard_info">
                        <div className="PlacesCard_title">{this.props.PlaceCard.name}</div>
                    </div>
                </div>
            </div>
        )
    }
}


export default PlacesCard

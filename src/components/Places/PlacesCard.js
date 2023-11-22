import React from 'react'
import persik from '../../img/persik.png';
import PropTypes from 'prop-types';
import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar } from '@vkontakte/vkui';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router'
//import { Icon16Like ,Icon16LikeOutline} from '@vkontakte/icons';
const PlacesCard = ({ PlaceCard, key }) => {
    const MAX_PRODUCT_CARD_SIZE = 220
    const routeNavigator = useRouteNavigator()
    const id = Number(PlaceCard.id)
    //   console.log(PlaceCard)
    //   console.log(key)
    let url = persik
    if (Object.keys(PlaceCard.imgsFile).length > 0) {
        url = PlaceCard.imgsFile[0].url
        //console.log(PlaceCard.imgsFile)
    }

    return (
        <div  className="PlacesCard" onClick={() => {
            routeNavigator.push(`/PlaceInfo?id=${id}`)
        }}>
            <div className="PlacesCard_preview">
                <picture className="PlacesCard_preview_picture">
                    <source srcSet={url} type="image/webp"></source>
                    <img
                        src={url}
                        alt=""
                        width={MAX_PRODUCT_CARD_SIZE}
                        height={MAX_PRODUCT_CARD_SIZE}
                        className="PlacesCard_preview_picture_photo PlacesCard_preview_picture_photo__unload"
                    />
                </picture>
                
                
            </div>

            <div className="PlacesCard_bottom" >
                <div className="PlacesCard_info">
                    <div className="PlacesCard_title">{PlaceCard.namePlace}</div>
                    <div className="PlacesCard_title">{PlaceCard.adress}</div>
                </div>
            </div>
        </div>
    )

}

// PlacesCard.propTypes = {
// 	key: PropTypes.number.isRequired,
// 	fetchedUser: PropTypes.shape({
// 		photo_200: PropTypes.string,
// 		first_name: PropTypes.string,
// 		last_name: PropTypes.string,
// 		city: PropTypes.shape({
// 			title: PropTypes.string,
// 		}),
// 	}),
// };

export default PlacesCard

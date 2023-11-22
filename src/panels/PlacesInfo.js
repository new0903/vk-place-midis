import React from 'react'

import persik from '../img/persik.png';
import {
    Panel,
    Gallery,
    Group,
    PanelHeader,
    Header,
    Button,
    Div,
    FixedLayout,
    IconButton,
    NavIdProps,
    useAdaptivityWithJSMediaQueries,
    Cell,
    Avatar
} from '@vkontakte/vkui';
import parse from 'html-react-parser';
import './PlaceInfo.css'
import { useSearchParams, useRouteNavigator } from '@vkontakte/vk-mini-apps-router'
import { Icon24HammerOutline, Icon24DeleteOutline, Icon16Like, Icon16LikeOutline, Icon24LikeOutline, Icon24Like } from '@vkontakte/icons';
import { Likes } from '../api/setLikes';
import axios from 'axios';

const PlacesInfo = ({ id, nav, fetchedUser }) => {
    const [isLike, setLike] = React.useState(false)
    const [params] = useSearchParams()
    const routeNavigator = useRouteNavigator()
    const idPlace = Number(params.get('id') || 1);

    const [place, setPlace] = React.useState(null)
    console.log(idPlace)


    React.useEffect(() => {
        async function getPlaceData() {
            //получаем места в челябинске с моего сервера
            await axios.get(`https://russcazak10.ru/web/index.php?r=api/getplaces&id=${idPlace}&user_id=${fetchedUser.id}`).then((res) => {
                console.log(res.data)
                setPlace(res.data)
                setLike(res.data.place.isLike)
            })

        }
        getPlaceData();

    }, [fetchedUser])


    if (place) {
        const selectPlace = place.place ///.find((element) => element.id === idPlace)
        return (

            <Panel id={id}>
                <div className="PlaceInfoPage">
                    <PanelHeader
                    >
                        Место
                    </PanelHeader>

                    <div className="PlaceInfo">
                        <Gallery
                            showArrows
                            align="center"
                            bullets="light"
                            className="PlaceInfo_gallery"
                        >
                            {selectPlace.imgsFile.map((item, index) => (
                                <div className={`PlacePhoto `}>
                                    <picture className="PlacePhoto_picture">
                                        <source srcSet={item.url} type="image/webp"></source>
                                        <img
                                            src={item.url}
                                            className='PlacePhoto_photo'
                                        />
                                    </picture>
                                </div>
                            ))}


                        </Gallery>

                        <div className="PlaceInfo_content">
                            <div className="PlaceInfo_content_title">{selectPlace.namePlace}</div>
                            <div className="PlaceInfo_content_price" >
                                {selectPlace.adress}
                            </div>
                            <div className="PlaceInfo_content_description">
                                <div style={{ display: "flex", margin:"5px" }}>

                                    <Icon24HammerOutline fill='#447bba' onClick={() => {
                                        routeNavigator.push(`/EditPlace?id=${selectPlace.id}`)
                                    }} />
                                    редактировать место
                                </div>
                                <div style={{ display: "flex", margin:"5px" }}>
                                    относится к категориям: {selectPlace.category[0].title}
                                </div>
                                <div style={{ display: "flex", margin:"5px" }}>
                                    <Icon24DeleteOutline fill='#447bba' onClick={() => {
                                        axios.get(`https://russcazak10.ru/web/index.php?r=api/deleteplaces&id_place=${idPlace}`).then((res) => {
                                            console.log(res.data)
                                        })
                                        routeNavigator.push(`/`)
                                    }} />
                                    удалить место из приложения
                                </div>
                                <div style={{ display: "flex" , margin:"5px"}}>
                                    {isLike ? <Icon24Like fill='red' onClick={() => {
                                        setLike(!isLike)
                                        Likes(fetchedUser.id, idPlace)
                                    }} /> : <Icon24LikeOutline fill='red' onClick={() => {
                                        setLike(!isLike)
                                        Likes(fetchedUser.id, idPlace)
                                    }} />}  {selectPlace.likes} 
                                </div>
                                <div style={{ display: "flex", margin:"5px" }}>
                                    <Cell
                                        before={selectPlace.userData[0].photo_200 ? <Avatar src={selectPlace.userData[0].photo_200} /> : null}
                                    >
                                        {`${selectPlace.userData[0].first_name} ${selectPlace.userData[0].last_name}`} автор
                                    </Cell>
                                    
                                </div>

                            </div>
                        </div>
                    </div>
                    <Group>
                        <div className='content'>
                            {selectPlace.description ? parse(selectPlace.description) : ''}
                        </div>

                    </Group>
                </div>
            </Panel>
        )
    }
    return (
        <Panel id={id}>

        </Panel>
    )


}

export default PlacesInfo
/*

<div className={`ProductPhoto Back__${appearence}`}>
        <picture className="ProductPhoto_picture">
          <source srcSet={url + '.webp'} type="image/webp"></source>
          <img
            ref={$photo}
            src={url + '.png'}
            className={cx('ProductPhoto_photo', {
              ProductPhoto_photo__loaded: orientation,
              ProductPhoto_photo__square: orientation === Orientation.Square,
              ProductPhoto_photo__vertical:
                orientation === Orientation.Vertical,
              ProductPhoto_photo__horizontal:
                orientation === Orientation.Horizontal,
            })}
          />
        </picture>
      </div>

 <Panel id={this.props.id}>
                <PanelHeader separator={false}>
                </PanelHeader>

                <Group header={<Header mode="secondary">инфа о месте</Header>}>
                    <Button size="s" align='center' mode="secondary" onClick={() => { this.props.go("home") }} data-to="home">
                        Назад
                    </Button>
                    <div className="PlaceInfoPage">
                        <div className="PlaceInfo">
                            <Gallery slideWidth="100%" style={{ height: 150 }} bullets="dark" showArrows looped>
                                <div ><img
                                    src={persik}
                                    alt="1"
                                    width={350}
                                    height={350}
                                    className="PlacesCard_preview_picture_photo PlacesCard_preview_picture_photo__unload"
                                /></div>
                                <div ><img
                                    src={persik}
                                    alt="2"
                                    width={350}
                                    height={350}
                                    className="PlacesCard_preview_picture_photo PlacesCard_preview_picture_photo__unload"
                                /></div>
                                <div> <img
                                    src={persik}
                                    alt="3"
                                    width={350}
                                    height={350}
                                    className="PlacesCard_preview_picture_photo PlacesCard_preview_picture_photo__unload"
                                /></div>
                                <div ><img
                                    src={persik}
                                    alt="4"
                                    width={350}
                                    height={350}
                                    className="PlacesCard_preview_picture_photo PlacesCard_preview_picture_photo__unload"
                                /></div>
                                <div ><img
                                    src={persik}
                                    alt="5"
                                    width={350}
                                    height={350}
                                    className="PlacesCard_preview_picture_photo PlacesCard_preview_picture_photo__unload"
                                /></div>
                            </Gallery>

                            <div className="PlaceInfo_content">
                                <div className="PlaceInfo_content_title"><div className="PlacesCard_title">
                                    {this.props.place.namePlace}</div></div>
                                <div className="PlaceInfo_content_description">
                                    <div className="PlacesCard_title">
                                        {this.props.place.adress}</div>
                                </div>
                            </div>
                            <div>
                                {parse(this.props.place.description)}
                            </div>

                        </div>
                    </div>
                </Group>


            </Panel>


*/
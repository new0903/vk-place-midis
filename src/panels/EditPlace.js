import React from 'react';
import PropTypes from 'prop-types';

import {
    Panel, PanelHeader, PanelHeaderBack, Group, Button, FormItem, File, Input, Textarea, FormLayout,
    Select,
    CustomSelectOption,
    CustomSelect
} from '@vkontakte/vkui';

import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import persik from '../img/persik.png';
import FormPlaces from "../components/Places/FormPlaces"
import { useSearchParams,useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import axios from 'axios';
import { Icon24DeleteOutline, Icon24Camera, Icon24Document } from '@vkontakte/icons';
import './EditPlace.css';




const EditPlace = ({ id, nav, fetchedUser }) => {
    const categories = [
        {
            id: 1,
            value: "Парки"
        },
        {
            id: 2,
            value: "Клубы"
        },
        {
            id: 3,
            value: "Рестораны"
        },
        {
            id: 4,
            value: "Театры"
        },
        {
            id: 5,
            value: "Музеи"
        },
        {
            id: 6,
            value: "Парк развлечений"
        },
    ]

    const [params] = useSearchParams()
    const idPlace = Number(params.get('id') || 1);

	const routeNavigator = useRouteNavigator()


    const [adress, setAdress] = React.useState("")
    const [name, setName] = React.useState("")
    const [description, setDescription] = React.useState("")
    const [photo, setPhoto] = React.useState(null)
    const [oldPhoto, setOldPhoto] = React.useState(null)
    const [selectType, setSelectType] = React.useState(null)
    const [uploadData, setUploadData] = React.useState(false)
    // const [place, setPlace] = React.useState(null)
    let place = null
    React.useEffect(() => {
        axios.get(`https://russcazak10.ru/web/index.php?r=api%2Fgetplaces&id=${idPlace}`).then((res) => {
            console.log(res.data.place)
            // setPlace(res.data.place)
            setAdress(res.data.place.adress)
            setName(res.data.place.namePlace)
            setDescription(res.data.place.description)
            setOldPhoto(res.data.place.imgsFile)
            setSelectType(res.data.place.category[0].title)
            setUploadData(true)
            console.log(res.data.place)
            // console.log(this.state.places)
            // this.forceUpdate()
        })
    }, [])

    //https://russcazak10.ru/web/index.php?r=api%2Fgetplaces&id=3

    async function UpdatePlace() {
        var formData = new FormData();
        // var imagedata = document.querySelector('input[type="file"]').files;

        formData.append('id', idPlace)
        formData.append('namePlace', name)
        formData.append('adress', adress)
        formData.append('user_id', fetchedUser.id)
        formData.append('category', selectType)
        if (photo !== null) {
            var ins = photo.length;
            for (var x = 0; x < ins; x++) {
                formData.append("files[]", photo[x]);
            }
            // formData.append('files[]', this.state.photo)
        }
        if (description !== null) {
            formData.append('description', description)
        }
        //    formData.append('description', this.state.description)

        console.log(formData)

        await axios.post(`https://russcazak10.ru/web/index.php?r=api/updateplaces`,
            formData,
            {
                headers: {
                    "Content-type": "multipart/form-data",
                },
            }).then((res) => {
                console.log(res.data)
                //setPlace(res.data.place)
            }).catch((res) => console.log(res))
        routeNavigator.push(`/PlaceInfo?id=${idPlace}`)
        
    }




    // React.useEffect(() => {
    //     sendPlace()
    // }, place)

    return (
        <Panel id={id}>
            <PanelHeader>
                обновить информацию о месте
            </PanelHeader>
            <Group>


                {uploadData && (<FormLayout>
                    <FormItem top="Адрес места" >
                        <Input
                            id="namePlace"
                            type="text"
                            align="left"
                            placeholder='название любимого места'
                            defaultValue={adress}
                            onChange={(e) => setAdress(e.target.value)}
                        />
                    </FormItem>
                    <FormItem top="Название">
                        <Input
                            type="text"
                            align="left"
                            defaultValue={name}
                            placeholder="Парки, музеи, кинотеатры, клубы" onChange={(e) => setName(e.target.value)} />
                    </FormItem>
                    <FormItem top="Описание места ">
                        <Textarea placeholder="описание"
                            defaultValue={description}
                            onChange={(e) => {
                                const data = e.target.value;
                                setDescription(data)
                                console.log(e.target.value);
                            }}
                        />
                    </FormItem>

                    <FormItem top="Категория">


                        <CustomSelect
                            value={selectType}
                            onChange={(e) => {
                                console.log(e.target.value);
                                setSelectType(e.target.value)
                                console.log(selectType)
                            }}
                            placeholder={selectType}

                            options={categories}
                            renderOption={({ option, ...restProps }) => (
                                <CustomSelectOption   {...restProps} before={`${option.value}`} />
                            )}

                        />
                    </FormItem>
                    <FormItem top="Загрузите ваше фото">


                        <File before={<Icon24Camera role="presentation" />} multiple size="m" a onChange={
                            (e) => {
                                let image_as_files = e.target.files;

                                // let image_as_base64 = URL.createObjectURL(e.target.files)
                                setPhoto(image_as_files)
                                console.log(photo)
                            }
                        } >
                            Открыть галерею
                        </File>
                    </FormItem>


                    <FormItem top="Загрузите ваше место">
                        <Button size="s" align='center' mode="secondary" onClick={() => {
                            UpdatePlace()


                        }} >
                            Добавить место
                        </Button>
                    </FormItem>
                </FormLayout>
                )}
            </Group >


            <Group>
                Изображения которые уже есть в проекте
                <div className='list-imgs' >

                    {oldPhoto && oldPhoto.map((item, index) => (
                        <div className='image-block'>
                            <Icon24DeleteOutline className='image-input' onClick={() => {
                                axios.get(`https://russcazak10.ru/web/index.php?r=api%2Fdeletefiles&id_files=${item.id}`).then((res) => {
                                    console.log(res.data)
                                    let p = oldPhoto
                                    let img = p.imgsFile
                                    p = p.filter((el) => el.id !== item.id)
                                    setOldPhoto(p)
                                    // console.log(this.state.places)
                                    // this.forceUpdate()
                                })
                            }} />
                            <img
                                src={item.url}
                                style={{ width: "125px", height: "125px" }}

                            />
                        </div>
                    ))}
                </div>
            </Group>
        </Panel>
    )

}
export default EditPlace
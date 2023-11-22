import React from 'react'
import {
    Div,
    Group,
    Header,
    Placeholder,
    Spacing,
    Spinner,
    useAdaptivityWithJSMediaQueries,
    FormItem,
    File,
    Input,
    Textarea,
    FormLayout,
    Button,
    Select,
    CustomSelectOption,
    CustomSelect
} from '@vkontakte/vkui'
import { Icon24Camera, Icon24Document } from '@vkontakte/icons'
//import { CKEditor } from '@ckeditor/ckeditor5-react'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

import bridge from '@vkontakte/vk-bridge';
import './Places.css'
import axios from 'axios'


class FormPlaces extends React.Component {

    places=[]
    categories = [
        {
            id: 0,
            value: "Все"
        },
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


    constructor(props) {
        super(props)
        this.state = {
            adress: "",
            name: "",
            description: "",
            photo: null,
            selectType: "Парки",
            place:{}
        }
        this.UpdatePlace = this.UpdatePlace.bind(this)
        this.AddPlace = this.AddPlace.bind(this)
        // this.setPlace=this.setPlace.bind(this)
        // if (this.props.place) {
        //     this.setState({adress: this.props.place.adress})
        //     this.setState({name: this.props.place.namePlace})
        //     this.setState({description: this.props.place.description})
        //     console.log(this.props.place)
        //     console.log(this.state.adress)
        //     console.log(this.state.name)
        //     console.log(this.state.description)
        // }
    }



    async AddPlace() {

        var formData = new FormData();
        // var imagedata = document.querySelector('input[type="file"]').files;


        formData.append('namePlace', this.state.name)
        formData.append('adress', this.state.adress)
        formData.append('category', this.state.selectType)
        formData.append('user_id', this.props.userData.id)
        if (this.state.photo !== null) {
            var ins = this.state.photo.length;
            for (var x = 0; x < ins; x++) {
                formData.append("files[]", this.state.photo[x]);
            }
            // formData.append('files[]', this.state.photo)
        }
        if (this.state.description !== null) {
            formData.append('description', this.state.description)
        }
        //    formData.append('description', this.state.description)

        console.log(formData)
        //получаем места в челябинске с моего сервера
        axios.post('https://russcazak10.ru/web/index.php?r=api/addplace',//https://russcazak10.ru/web/index.php?r=api/addplaces
            formData,
            {
                headers: {
                    "Content-type": "multipart/form-data",
                },
            }
        ).then((res) => {
            console.log(res)

            //setDataPlace(res.data)
        })
    }
    async UpdatePlace() {
        var formData = new FormData();
        // var imagedata = document.querySelector('input[type="file"]').files;

        formData.append('id', this.props.place.id)
        formData.append('namePlace', this.state.name)
        formData.append('adress', this.state.adress)
        formData.append('user_id', this.props.userData.id)
        formData.append('category', this.state.selectType)
        if (this.state.photo !== null) {
            var ins = this.state.photo.length;
            for (var x = 0; x < ins; x++) {
                formData.append("files[]", this.state.photo[x]);
            }
            // formData.append('files[]', this.state.photo)
        }
        if (this.state.description !== null) {
            formData.append('description', this.state.description)
        }
        //    formData.append('description', this.state.description)

        console.log(formData)

        axios.post(`https://russcazak10.ru/web/index.php?r=api/updateplaces`,
            formData,
            {
                headers: {
                    "Content-type": "multipart/form-data",
                },
            }).then((res) => {
                console.log(res.data)
                //setPlace(res.data.place)
            }).catch((res) => console.log(res))
    }




    render() {
       
        return (
            <FormLayout>
                <FormItem top="Адрес места" >
                    <Input
                        id="namePlace"
                        type="text"
                        align="left"
                        placeholder='название любимого места'
                        defaultValue={this.props.place ? this.props.place.adress : this.state.adress}
                        onChange={(e) => this.setState({ adress: e.target.value })}
                    />
                </FormItem>
                <FormItem top="Название">
                    <Input
                        type="text"
                        align="left"
                        defaultValue={ this.props.place ? this.props.place.namePlace : this.state.name}
                        placeholder="Парки, музеи, кинотеатры, клубы" onChange={(e) => this.setState({ name: e.target.value })} />
                </FormItem>
                <FormItem top="Описание места ">
                    <Textarea placeholder="описание"
                        defaultValue={this.props.place ? this.props.place.description : this.state.description}
                        onChange={(e) => {
                            const data = e.target.value;
                            this.setState({ description: data })
                            console.log(e.target.value);
                        }}
                    />
                </FormItem>

                <FormItem top="Категория">


                    <CustomSelect
                        value={this.state.selectType}
                        onChange={(e) => {
                            console.log(e.target.value);
                            this.setState({ selectType: e.target.value })
                            console.log(this.state.selectType)
                        }}
                        placeholder={this.state.selectType}

                        options={this.categories}
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

                            this.setState({
                                photo: image_as_files,
                            })
                            console.log(this.state.photo)
                            // if (e.target.files) {
                            //     this.setState({ photo: e.target.files });
                            // }
                        }
                    } >
                        Открыть галерею
                    </File>
                </FormItem>


                <FormItem top="Загрузите ваше место">
                    <Button size="s" align='center' mode="secondary" onClick={() => {
                        if (this.props.type == "UPDATE") {
                            this.UpdatePlace()
                        } else {
                            this.AddPlace()
                        }


                    }} >
                        Добавить место
                    </Button>
                </FormItem>
            </FormLayout>




        )
    }

}

export default FormPlaces

// renderOption={({ option, ...restProps }) => (
//     <CustomSelectOption
//         onChange={(e) => {
//             console.log(option.id);
//             this.setState({ selectType: option.value })
//         }}
//         onClick={(e) => {
//             console.log(option.id);
//             this.setState({ selectType: option.value })
//         }}
//         key={option.id}
//         before={option.value}
//     />
// )}


import React,{useEffect} from 'react'
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
} from '@vkontakte/vkui'
import { Icon24Camera, Icon24Document } from '@vkontakte/icons'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import bridge from '@vkontakte/vk-bridge';
import './Places.css'
import axios from 'axios'


class FormPlaces extends React.Component {
    place={}
    constructor(props) {
        super(props)
        this.state = {
            adress: "",
            name:"",
            description: "",
            //photo: null,
      //      add:false
        }
        
        
        this.AddPlace = this.AddPlace.bind(this)
    }


   
    AddPlace() {
        //https://dev.vk.com/ru/api/upload/album-photos#%D0%9F%D0%BE%D0%BB%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%B0%D0%B4%D1%80%D0%B5%D1%81%D0%B0
        





        // let form = new FormData();
        // if (this.state.photo.lenght>0) {
        //     form.append("file1",this.state.photo[0])
            
        // }
        // if (this.state.photo.lenght>1) {
        //     form.append("file2",this.state.photo[1])
            
        // }
        // if (this.state.photo.lenght>2) {
        //     form.append("file3",this.state.photo[2])
            
        // }
        // if (this.state.photo.lenght>3) {
        //     form.append("file4",this.state.photo[3])
            
        // }
        // if (this.state.photo.lenght>4) {
        //     form.append("file5",this.state.photo[4])
            
        // }

        this.place = {
            userData: {

                id: this.props.userData.id,
                photo_200: this.props.userData.photo_200,
                first_name: this.props.userData.first_name,
                last_name: this.props.userData.last_name

            },
            adress: this.state.adress,
            namePlace:this.state.name,
            dateCreate: new Date().getDate(),
            description: this.state.description,
        }
        console.log(this.place)
       // this.setState({add:true})
        this.props.setPlace(this.place)
    }


    render() {
        return (


            <Group>
                <Button size="s" align='center' mode="secondary" onClick={()=>{this.props.go("home")}} data-to="home">
                    Назад
                </Button>

                <FormLayout>
                    <FormItem top="Любимые места" >
                        <Input
                            id="namePlace"
                            type="text"
                            align="left"
                            placeholder='название любимого места'
                            onChange={(e) => this.setState({ adress: e.target.value })}
                        />
                    </FormItem>
                    <FormItem top="Адрес">
                        <Input
                        type="text"
                        align="left"
                        placeholder="Парки, музеи, кинотеатры, клубы" onChange={(e) => this.setState({ name: e.target.value })} />
                    </FormItem>
                    <FormItem top="Любимые места расширенное поле">
                        <CKEditor editor={ClassicEditor} onChange={(e,editor) => {
                            console.log(editor.getData());
                            this.setState({description:editor.getData()})
                            }} />
                    </FormItem>
                    <FormItem top="Загрузите ваше фото">
                        <File before={<Icon24Camera role="presentation" />} size="m" onChange={
                            (e) => {
                                if (e.target.files) {
                                    this.setState({photo: e.target.files});
                                }
                            }
                            } >
                            Открыть галерею
                        </File>
                    </FormItem>
                    <FormItem top="Загрузите ваше место">
                        <Button size="s" align='center' mode="secondary" onClick={this.AddPlace} data-to="home">
                            Добавить место
                        </Button>
                    </FormItem>
                </FormLayout>
                {/* <FormItem top="Загрузите документы">
                    <File before={<Icon24Document role="presentation" />} size="l" mode="secondary" />
                </FormItem> */}
            </Group>
        )
    }

}

export default FormPlaces

/*


*/

 //перенести эту функцию в класс выше 
    // посмотреть документацию передачи файлов
    //id albom =299967825
    // {
    //     "response":{
    //     "album_id":299967825
    //     "upload_url":"https://pu.vk.com/c906728/ss2329/upload.php?act=do_add&mid=62107393&aid=299967825&gid=0&hash=066fdde55237184d738e9bc17ba305b6&rhash=8043a91bb1eb4aa974494c37cd194844&swfupload=1&api=1"
    //     "user_id":62107393
    //     }
    //     }
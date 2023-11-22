import React from "react";
import user from '../img/user.svg'
import books from '../img/books.svg'
import start from '../img/start.svg'
import setting from '../img/setting.svg'
import VKcom from '../img/VKcom.svg'
import { Tabbar, TabbarItem } from "@vkontakte/vkui";
import {useRouteNavigator} from '@vkontakte/vk-mini-apps-router'
import { Icon24User,Icon24Settings,Icon24BookSpreadOutline,Icon24LogoVk ,Icon24PhotosStackOutline,Icon24Home} from '@vkontakte/icons';
class TabBar extends React.Component {

    constructor(props) {
        super(props)
    }
    render() {
        return (
        <Tabbar >
            <TabbarItem text='профиль'  onClick={()=>{ this.props.routeNavigator.push('/userProfile')}}
                selected={this.props.activePanel=="userProfile"}
                >
                <Icon24User fill="#447bba"/>
            </TabbarItem>
            <TabbarItem text='Главная'  onClick={()=>{this.props.routeNavigator.push('/')
                 }}
                 selected={this.props.activePanel=="home"}
                 >
                <Icon24Home fill="#447bba" />
            </TabbarItem>
            <TabbarItem text='задания'  onClick={()=>{this.props.routeNavigator.push('/quest')}} selected={this.props.activePanel=="quest"}>
                <Icon24BookSpreadOutline fill="#447bba"/>
            </TabbarItem>
        </Tabbar>)
    }
}

export default TabBar





/*
<div className="app-aside">

            <div className='app-block-aside'>
                <img src={user} />
            </div>
            <div className='app-block-aside'>
                <img src={books} />
            </div>
            <div className='app-block-aside'>
                <img src={VKcom} />
            </div>
            <div className='app-block-aside'>
                <img src={customer} />
            </div>
            <div className='app-block-aside'>
                <img src={setting} />
            </div>
        </div>

*/
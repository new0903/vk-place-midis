import React from 'react';
import PropTypes from 'prop-types';
import logo from '../img/logo.svg';
import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar, ScreenSpinner, Text } from '@vkontakte/vkui';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router'
import { getQuest } from '../api/Quests';
import reward from '../img/zP3QZbT6Je8.jpg'
import rewardActive from '../img/sePqtfBFc9A.jpg'


class QuestPanel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            quest: []
        }

        this.getQuests = this.getQuests.bind(this)

    }
    async getQuests() {
        const quest = await getQuest(this.props.fetchedUser.id)
        this.setState({ quest: quest.quests })

    }
    render() {

        if (!this.props.fetchedUser) {
            console.log(1)
            return (
                <Panel className="Panel__fullScreen" id={this.props.id} >


                    <PanelHeader separator={false}>
                        Главное
                    </PanelHeader>
                    <Group>
                        <Div className='store'>
                            (<ScreenSpinner size='large' />)
                        </Div>
                    </Group>



                </Panel>
            )
        }
        if (this.state.quest.length < 1) {
            this.getQuests()
        }
        return (
            <Panel className="Panel__fullScreen" id={this.props.id} >
                <PanelHeader separator={false}>
                    Задания
                </PanelHeader>
                <Group>
                    <div style={{display:"flex",justifyContent:"center"}}>
                        <img src={logo} />
                    </div>
                    

                    
                    <Div style={{ display: "block",margin:"30px" }}>
                        {this.state.quest.map((item, index) => {
                            return (
                                <div 
                                style={
                                    {display:'flex',
                                    justifyContent:"space-between",
                                    margin:"10px",
                                    padding:'10px',
                                    borderRadius:"10px",
                                    border:"1px solid black"
                                }}>
                                    <div>
                                        <h1>{item.name}</h1>
                                        <Text>{item.title}</Text>
                                    </div>
                                    <div>
                                        <p>{item.currentCount}/{item.condition}</p>
                                        {item.currentCount >= item.condition ? <Text>Сделано</Text>:""}
                                        <img width={50} height={50} src={item.currentCount >= item.condition ?rewardActive:reward}/> 
                                    </div>

                                </div>
                            )
                        })}
                    </Div>


                </Group>




            </Panel>
        )
    }
}


export default QuestPanel;

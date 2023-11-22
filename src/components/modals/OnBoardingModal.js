import React from 'react'
import {
  ModalRoot,
  ModalPage,
  ModalPageHeader,
  PanelHeaderClose,
  PanelHeaderSubmit,
  Button,
  Cell,
  Group,
} from '@vkontakte/vkui'
import CustomSearchAlgoSelect from './CustomSearchAlgoSelect'


import { getTowns, addTowns } from '../../api/Cities';


const OnBoardingModal = ({ onClose, userdata,saveUser }) => {


  const send = (data) => {
    saveUser(data)
    //addTowns(data, userdata.id)
    console.log('abc')
   

    onClose()
    //axios
  }

  return (

    <Group
    >
      <Cell >
        Выберите город для просмотра мест
      </Cell>
      <CustomSearchAlgoSelect send={send} />

    </Group>



  )


}

export default OnBoardingModal

import React from 'react'
import {
    ModalRoot,
    ModalPage,
    ModalPageHeader,
    ModalCardBase,
    PanelHeaderSubmit,
    Text,
} from '@vkontakte/vkui'
import OnBoardingModal from './OnBoardingModal'

class Modal extends React.Component {

    constructor(props) {
        super(props)
        this.CloseModal = this.CloseModal.bind(this)
        console.log(this.props.activeModal)
    }

    CloseModal() {
        this.props.setActiveModal(null)
    }
    //https://dev.vk.com/ru/method/database.getCities

    render() {
        return (
            <ModalRoot  activeModal={this.props.activeModal}>
                <ModalPage
                    id="OnBoardingModal"
                    onClose={this.CloseModal}
                    dynamicContentHeight
                    header={
                        <ModalPageHeader>
                            Добро пожаловать!
                        </ModalPageHeader>
                    }
                >
                    <OnBoardingModal  onClose={this.CloseModal} saveUser={this.props.saveUser} userdata={this.props.fetchedUser} />
                </ModalPage>
            </ModalRoot >
        )
    }

}

export default Modal

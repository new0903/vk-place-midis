import React from 'react'
import {
  Div,
  Group,
  Header,
  Placeholder,
  Spacing,
  Spinner,
  useAdaptivityWithJSMediaQueries,
} from '@vkontakte/vkui'
import './Places.css'
import PlacesCard from './PlacesCard'
import persik from '../../img/persik.png';


class Places extends React.Component {

  constructor(props) {
    super(props)

    this.state={
      Cards:this.props.Cards
    }
  }
  



  render() {
    return (
      <Div className="Places">
{/* 
        <Header size="large">
          <div className="Places_header">
            <img
              className="Places_header_avatar Places_header_avatar__unload"
              width={28}
              height={28}
              src={persik}
              alt=""
            />
            <span>Тестовая страница</span>
          </div>
          <Spacing size={8} />
        </Header> */}

        <div className="Places_grid">
          {this.state.Cards.map((item, index) => (
            <PlacesCard
              key={item.id}
              PlaceCard={item}
              fetchedUser={this.props.fetchedUser}
              go={this.props.go}
              data-index={index.toString()}
            />
          ))}
        </div>

        {/* <Placeholder>По вашему запросу ничего не нашлось</Placeholder>
        <div className="Places_spinner">
          <Spinner size="large"></Spinner>
        </div> */}

      </Div>
    )
  }

}

export default Places
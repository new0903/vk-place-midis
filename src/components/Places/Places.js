import React from 'react'
import {
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
      Cards:[
        {
          name: "test1",
          title: "test1",
        }, {
          name: "test2",
          title: "test2",
        }, {
          name: "test3",
          title: "test3",
        }, {
          name: "test4",
          title: "test4",
        }, {
          name: "test5",
          title: "test5",
        }, {
          name: "test6",
          title: "test6",
        }, {
          name: "test7",
          title: "test7",
        },
      ]
    }
  }
  



  render() {
    return (
      <Group className="Places">

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
        </Header>

        <div className="Places_grid">
          {this.state.Cards.map((item, index) => (
            <PlacesCard
              key={item.id}
              PlaceCard={item}
              go={this.props.go}
              data-index={index.toString()}
            />
          ))}
        </div>

        {/* <Placeholder>По вашему запросу ничего не нашлось</Placeholder>
        <div className="Places_spinner">
          <Spinner size="large"></Spinner>
        </div> */}

      </Group>
    )
  }

}

export default Places
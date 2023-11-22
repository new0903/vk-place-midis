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

    console.log(2)
    if (this.state.Cards) {
      
    console.log(this.state.Cards)
    } 
    console.log(this.state.Cards)
    return (


        <div className="Places_grid">
          {this.props.Cards.map((item, index) => (
            <PlacesCard
              key={index}
              PlaceCard={item}
            />
          ))}
        </div>


    )
    
  }

}

export default Places
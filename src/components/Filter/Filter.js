import React from 'react'
import {
  Group,
  Search,
  Div
} from '@vkontakte/vkui'
import { Icon24Filter } from '@vkontakte/icons'
import './Filter.css'


class Filter extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Div >
        <Search
          icon={
            <Icon24Filter />
          }
          iconAriaLabel="filter"
        />
      </Div>
    )

  }
}


export default Filter

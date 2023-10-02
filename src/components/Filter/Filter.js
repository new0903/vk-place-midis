import React from 'react'
import {
  Group,
  Search
} from '@vkontakte/vkui'
import { Icon24Filter } from '@vkontakte/icons'


class Filter extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
<div className="Filters">
    <Search
      icon={
        <Icon24Filter/>
      }
      iconAriaLabel="filter"
    />
  </div>
    )

  }
}


export default Filter

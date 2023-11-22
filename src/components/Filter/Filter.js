import React from 'react'
import {
  Group,
  Search,
  Div,
  SubnavigationBar,
  SubnavigationButton
} from '@vkontakte/vkui'
import { Icon24Filter } from '@vkontakte/icons'
import './Filter.css'


class Filter extends React.Component {
  categories = [
    {
      id: 0,
      value: "Все"
    },
    {
      id: 1,
      value: "Парки"
    },
    {
      id: 2,
      value: "Клубы"
    },
    {
      id: 3,
      value: "Рестораны"
    },
    {
      id: 4,
      value: "Театры"
    },
    {
      id: 5,
      value: "Музеи"
    },
    {
      id: 6,
      value: "Парк развлечений"
    },
  ]
  constructor(props) {
    super(props)
    this.state = {
      search: "",
      editSort: false,
      typeSort: "",
      categoryId:""
    }
    this.onChange = this.onChange.bind(this)
    this.onCategoryClick = this.onCategoryClick.bind(this)
  }
  onChange = (e) => {
    this.props.filter(e.target.value)
  };
  onCategoryClick= (Id)=>{
    this.setState({categoryId:Id})
    console.log(Id)
    this.props.filterCategory(Id)
  }
  render() {
    return (
      <Div >
        <Search
          onChange={this.onChange}
          icon={
            <Icon24Filter onClick={(e) => {

              this.setState({ editSort: !this.state.editSort })
            }} />
          }
          after={null}
          iconAriaLabel="filter"
        />


        {
          <SubnavigationBar>
            {this.categories.map((category) => (
              <SubnavigationButton
                selected={this.state.categoryId === category.id}
                onClick={() => this.onCategoryClick(category.id)}
                key={category.id}
              >
                {category.value}
              </SubnavigationButton>
            ))}
          </SubnavigationBar>}

      </Div>
    )

  }
}


export default Filter

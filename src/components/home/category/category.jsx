import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './category.scss'
import request from '../../../resource/resource'
export default class Category extends Component {
  state = {
    varieties:[]
  }
  componentDidMount(){
    request.getCategory().then(data=>{
      if(data.status ===200){
        this.setState({
          varieties:data.data
        })
      }
    })
  }
  render() {
    return (
      <div className='category'>
        {
          this.state.varieties.length >0 &&(
            this.state.varieties.map((item,index)=>{
              return <Link to={`/shopbuy/${item.shopid}`} key={item.id}><img src={item.picurl} alt={item.alt}/></Link>
            })
          )
        }
      </div>
    )
  }
}

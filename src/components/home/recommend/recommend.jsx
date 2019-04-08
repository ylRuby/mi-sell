import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './recommend.scss'
import request from '../../../resource/resource'

export default class Recommend extends Component {
  state = {
    recommend:{}
  }
  componentDidMount(){
    request.getRecommend().then(data=>{
      if(data.status === 200){
        this.setState({
          recommend:data.data
        })
      }
    })
  }
  render() {
    let recommend = this.state.recommend
    return (
      <div className='recommend'>
        {
          Object.keys(recommend).length > 0 && (
            <Link to={`/shopbuy/${recommend.shopid}`}>
              <img src={recommend.picurl} alt={recommend.alt}/>
            </Link>
          )
        }
      </div>
    )
  }
}

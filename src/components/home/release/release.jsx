import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './release.scss'
import request from '../../../resource/resource'
export default class Release extends Component {
  state={
    release:{}
  }
  componentDidMount(){
    request.getConference().then(data=>{
      if(data.status === 200){
        this.setState({
          release:data.data
        })
      }
    })
  }
  render() {
    let release = this.state.release
    return (
      <div className='release'>
        {
          Object.keys(release).length > 0 && (
            <Link to={`/shopbuy/${release.shopid}`} key={release.shopid}><img src={release.picurl} alt={release.alt}/></Link>
          )
        }
        
      </div>
    )
  }
}

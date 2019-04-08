import React, { Component } from 'react'
import './head.scss'
import request from '../../../resource/resource'
export default class Head extends Component {
  state = {
    search:''
  }
  componentDidMount(){
    request.getName().then(data=>{
      if(data.status === 200){
        this.setState({
          search:data.name
        })
      }
    })
  }
  render() {
    return (
      <header className='head'>
        <div className='logo'>
          <img src={require('./img/logo.png')} alt=''/>
        </div>
        <div className='search'>
          <i className="iconfont icon-sousuo"></i>
          <span>{this.state.search}</span>
        </div>
        <div className='login iconfont icon-wode'>
        </div>
      </header>
    )
  }
}

import React, { Component } from 'react'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import {
  Link
}from 'react-router-dom'
import './banner.scss'
import request from'../../../resource/resource'

export default class Banner extends Component {
  state = {
    banner : []
  }
  componentDidMount(){
    request.getBanner().then(data=>{
      if(data.status === 200){
        this.setState({
          banner : data.data
        })
        this.play()
      }
    })
  }
  play(){
    new Swiper('.swiper-container', {
      autoplay: true,//可选选项，自动滑动
      pagination: {
        el: '.swiper-pagination',
      },
      loop:true
    })
  }
  render() {
    let banner = this.state.banner
    return (
      <div className='banner swiper-container'>
        <ul className='swiper-wrapper'>
          {
            banner.length > 0 && banner.map((item,index)=>{
              return (
                <li className='swiper-slide' key={item.id}><Link to={`/shopbuy/${item.shopid}`}><img src={item.picurl} alt={item.alt}/></Link></li>
              )
            })
          }
        </ul>
        <div className="swiper-pagination"></div>
      </div>
    )
  }
}

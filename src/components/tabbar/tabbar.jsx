import React, { Component } from 'react'
import {
  NavLink
} from 'react-router-dom'
import {connect} from 'react-redux'
import './tabbar.scss'

@connect(
  state=>({reducers:state}),
  {}
)
class Tabbar extends Component {
  render() {
    let { shopCount } = this.props.reducers.cartCount
    shopCount = shopCount || false
    return (
      <div className='tabbar'>
        <NavLink exact activeClassName='active' to='/'>
          <i className='iconfont icon-tuanduicankaoxian-'></i>首頁</NavLink>
        <NavLink activeClassName='active' to='/'><i className='iconfont icon-fenlei'></i>分类</NavLink>
        <NavLink activeClassName='active' to='/shopcart'><i className='iconfont icon-gouwuche'><em>{shopCount }</em></i>购物车</NavLink>
        <NavLink activeClassName='active' to='/my'><i className='iconfont icon-wode'></i>我的</NavLink>
      </div>
    )
  }
}
export default Tabbar

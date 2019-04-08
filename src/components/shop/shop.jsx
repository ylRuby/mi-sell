import React, { Component } from 'react'
import {connect} from 'react-redux'
import { addCart } from '../../actions/cart'
import './shop.scss'
import request from '../../resource/resource'
import {Link} from 'react-router-dom'

@connect(
  state => ({shop:state}),
  { addCart }
)
  
class Shop extends Component {
  state={
    id:this.props.match.params.id,
    num:0,
    data:{}
  }
  componentDidMount(){
    request.getShop(this.state.id).then(data=>{
      this.setState({
        data:data
      })
    })
  }
  addGoods=()=>{
    let num = this.state.num
    this.setState({
      num:++num
    })
  }
  delGoods=()=>{
    let num = this.state.num
    num && this.setState({
      num:--num
    })
  }
  submitRedux=()=>{
    // 把id和num传递过去
    let {id,num} = this.state
    this.props.addCart({id,num}) 
    this.setState({
      num:0
    })
  }
  render() {
    let {data,num} = this.state
    return (
      <div className="shopdedatils">
        <img src={data.picurl} width="100%" />
        <h3 className='title'>{data.title}</h3>
        <h3 className='des'>{data.des}</h3>
        <p className="money">
          <span className="symbol">{data.symbol}</span>
          <span className="price">{data.price} {data.font}</span>
        </p>
        <p className="courier">快递：包邮 <span className="fr" ></span></p>
        <div className="buyNum clearFix">
          <p className="fl buyfont">购买数量</p>
          <p className="addNum fr">
            <span className="reduce" onClick={this.delGoods}>-</span>
            <span className="num">{num}</span>
            <span className="add" onClick={this.addGoods}>+</span>
          </p>
        </div>
        <div className="buy">
          <a href="javascript:;" className="addCart" onClick={this.submitRedux}>加入购物车</a>
          <Link to="/shopcart" className="nowBuy">立即购买</Link>
        </div>
      </div>
    )
  }
}

export default Shop;
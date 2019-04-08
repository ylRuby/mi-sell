import React, { Component } from 'react'
import './shopcart.scss'
import { connect } from 'react-redux';
import {addCart,delCart,getGoodsNum} from '../../actions/cart'
import request from '../../resource/resource'
import {Link} from 'react-router-dom'

@connect(
  state =>({shop:state}),
  {addCart,delCart,getGoodsNum}
)
class Shopcart extends Component {
  state={
    addr:'厦门',
    shopList:[],
    totalPrice:0,
    totalCount:0,
    address:'请填写位置信息'
  }
  componentDidMount(){
    this.getShopList()
    setTimeout(() => {
      this.getShopCount()
    }, 300);
  }
  getShopList(){
    let {cartCount} = this.props.shop,/* {11:2,12:3,shopCount:8} */
      shopList=[],totalPrice = 0,totalCount = 0
    Object.keys(cartCount).map((item,index)=>{
      if(!isNaN(item)){
        request.getShop(item).then(data => {
          data.num = cartCount[item]
          totalPrice += data.price * data.num
          totalCount += data.num
          shopList.push(data)
          this.setState({
            shopList,
            totalPrice,
            totalCount,
            address: cartCount.addr
          })
        })
      }
    })
  }
  changeGoodsNum = (index,count) => {
    let {shopList,totalPrice,totalCount} = this.state,
      { addCart, getGoodsNum} = this.props,
        id = shopList[index].shopid,
        num = shopList[index].num
    num += count
    if (num >=1){
      shopList[index].num = num
      totalPrice += shopList[index].price*count
      totalCount += count
      addCart({
        id, num: count
      })
      getGoodsNum(totalCount)
      this.setState({
        shopList,
        totalPrice, 
        totalCount
      })
    }
  }
  delGoods = (index) => {
    let { delCart, getGoodsNum } = this.props,
      {shopList,totalPrice,totalCount} = this.state,
      id = shopList[index].shopid
    delCart(id)
    totalPrice -= shopList[index].price * shopList[index].num
    totalCount -= shopList[index].num
    shopList.splice(index,1)
    getGoodsNum(totalCount)
    this.setState({
      shopList,totalPrice,totalCount
    })
  }
  computeTotalPrice(){
    // 方法二：异步获取的数据通过设置定时器计算数据
  }
  getShopCount=()=>{
    let { getGoodsNum } = this.props
    getGoodsNum(this.state.totalCount)
  }
  render() {
    let {address,shopList, totalPrice, totalCount } = this.state
    return (
      <div className={'shopcart'}>
        <div className="shopArea mb">
          <Link to="/map">    
            <p className="location clearFix">
              <span className="fl">送到地点: </span>
              <span className="fr">{address}</span>
            </p>
          </Link>      
          {
            shopList.length>0 ? shopList.map((item,index)=>{
              return (
                <div className="shop" key={item.id}>
                  <div className="shopShow">
                    <div className="pic ">
                      <img src={item.picurl} width="100%" height="100%" alt="" />
                    </div>
                    <div className="des">{item.des}</div>
                  </div>

                  <div className="buyNum ">
                    <p className=" buyfont">{item.symbol} {item.price}</p>
                    <p className="addNum ">
                      <a href="javascript:;" className="reduce" onClick={this.changeGoodsNum.bind(this,index,-1)}>-</a>
                      <a href="javascript:;" className="num">{item.num}</a>
                      <a href="javascript:;" className="add" onClick={this.changeGoodsNum.bind(this, index,1)}>+</a>
                    </p>
                    <a href="javascript:;" className="del" onClick={this.delGoods.bind(this,index)}>删除</a>
                  </div>
                </div>
              )
            }) : (<div>什么都没有哦</div>)
          }
          
          <div className="totalPrice">

            <div className="total">
              <p className="totalMoney">
                <span className="font">总计:</span> <span>￥ {totalPrice || 0}</span>
              </p>
              <p className="preferential">
                总金额￥{totalPrice || 0} 优惠￥0.00
              </p>
            </div>
            <div className="goPayment">
              <span className="font">去结算</span><span className="num">({totalCount}件)</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Shopcart

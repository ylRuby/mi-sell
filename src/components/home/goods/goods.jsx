import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './goods.scss'
import request from '../../../resource/resource'

export default class Goods extends Component {
	state = {
		goods: []
	}
	componentDidMount() {
		request.getGoods().then(data => {
			if (data.status === 200) {
				this.setState({
					goods: data.data
				})
			}
		})
	}
	render() {
		let goods = this.state.goods
		return (
			<div className='goods'>
				<ul>
					{
						goods.length > 0 && goods.map((item,index)=>{
							return (
								<li key={item.id}>
									<Link to={`/shopbuy/${item.shopid}`}>
										<div className='shop'>
											<img src={item.picurl} alt='' />
										</div>
										<div className='info'>
											<p className='goods_title'>{item.title}</p>
											<p className='goods_desc'>{item.des} </p>
											<p className='goods_price'>{item.symbol} {item.price} {item.font}</p>
										</div>
									</Link>
								</li>
							)	
						})
					}
				</ul>
			</div>
		)
	}
}

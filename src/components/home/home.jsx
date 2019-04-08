import React, { Component } from 'react'
import Head from './head/head'
import Recommend from './recommend/recommend'
import Banner from './banner/banner'
import Category from './category/category'
import Release from './release/release'
import Goods from './goods/goods'
import './home.scss'

export default class Home extends Component {
  render() {
    return (
      <div className='home'>
        <Head/>
        <Banner/>
        <Category/>
        <Recommend/>
        <Release/>
        <Goods/>
      </div>
    )
  }
}

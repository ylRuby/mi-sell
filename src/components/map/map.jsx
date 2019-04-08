import React, { Component } from 'react'
import {connect} from 'react-redux'
import './map.scss'
import {setAddress} from '../../actions/cart'

@connect(
    state=>({redux:state}),
    {setAddress}
)
class Map extends Component {
    componentDidMount(){
        let {setAddress} = this.props
        // 百度地图API功能
        let { BMap, BMAP_STATUS_SUCCESS} = window
        let map = new BMap.Map("allmap");
        let point = new BMap.Point(116.331398, 39.897445);
        map.centerAndZoom(point, 12);
        let geoc = new BMap.Geocoder();
        let geolocation = new BMap.Geolocation();
        geolocation.getCurrentPosition(function (r) {
            if (this.getStatus() === BMAP_STATUS_SUCCESS) {
                let mk = new BMap.Marker(r.point);
                map.addOverlay(mk);
                map.panTo(r.point);
                // alert('您的位置：' + r.point.lng + ',' + r.point.lat);
                let pt = r.point;
                geoc.getLocation(pt, function (rs) {
                    let addComp = rs.addressComponents;
                    let address = addComp.province + ", " + addComp.city + ", " + addComp.district
                    // alert(addComp.province + ", " + addComp.city + ", " + addComp.district + ", " + addComp.street + ", " + addComp.streetNumber);
                    setAddress(address)
                });
            }
            else {
                // alert('failed' + this.getStatus());
            }
        }, { enableHighAccuracy: true })
    }
    render() {
        return (
            <div className='map' id="allmap">
            </div>
        )
    }
}
export default Map

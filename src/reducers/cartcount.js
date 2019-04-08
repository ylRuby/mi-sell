import shopTools from '../util/shoptools'

export default function(state={},action){
    let data = action.data
    switch (action.type) {
        case 'CART_ADD':
            shopTools.addUpdate(data)
            return shopTools.getShopCart()
        case 'CART_DEL':
            shopTools.deleteShop(data)
            return shopTools.getShopCart()
        case 'CART_GOODS_NUM':
            let newState = Object.assign({},state,{shopCount:data})
            return newState
        case 'SET_ADDRESS':
            let addrState = Object.assign({},state,{addr:data})
            return addrState
        default:
            return shopTools.getShopCart()
    }
}
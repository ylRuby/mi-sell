let shopCartInfo = JSON.parse(window.localStorage.getItem('shopCartInfo')) || {}
let shopTools={
    addUpdate:({id,num}) => {
        if(num !== 0){
            shopCartInfo[id] ? shopCartInfo[id] += num : shopCartInfo[id] = num
            shopTools.saveUpdate()
        }
    },
    deleteShop:(id)=>{
        delete shopCartInfo[id]
        shopTools.saveUpdate()
    },
    saveUpdate:()=>{
        window.localStorage.setItem('shopCartInfo',JSON.stringify(shopCartInfo))
    },
    getShopCart:()=>{
        return shopCartInfo? shopCartInfo:{}
    }
}
export default shopTools;
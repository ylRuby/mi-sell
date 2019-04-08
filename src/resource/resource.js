const debug = process.env.NODE_ENV === 'development'?true:false
let host
if(debug){
    host = 'http://47.100.98.54:9020/api'
}else{
    host = 'http://47.100.98.54:9020/api'
}
function method(url){
    return fetch(url).then(res=>res.json())
}
const request = {
    host,
    getName(){
        return method(`${host}/name`)
    },
    getBanner(){
        return method(`${host}/banner`)
    },
    getCategory(){
        return method(`${host}/category`)
    },
    getRecommend(){
        return method(`${host}/recommend`)
    },
    getConference(){
        return method(`${host}/conference`)
    },
    getGoods(){
        return method(`${host}/goods`)
    },
    getShop(id){
        return method(`${host}/buygoods/${id}`)
    }
}

export default request;
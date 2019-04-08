import { createStore } from "redux";
import Reducers from '../reducers'
// export default Store = createStore()

export default function (init){
    const Store = createStore(
        Reducers,
        init,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    return Store
}
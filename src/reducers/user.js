export default function (state = {}, action) {
    let goods = action.data
    switch (action.type) {
        case '1':
            return '1'
        case '2':
            return '2'
        default:
            return '3'
    }
}
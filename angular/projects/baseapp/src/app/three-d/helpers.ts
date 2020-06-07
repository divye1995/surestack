import {keys,pickBy,isNil,not,identity,length,compose} from 'ramda'

var isNotNull = compose(
    not,
    isNil
)

var getNonNullProperties = pickBy(isNotNull)

// getCountOfNotNullProperties :: Object -> number
var getCountOfNotNullProperties = compose(
    length,
    keys,
    getNonNullProperties,
)

export const getShapeForAvailableFaces = (object) : string=>{
    if(!object.front) return 'card';
    var count = getCountOfNotNullProperties(object) 
    if(count === 1) return 'card'
    if(count === 2){
        if(object.back) return 'card'
        return 'cube'
    }
    if(count === 3){
        if((object.left && object.right) || (object.top && object.bottom)) return 'prism'
        return 'cube'
    }
    return 'cube'
}
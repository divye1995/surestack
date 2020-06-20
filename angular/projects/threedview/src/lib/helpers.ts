import {keys,pickBy,isNil,not,length,compose} from 'ramda'
import {SHAPE_CARD,SHAPE_PRISM,SHAPE_CUBE} from './constants'
var isNotNull = compose(
    not,
    isNil
)

var getNonNullProperties = pickBy(isNotNull)

// getCountOfNotNullProperties :: Object -> number
export const getCountOfNotNullProperties = compose(
    length,
    keys,
    getNonNullProperties,
)

export const getRotateFactor = (shape:string) : number=>{
    if(shape === 'card') return 180;
    if(shape === 'prism') return 120;
    return 90;
}

export const getShapeForAvailableFaces = (object) : string=>{
    if(!object.front) return null;
    var count = getCountOfNotNullProperties(object) 
    if(count === 1) return SHAPE_CARD
    if(count === 2){
        if(object.back) return SHAPE_CARD
        return SHAPE_CUBE
    }
    if(count === 3){
        if(object.left && object.right)  return SHAPE_PRISM
        return SHAPE_CUBE
    }
    return SHAPE_CUBE
}
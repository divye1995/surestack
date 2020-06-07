import {keys,pickBy,isNil,not,identity,length,compose} from 'ramda'

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
    if(count === 1) return 'card'
    if(count === 2){
        if(object.back) return 'card'
        return 'cube'
    }
    if(count === 3){
        if(object.left && object.right)  return 'prism'
        return 'cube'
    }
    return 'cube'
}
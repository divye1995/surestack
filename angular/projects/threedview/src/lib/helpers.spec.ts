import { getShapeForAvailableFaces } from "./helpers"


describe('ThreeDModule:helpers',()=>{
    describe('getShapeForAvailableFaces',()=>{
        it('should return null if front property is null',()=>{
            var faces={
                back:"back",
                top:'top'
            }
            expect(getShapeForAvailableFaces(faces)).toEqual(null)

        })
        describe('when front is not null',()=>{
            it('should return card if not null count=2 & back is not null',()=>{

            })
            it('should return prism if not null count=3 & left and right is not null',()=>{

            })
            it('should return cube if not null count=3 & top or bottom is null',()=>{

            })
            it('should return cube if not null count>=4',()=>{

            })
        })
    })
})
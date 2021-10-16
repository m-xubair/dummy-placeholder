import * as imgPlaceHolder from "./imgPlaceHolder"
// @ponicode
describe("imgPlaceHolder.ImgPlaceholder", () => {
    test("0", () => {
        let callFunction: any = () => {
            imgPlaceHolder.ImgPlaceholder({ width: 1080, height: 20, bgColor: "rgb(0,100,200)", txtColor: "0322 999 999'", imgText: "foo bar" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            imgPlaceHolder.ImgPlaceholder({ width: 480, height: 48, bgColor: "#FF00FF", txtColor: "+44 7911 123456'", imgText: "This is a Text" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            imgPlaceHolder.ImgPlaceholder({ width: 9, height: 15, bgColor: "rgb(0.1,0.2,0.3)", txtColor: "0322 999 999'", imgText: "This is a Text" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            imgPlaceHolder.ImgPlaceholder({ width: 25, height: 1000, bgColor: "rgb(0.1,0.2,0.3)", txtColor: "+33 6 49 64 08 08'", imgText: "This is a Text" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            imgPlaceHolder.ImgPlaceholder({ width: 150, height: 400, bgColor: "#FF00FF", txtColor: "+33 6 49 64 08 08'", imgText: "Foo bar" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            imgPlaceHolder.ImgPlaceholder({ width: -Infinity, height: -Infinity, bgColor: "", txtColor: "", imgText: "" })
        }
    
        expect(callFunction).not.toThrow()
    })
})

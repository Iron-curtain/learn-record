class Foo {
    static bar() {

    }
    static baz() {
        console.log('hello');
    }
    // baz() {
    //     console.log('world');
    // }
}

Foo.baz()

class Shape {
    constructor (width, height) {
        this._width = width
        this._height = height
        
    }
}

const square = new Shape(10)
console.log(square._width);
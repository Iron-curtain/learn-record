// let foo = {
//     value: 1,
//     getValue: () => console.log(this.value) 
// }

// foo.getValue()      //  undefined

let foo = {
    value: 1,
    getValue: function() {
        console.log(this.value);
    }
}
foo.getValue()      //  1


function Foo() {
    this.value = 1
}

foo.prototype.getValue = () => console.log(this.value);
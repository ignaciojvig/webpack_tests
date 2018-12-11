const product = {
    name: 'Black Ink Pen',
    price: 1.9,
    discount: 0.05
}

function clone(object){
    return { ...object }
}

const newProduct = clone(product)
newProduct.name = 'Blue Ink Pen'

console.log(newProduct)

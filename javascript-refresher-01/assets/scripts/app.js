// import Function from "./util.js"

// Function("TEST")

function storeOrder({id, name}) {
    console.log(`Store Order ${id}, Order Name: ${name}`);
}

const order = {
    id:1,
    name: "Product Name"
}

storeOrder(order)
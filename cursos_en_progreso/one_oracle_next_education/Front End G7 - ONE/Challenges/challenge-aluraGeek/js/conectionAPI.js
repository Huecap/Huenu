const url = "http://localhost:3001/products";


async function listProducts(){
    const conection = await fetch(url);
    const parseConection = conection.json()
    console.log(parseConection)
    return parseConection
}

async function newProduct(text, price, image){
    const conection = await fetch(url, {
        method:"POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify({
            text:text,
            price:price,
            image:image
        })
    })
    console.log(text)
    console.log(price)
    console.log(image)
    const parsedConection = conection.json();
    if (!conection.ok){
        throw new Error("An Error happened")
    }
    return parsedConection;
};

async function deleteProduct(image) {
    const response = await fetch(`${url}/${image}`, {
        method: "DELETE",
        headers: { "Content-type": "application/json" },
    });

    if (!response.ok) {
        throw new Error("Failed to delete the product.");
    }

    console.log(`Product with id ${id} deleted successfully.`);
}

export const conectionAPI = {
    listProducts, newProduct, deleteProduct
}
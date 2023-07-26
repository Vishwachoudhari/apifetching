async function fetchProductData(){
    let product=document.getElementById('product')
    let data=await fetch(`https://fakestoreapi.com/products`)
    let result =await data.json()
    console.log(result)
    for (const products of result) {
        product.innerHTML+=`<p>${products.title}</p>
        <img src=${products.image}>
        <p>${products.price}</p>
        <p>${products.category}</p>`
    }
   
}
fetchProductData()
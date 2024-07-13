type Product = {
    name: string;
    price: number;
    category: string;
};

let products: Product[] = [
    { name: 'Laptop', price: 50000, category: 'Electronics' },
    { name: 'Shirt', price: 1200, category: 'Apparel' },
    { name: 'Coffee Maker', price: 2500, category: 'Appliances' }
];

/*const filterPrice = products.filter(prices => prices.price % 3 == 0 )
const filterPrice2 = filterPrice.map(products => ("name: "+ products.name + ", price: " + products.price*0.9 + ", category: "+ products.category ));

console.log(filterPrice2) */

function filterProductByPrice(products:Product[],minPrice:number):Product[] {
    return products.filter(product=>product.price>minPrice);

}



function discountProduct(products:Product[]):Product[]{
    return products.map(product=>({...product,price:product.price * 0.9}));

}

let filterProduct = filterProductByPrice(products,2000);
let discountProducts = discountProduct(filterProduct);

console.log(discountProducts);


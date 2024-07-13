var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var products = [
    { name: 'Laptop', price: 50000, category: 'Electronics' },
    { name: 'Shirt', price: 1200, category: 'Apparel' },
    { name: 'Coffee Maker', price: 2500, category: 'Appliances' }
];
/*const filterPrice = products.filter(prices => prices.price % 3 == 0 )
const filterPrice2 = filterPrice.map(products => ("name: "+ products.name + ", price: " + products.price*0.9 + ", category: "+ products.category ));

console.log(filterPrice2) */
function filterProductByPrice(products, minPrice) {
    return products.filter(function (product) { return product.price > minPrice; });
}
function discountProduct(products) {
    return products.map(function (product) { return (__assign(__assign({}, product), { price: product.price * 0.9 })); });
}
var filterProduct = filterProductByPrice(products, 2000);
var discountProducts = discountProduct(filterProduct);
console.log(discountProducts);

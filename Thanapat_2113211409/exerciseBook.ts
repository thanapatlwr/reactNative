interface Book{
    title: string;
    genre: 'fiction' | 'non-fiction' | 'educational' ;
    price: number;
}

const books: Book[] = [
    { title: "The Great Gatsby", genre: "fiction", price: 320 },
    { title: "War and Peace", genre: "fiction", price: 250 },
    { title: "Economics 101", genre: "educational", price: 480 },
    { title: "In Cold Blood", genre: "non-fiction", price: 300 },
    { title: "The Catcher in the Rye", genre: "fiction", price: 400 }
];

function filterBookByPrice(books:Book[],minPrice:number):Book[]{
    return books.filter(books=>books.price>minPrice && books.genre=='fiction');

}

function discountBookPrice(books:Book[]):Book[]{
    return books.map(books=>({...books,price:books.price*0.9}));

}

let filterBook = filterBookByPrice(books,300);
let discountBook = discountBookPrice(filterBook);

console.log(discountBook);
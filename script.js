const products = [
    { name: "Smartphone", price: 800, category: "electronics" },
    { name: "Headphones", price: 150, category: "electronics" },
    { name: "Coffee Maker", price: 100, category: "home appliances" },
    { name: "Blender", price: 250, category: "home appliances" },
    { name: "Laptop", price: 1200, category: "electronics" },
    { name: "T-shirt", price: 50, category: "clothing" },
    { name: "Sneakers", price: 300, category: "clothing" }
  ];


// Filtrerer produktene med ved å sammenligne prisen på produktene med nummeret 200. Alle produkter under 200 blir derfor vist.
const underTwoHundred = products.filter(product => product.price < 200);
console.log(underTwoHundred);

// Bruker map til å gå gjennom alle produktene ved navn (.name).
const waresForSale = products.map(product => product.name);
console.log(waresForSale);

// Chainer sammen filter og map for å først finne ut hvilke produkter som er markert som "electronics", og finner deretter navnene til disse.
const electronics = products
  .filter(product => product.category === "electronics")
  .map(product => product.name);
console.log(electronics);

// Likt som i første oppgave, men returnerer svaret some en boolean fordi noen av produktene stemmer overens med spesifikasjonene gitt.
const moreThanThousand = products.some(product => product.price > 1000);
console.log(moreThanThousand);

// Bruker callback til å summere verdien av alle objektene i arrayen til en verdi.
const totalSum = products.reduce((sum, product) => sum + product.price, 0);
console.log(totalSum);
 

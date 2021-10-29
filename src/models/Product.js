let style = ['Mid Century Modern', 'Glam', 'Boho', 'Walnut', 'Fancy', 'Modern', 'Glass', 'Tripod'];
let prod = ['Couch', 'Chair', 'Bar Stool', 'Bed', 'End Table', 'Night Stand', 'Patio Chair', 'Area Rug'];

function Product(sku, maxpromo = 0, minpromo = 0) {
  let price = Math.floor(Math.random()*500);
  Object.assign(this, {
    id: Math.floor(Math.random()*10000000),
    name: style[Math.floor(Math.random()*style.length)] + " " + prod[Math.floor(Math.random()*prod.length)],
    sku,
    partnersku: "MOD" + sku.slice(0,5),
    price,
    allowance: (Math.floor(Math.random()*25) + 1) + "%",
    minpromo: minpromo + "%",
    maxpromo: maxpromo + "%",
    promorange: `$${minpromo * price} - $${maxpromo * price}`
  });
}

export default Product;

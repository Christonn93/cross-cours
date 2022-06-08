// import dotenv from 'dotenv';
// dotenv.config()

const corsHost = "https://noroffcors.herokuapp.com/";
const itemsPrPage = 30;
const key1 = "ck_6d2ee0fc858c355062499b8315c17a9fafcbd94c"; //process.env.consumer_key
const key2 = "cs_8601d2b8adfc24d300beacdb3f7216e3835bf336"; //process.env.consumer_secret
// &per_page=${itemsPrPage}
const apiHost = `https://christopher-tonnesland.no/School-projects/gamehubcms/wp-json/wc/v3/products?consumer_key=${key1}&consumer_secret=${key2}`;

// Main fetch for the index page
export async function apiFetch(genre, page, title) {
 // Api info

 // The fetch
 const apiConn = corsHost + apiHost;
 const response = await fetch(apiConn);
 const json = await response.json();

 if (response.ok) {
  json.forEach((el) => {
   const id = el.id;
   const name = el.name;
   const slug = el.slug;
   const image = el.images.map((img) => img.src);
   const price = el.price;
   const categories = el.categories.map((item) => item.name);
   const tags = el.tags.map((tag) => tag.name);
   const last_edit = el.date_modified;
   const average_rating = el.average_rating;
   const attribute = el.attributes.map((atr) => {
    const newAtt = { name: atr.name, value: atr.options };
    return newAtt;
   });

   const stock_status = el.stock_status;
   const stock_amount = el.stock_quantity;
   const stock_number = el.sku;

   const description = el.description;
   const data = {
       id: id,
       name: name,
       slug: slug,
       image: image,
       price: price,
       categories: categories,
       tags: tags,
       updated: last_edit,
       rating: average_rating,
       attribute: attribute,
       stock: {
           status: stock_status,
           amount: stock_amount,
           number: stock_number
       },
       description: description
   }

      console.log("Game", data)
   return data;
  });
//   console.log(json);
  return;
 } else {
  // Request succeeded but you didn't get your data
  throw new Error(response.statusText);
 }
}

// Fetching for Genre sorting
export async function gameGenreFetch(genre) {
 // Api info

 // The fetch
 const apiConn = corsHost + apiHost;
 const response = await fetch(apiConn);
 const json = await response.json();
 const data = json.results;

 if (response.ok) {
  return data;
 } else {
  // Request succeeded but you didn't get your data
  throw new Error(response.statusText);
 }
}

// Fetching for details page
export async function detailsFetch(id, gameId) {
 // Api info

 // The fetch
 const apiConn = corsHost + apiHost;
 const response = await fetch(apiConn);
 const json = await response.json();
 console.log(json);

 if (response.ok) {
  return json;
 } else {
  // Request succeeded but you didn't get your data
  throw new Error(response.statusText);
 }
}

export async function getScreenshots(id) {
 // Api info

 // The fetch
 const apiConn = corsHost + apiHost;
 const response = await fetch(apiConn);
 const json = await response.json();

 if (response.ok) {
  return data;
 } else {
  // Request succeeded but you didn't get your data
  throw new Error(response.statusText);
 }
}

async function getGame(id) {
 const details = await detailsFetch();
 const screenshots = await getScreenshots();

 return [details, screenshots];
}

// declare a JSON array
// fetch(`https://christopher-tonnesland.no/School-projects/gamehubcms/wp-json/wc/v3/products?consumer_key=${key1}&consumer_secret=${key2}&per_page=${itemsPrPage}`)
//  .then((response) => response)
//  .then((json) => {
//  for (let q = 0; q < json.length; q ++ ){
// const id = json[q].id;
// const name = json[q].name;
// const res = { id, name};
//
// return res;
// }
//
// });

const corsHost = "https://noroffcors.herokuapp.com/";
const itemsPrPage = 25;
const key1 = "ck_6d2ee0fc858c355062499b8315c17a9fafcbd94c"; //process.env.consumer_key
const key2 = "cs_8601d2b8adfc24d300beacdb3f7216e3835bf336"; //process.env.consumer_secret
// &per_page=${itemsPrPage}
const apiHost_main = `https://christopher-tonnesland.no/School-projects/gamehubcms/wp-json/wc/v3/products?consumer_key=${key1}&consumer_secret=${key2}&per_page=${itemsPrPage}`;



// Main fetch for the index page
export async function apiFetch() {
 // Api info

 // The fetch
 const apiConn_main = corsHost + apiHost_main;
 const response = await fetch(apiConn_main);
 const json = await response.json();

 if (response.ok) {
    json.forEach((el) => {
        const id = el.id;
        const name = el.name;
        const slug = el.slug;
        const cover_image = el.images[0].src;
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
         cover_image: cover_image,
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
          number: stock_number,
         },
         description: description,
        };
        return data;
    });

  return json;
 } else {
  // Request succeeded but you didn't get your data
  throw new Error(response.statusText);
 }
}

/*  === Querystring params === */
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
console.log("gameId =", id)

const apiHost_details = `https://christopher-tonnesland.no/School-projects/gamehubcms/wp-json/wc/v3/products/${id}?consumer_key=${key1}&consumer_secret=${key2}`;

// Main fetch for the index page
export async function apiFetch_details() {
    // Api info
   
    // The fetch
    const apiConn_details = corsHost + apiHost_details
    const response = await fetch(apiConn_details);
    const json = await response.json();
   
    if (response.ok) {   
     return json;
    } else {
     // Request succeeded but you didn't get your data
     throw new Error(response.statusText);
    }
   }
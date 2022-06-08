const api_baseURL = `https://api.rawg.io/api/`;
const api_key = `71922929f4584b77bfd91f78383f6d12`;
const cors_url = `https://noroffcors.herokuapp.com/`;

const games = "games/";
const page_size = 5;
const largePage_size = 20;

const api = api_baseURL + games + `?key=${api_key}`;


// Main fetch for the index page
export async function apiFetch(genre, page, title) {
 // Api info
 const corsHost = "https://noroffcors.herokuapp.com/";
 const apiKey = `71922929f4584b77bfd91f78383f6d12`;
 const apiHost = `https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-added&key=${apiKey}&page_size=${page_size}&genres=${genre}&page=${page}`;

 // The fetch
 const apiConn = corsHost + apiHost;
 const response = await fetch(apiConn);
 const json = await response.json();
 const data = json.results;

 if (response.ok) {
     console.log(apiHost)
  return data;
 } else {
  // Request succeeded but you didn't get your data
  throw new Error(response.statusText);
 }
}

// Fetching for Genre sorting
export async function gameGenreFetch(genre){
 // Api info
 const corsHost = "https://noroffcors.herokuapp.com/";
 const apiKey = `71922929f4584b77bfd91f78383f6d12`;
 const apiHost = `https://api.rawg.io/api/games?genres=${genre}&dates=2019-01-01,2019-12-31&ordering=-added&key=${apiKey}&page_size=${largePage_size}`;

 // The fetch
 const apiConn = corsHost + apiHost;
 const response = await fetch(apiConn);
 const json = await response.json();
 const data = json.results;

 if (response.ok) {
    console.log(apiHost)
  return data;
 } else {
  // Request succeeded but you didn't get your data
  throw new Error(response.statusText);
 }
}

// Fetching for details page
export async function detailsFetch(id, gameId) {
 // Api info
 const corsHost = "https://noroffcors.herokuapp.com/";
 const apiKey = `71922929f4584b77bfd91f78383f6d12`;
 const apiHost = `https://api.rawg.io/api/games/${id}?${gameId}&key=${apiKey}`;
 console.log(apiHost);

 // The fetch
 const apiConn = corsHost + apiHost;
 const response = await fetch(apiConn);
 const json = await response.json();
 console.log(json)

 if (response.ok) {
  return json;
 } else {
  // Request succeeded but you didn't get your data
  throw new Error(response.statusText);
 }
}

export async function getScreenshots(id) {
 // Api info
 const corsHost = "https://noroffcors.herokuapp.com/";
 const apiKey = `71922929f4584b77bfd91f78383f6d12`;
 const apiHost = `https://api.rawg.io/api/games/${id}/screenshots?&key=${apiKey}`;
 console.log(apiHost);

 // The fetch
 const apiConn = corsHost + apiHost;
 const response = await fetch(apiConn);
 const json = await response.json();
 const data = json.results;
 console.log(data)

 if (response.ok) {
  return data;
 } else {
  // Request succeeded but you didn't get your data
  throw new Error(response.statusText);
 }
}

async function getGame(id) {
    const details = await detailsFetch()
    const screenshots = await getScreenshots()
 
    return [details, screenshots]
 }
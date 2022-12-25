//import { fetchJson } from 'fetch-json';
/*
const method = "get"
const url = "https://www.playuntrusted.com/publicAPI/publicAPI.php?request=getSkills"
fetchJson.request(method, url).then(callback); //, data, options
console.log(callback)
*/
/*
var opts = {
    headers: {
      'mode':'no-cors'
    }
  }
server = "eu01";
player_count_url=`https://${server}.playuntrusted.com/publicAPI/publicAPI.php?request=getSkills`;
async function fetcher(){ 
await fetch(player_count_url, opts)
.then((response) => response.json())
.then((data)=>
console.log(data)
)}
fetcher()
*/
/*
var request = new XMLHttpRequest()

request.open('GET', 'skillData.json', true)

request.onload = function () {
  // begin accessing JSON data here
  var data = JSON.parse(this.response)

  for (var i = 0; i < data.length; i++) {
    console.log(data[i].name + ' has ' + data[i].description + '.')
  }
}

request.send()
*/
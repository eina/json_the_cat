const request = require('request');

const args = process.argv.slice(2);

request(`https://api.thecatapasdasdi.com/v1/breeds/search?q=${args[0]}`, (err, res, body) => {
  if (res && res.statusCode === 200) {
    const data = JSON.parse(body);
    if (data && data[0]) {
      console.log(data[0].description);
    } else {
      console.log(`${args[0]} was not found. Please make sure that ${args[0]} is a cat.`);
    }
  } else {
    console.log(err);
  }
  
});
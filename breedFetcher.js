const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (err, res, body) => {
    if (err) {
      callback(err, null);
    }
    const data = JSON.parse(body);
    if (!data && !data[0]) {
      callback(null, `${breedName} was not found. Please make sure that ${breedName} is a cat.`);
    }
    if (data && data[0]) {
      callback(null, data[0].description);
    }
  });
};

module.exports = { fetchBreedDescription };
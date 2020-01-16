const { fetchBreedDescription } = require('./breedFetcher');
const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, desc) => {
  console.log('what are these', error, desc);
  if (error) {
    console.log('Error fetch details', error);
  }

  if (desc) {
    console.log('desc', desc);
  }
});
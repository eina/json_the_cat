const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('test pomeranian', function(done) {
    fetchBreedDescription('Pomeranian', (err, desc) => {
      // we expect no errors
      const expectedError = "Pomeranian was not found. Please make sure that Pomeranian is a cat.";
      assert.equal(err, expectedError);
      assert.equal(desc, null);
      done();
    });
  });

  it('returns a string description for a valid breed, via callback', function(done) {
    fetchBreedDescription('Siberian', (err, desc) => {
      // we expect no errors
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(desc, expectedDesc);
      done();
    });
  });

});
const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaur1;
  let dinosaur2;
  let dinosaurs;

  beforeEach(function () {
    dinosaur1 = new Dinosaur('T-Rex', 'Carnivore', 50)
    dinosaur2 = new Dinosaur('Stegosaurus', 'Herbivore', 30)
    dinosaurs = [dinosaur1, dinosaur2]
    park = new Park('Jurrasic Park', dinosaurs);
  })

  it('should have a name', function () {
    const actual = park.name;
    assert.strictEqual(actual, 'Jurrasic Park');
  });

  it('should have a ticket price', function () {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 10);
  });

  it('should have a collection of dinosaurs', function () {
    const actual = park.dinosaurCollection;
    assert.deepStrictEqual(actual, dinosaurs);
  });

  it('should be able to add a dinosaur to its collection', function () {
    const dinosaur3 = new Dinosaur('T-Rex', 'Carnivore', 80)
    park.addDinosaur(dinosaur3);
    const actual = park.dinosaurCollection;
    assert.deepStrictEqual(actual, dinosaurs);

  });

  it('should be able to remove a dinosaur from its collection', function () {
    park.removeDinosaur();
    const actual = park.dinosaurCollection;
    assert.deepStrictEqual(actual, dinosaurs);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function () {
    const actual = park.mostPopularDinosaur();
    assert.strictEqual(actual, dinosaur1);
  });

  it('should be able to find all dinosaurs of a particular species', function () {
    const actual = park.dinosaurBySpecies('Stegosaurus');
    assert.deepStrictEqual(actual, [dinosaur2]);
  });

  it('should be able to calculate the total number of visitors per day', function () {
    const actual = park.totalVisitorsPerDay();
    assert.strictEqual(actual, 80);
  });

  it('should be able to calculate the total number of visitors per year', function () {
    const actual = park.totalVisitorsPerYear();
    assert.strictEqual(actual, 29200);
  });

  it('should be able to calculate total revenue for one year', function () {
    const actual = park.totalRevenuePerYear();
    assert.strictEqual(actual, 292000);
  });

});

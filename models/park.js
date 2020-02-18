const Park = function (name, dinosaurCollection) {
  this.name = name;
  this.ticketPrice = 10;
  this.dinosaurCollection = dinosaurCollection;
}

Park.prototype.addDinosaur = function (dinosaur) {
  return this.dinosaurCollection.push(dinosaur);
}

Park.prototype.removeDinosaur = function () {
  return this.dinosaurCollection.pop();
}









module.exports = Park;

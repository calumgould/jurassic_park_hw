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

Park.prototype.mostPopularDinosaur = function () {
  this.dinosaurCollection.sort((a,b) =>
  (a.guestsAttractedPerDay > b.guestsAttractedPerDay) ? -1 : 1);
  return this.dinosaurCollection[0]
}

Park.prototype.dinosaurBySpecies = function (species) {
  let matchingArray = [];
  for (let dinosaur of this.dinosaurCollection) {
    if (dinosaur.species === species) {
      matchingArray.push(dinosaur);
    }
  }
  return matchingArray;
};

Park.prototype.totalVisitorsPerDay = function () {
  let total = 0
  for (let dinosaur of this.dinosaurCollection) {
    total += dinosaur.guestsAttractedPerDay;
  }
  return total;
}

Park.prototype.totalVisitorsPerYear = function () {
  let totalPerDay = this.totalVisitorsPerDay();
  return totalPerYear = totalPerDay * 365;
}

Park.prototype.totalRevenuePerYear = function () {
  let totalPerYear = this.totalVisitorsPerYear();
  return totalRevenue = totalPerYear * this.ticketPrice;
}







module.exports = Park;

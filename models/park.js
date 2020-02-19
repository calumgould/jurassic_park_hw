const Park = function (name, dinosaurCollection = []) {
  this.name = name;
  this.ticketPrice = 10;
  this.dinosaurCollection = dinosaurCollection;
}

Park.prototype.addDinosaur = function (dinosaur) {
  this.dinosaurCollection.push(dinosaur);
}

// Park.prototype.removeDinosaur = function () {
//   this.dinosaurCollection.pop();
// }

Park.prototype.removeDinosaur = function (dinosaur) {
  const indexOfDinosaur = this.dinosaurCollection.indexOf(dinosaur);
  if ( indexOfDinosaur !== -1 ) {
  this.dinosaurCollection.splice(indexOfDinosaur, 1);
}}

// Park.prototype.mostPopularDinosaur = function () {
//   this.dinosaurCollection.sort((a,b) =>
//   (a.guestsAttractedPerDay > b.guestsAttractedPerDay) ? -1 : 1);
//   return this.dinosaurCollection[0]
// }

Park.prototype.mostPopularDinosaur = function () {
  let mostPopularDinosaur = this.dinosaurCollection[0];
  for(let dinosaur of this.dinosaurCollection){
    if (mostPopularDinosaur.guestsAttractedPerDay < dinosaur.guestsAttractedPerDay){
      mostPopularDinosaur = dinosaur;
    }
  }
  return mostPopularDinosaur;
};

Park.prototype.dinosaurBySpecies = function (species) {
  const matchingArray = [];
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

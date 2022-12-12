// TODO: Create a class in this file to contain all of the logic for this exercise

class Softplay {
  constructor(numAdults, numChildren) {
    this.numAdults = numAdults
    this.numChildren = numChildren
  }
  // This method is used to register adults and children entering the soft play center. The method should check for the following conditions:

  // Every child entering the soft play center is accompanied by at least 1 adult.
  // If any of these checks fail, the method should return false. Otherwise,
  // the method should return true and numAdults and numChildren should be added to the current totals.
  // // TODO: Change the undefined value below to the name of your class

  enter(numAdults, numChildren) {
    if (numAdults < numChildren) return false
    else {
      this.numAdults += numAdults
      this.numChildren += numChildren
      return true
    }
  }

  leave(numAdults, numChildren) {
    if (
      numAdults >= numChildren &&
      this.numAdult - numAdults >= this.numChildren - numChildren &&
      this.numAdult + this.numChildren >= numAdults + numChildren
    ) {
      this.numAdult -= numAdults
      this.numChildren -= numChildren
      return true
    } else {
      return false
    }
  }

  // This method is used to register adults and children leaving the soft play center. The method should check for the following conditions:
  // A child is not attempting to leave without an adult
  // The number of adults and children left inside (this.numAdults & this.numChildren) the center will not cause there to be more children than adults
  //   (there must be at least 1 adult for 1 child inside the center at all times)
  // Every child leaving the soft play center is accompanied by at least 1 adult.
  // The number of adults and children attempting to leave is not greater than the number currently inside the center
  // If any of these checks fail, method should return false. Otherwise,
  //   the method should return true and numAdults and numChildren should be deducted from the current totals.

  occupancy() {
    return { Adults: this.numAdults, Children: this.numChildren }
  }
}

const trampolineWolrd = new Softplay(2, 2)
trampolineWolrd.enter(3, 3)
console.log(trampolineWolrd.enter(2, 2))
console.log(trampolineWolrd.occupancy(2, 2))

module.exports = Softplay

// class Car {
//     constructor(make, model) {
//         this.make = make
//         this.model = model
//     }

//     stop() {
//         console.log(`${this.make} stopped!`)
//     }

//     move(miles) {
//         console.log(`${this.make} ${this.model} is moving for ${miles} miles!`)
//     }
// }

// const audi = new Car('Audi', 'A2')
// const bmw = new Car('BMW', 'M5')

// audi.move(10)
// bmw.move(42)

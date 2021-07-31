// uber price calculation:

class Uber {
    constructor(distance) {
        this.baseFare = 50;
        this.costPerKm = 10;
        this.distance = distance;

    }
    getPrice() {
        return (this.baseFare + (this.costPerKm * this.distance
        ));
    }
}
let cost = new Uber(8);

console.log(cost.getPrice()); //130

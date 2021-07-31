class Circe {
    constructor(radius, color) {
        this.radius = radius;
        this.color = color;
    }
    getArea() {
        return (Math.PI * Math.pow(this.radius, 2));
    }
    getCircumberence() {
        return (2 * Math.PI * this.radius);
    }
    getColor() {
        return this.color;
    }
}
let circleDetails = new Circe(5, "red");

console.log(circleDetails.getArea().toFixed(2));

console.log(circleDetails.getCircumberence().toFixed(2));

console.log(circleDetails.getColor());

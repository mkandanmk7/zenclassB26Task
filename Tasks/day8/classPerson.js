class Person {
    constructor(fName, lName, age, address, phone) {
        this.firstName = fName;
        this.lastName = lName;
        this.age = age;
        this.address = address;
        this.phone = phone;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

}
let personDetails = new Person("mythu", "muthu", 25, "pollachi", 9994304490);

console.log(personDetails.getFullName()); //mythu muthu
console.log(personDetails.age); //25
console.log(personDetails.address); //pollachi
console.log(personDetails.phone); //9994304490
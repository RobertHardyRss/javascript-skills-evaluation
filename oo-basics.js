class Person {
	constructor(firstName, lastName, age) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
	}

	getFullName() {
		return `${this.firstName} ${this.lastName}`;
	}
}

let displayMagicalAges = function (people) {
	people.forEach((person) => {
		if (person.age > 50 && person.age < 60) {
			console.log(`${person.getFullName()} is at a magical age!`);
		} else if (person.age >= 60) {
			console.log(`${person.getFullName()} is a wise old wizard!`);
		}
	});
};

let person1 = new Person("Robert", "Hardy", 50);
let person2 = new Person("Jack", "Black", 52);
let person3 = new Person("Kyle", "Gass", 61);
let people = [person1, person2, person3];

console.log(people.filter((person) => person.age <= 60));

displayMagicalAges(people);

people.push(new Person("Bruce", "Dickinson", 63));

displayMagicalAges(people);

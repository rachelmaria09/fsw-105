var shopper = {
    firstName: "Rachel",
    lastName: "Gildea",
    Age: 30,
    grocerycart: ["apple", "bananas", "clementines"],
    fullName: function() {
        return "Congratulations, " + this.firstName + " " + this.lastName;
    }
};
console.log(shopper.fullName() + "! You just purchased an " + shopper.grocerycart[0] + ".");

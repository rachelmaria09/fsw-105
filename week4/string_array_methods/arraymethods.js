var fruit = ["banana","apple","orange","watermelon"];
var vegetables = ["carrot","tomato","pepper","lettuce"];

function arrayExercises() {
    //Remove the last item from the vegetable array.
    vegetables.pop();
        console.log("The vegetable array after requirement 1 is " + vegetables + ".");
    //Remove the first item from the fruit array.
    fruit.shift();
        console.log("The fruit array after requirement 2 is " + fruit + ".");
    //Find the index of "orange".
    var orangeIndex = fruit.indexOf("orange");
        console.log("The index of 'orange' after requirement 3 is " + orangeIndex + ".");
    //Add that number to the end of the fruit array.
    var newArr = fruit.concat(orangeIndex);
        console.log("The fruit array after requirement 4 is " + newArr + ".");
    //Use the length property to find the length of the vegetable array.
    var vegLength = vegetables.length;
        console.log("The length of the vegetable array after requirement 5 is " + vegLength + ".");
    //Add that number to the end of the vegetable array.
    var newVegArr = vegetables.concat(vegLength);
        console.log("The updated vegetable array after requirement 6 is " + newVegArr + ".");
    //Put the two arrays together into one array. Fruit first. Call the new Array "food".
    var food = newArr.concat(newVegArr);
        console.log("The two arrays combined into one array after requirement 7 is " + food + ".");
    ///Remove 2 elements from your new array starting at index 4 with one method.
    var newFood = food.splice(4, 2);
        console.log("The new 'food' array after requirement 8 is " + newFood + ".");
    //Reverse your array.
    var reversedFood = food.reverse();
        console.log("The array reversed after requirement 9 is " + food + ".");
    //Turn the array into a string and return it.
    var finalStep = reversedFood.join(",")
        console.log("The final product is " + finalStep + ".");
}
console.log(arrayExercises());
console.log("============");

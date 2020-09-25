// ASSESSMENT 3: Coding Practical Questions


// --------------------1) Create a function that returns the first 10 numbers of the Fibonacci sequence in an array. Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]


//Write a function that takes a number as an argument equal to the number of Fibonacci numbers desired
const giveMeFibonacci = (number) => {
    //Intialize an empty array to hold the answer
    let fiboArray = []
    //Create a for loop that will iterate the number of times specified in the argument 
    for (let index = 0; index < number; index++) {
        //Using a ternary operator, push the number 1 as the first two values of the answer array if needed to satisfy the argument
        //For future values, push the sum of the next-to-last and last numbers of the current answer array
        fiboArray.length < 2 ? fiboArray.push(1) : fiboArray.push(fiboArray[fiboArray.length-1] + fiboArray[fiboArray.length-2])
    }
    //Return the array containing the answer
    return fiboArray
}


console.log(giveMeFibonacci(10))//expect [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
console.log(giveMeFibonacci(3))//expect [1, 1, 2]
console.log(giveMeFibonacci(1))//expect [1]
console.log(giveMeFibonacci(0))//expect []
console.log(giveMeFibonacci(15))//expect [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610]


// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.


var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]
var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]
var fullArr3 = ["This", "should", "return", "an", "empty", "array", true]
// Expected output: []


//Write a function that takes an array
const onlyNumbersSmallToBig = (array) => {
    //Declare an array as a duplicate of the argument so as not to destroy the original array
    let sortedNumberArray = array
    //Return the duplicate array after using filter to extract only the odd numbers from the duplicate array, then use sort with the compare function to sort the numbers from least to greatest
    return sortedNumberArray.filter(value => typeof value === "number" && value % 2 !== 0).sort((a, b) => a - b)  
}


console.log(onlyNumbersSmallToBig(fullArr1))//expect [-9, 7, 9, 199]
console.log(onlyNumbersSmallToBig(fullArr2))//expect [-823, 7, 23]
console.log(onlyNumbersSmallToBig(fullArr3))//expect []


// --------------------3) Create a function that takes in a string of a single word and returns the middle letter of the word. If the word is an even number of letters, return the two middle letters.


var middleLetters1 = "hello"
// Expected output: “l”
var middleLetters2 = "rhinoceros"
// Expected output: “oc”


//Write a function that takes a string
const getMiddleLetter = (string) => {
    //If the string is an odd length, return the middle letter
    //Otherwise return the letter at the position of string length divided by 2 plus the letter immediately following it
    return string.length % 2 === 1 ? string[Math.floor(string.length / 2)] : string[(string.length / 2) - 1] + string[string.length / 2]
}


console.log(getMiddleLetter(middleLetters1))//expect "l"
console.log(getMiddleLetter(middleLetters2))//expect "oc"


// --------------------4) Create a CLASS to get the area of a sphere. Create three spheres with different radi as test cases. Area of a sphere =  4πr^2 (four pi r squared)

//Create a new class sphere that takes a name and a radius in its constructor
class Sphere {
    constructor(name, radius) {
        this.name = name
        this.radius = radius
    }

    //Create a method to calculate the area of the sphere rounded to two decimal places (because pi is ridiculous) using the sphere's radius atrribute
    area() {
        return (4 * Math.PI * this.radius ** 2).toFixed(2)
    }

    //Create a method to return a description of the sphere's area using the sphere's name and area attributes
    describeArea() {
        return `${this.name} has an area of ${this.area()}.`
    }
}

var sphere1 = new Sphere("Sphere 1", 2)
var sphere2 = new Sphere("Sphere 2", .5)
var sphere3 = new Sphere("Sphere 3", 1000)


//I realize I overdid this one. I wanted to add some complexity to make sure I understood all the stuff we learned this week. To refactor this code to mvp I'd remove name from the constructor and comment out lines 80, 89-93 and adjust my new spheres accordingly. I could also remove the toFixed method from line 86 if precision was an imperative.


console.log(sphere1.describeArea());//expect "Sphere 1 has an area of 50.27."
console.log(sphere2.describeArea());//expect "Sphere 2 has an area of 3.14."
console.log(sphere3.describeArea());//expect "Sphere 3 has an area of 12566370.61."


// --------------------5) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]
var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]
var numbersToAdd3 = []
// Expected output: []


//Write a function that takes an array
const gradualSum = (array) => {
    //Intialize an empty array to hold the answer
    sumArray = []
    //Create a for loop that will iterate over the length of the array supplied by the argument 
    for (let index = 0; index < array.length; index++) {
        //Using a ternary operator, push the first value of the argument array into the answer array
        //For future values, push the sum of the next value in the argument array and the last value of the answer array into the answer array 
        index === 0 ? sumArray.push(array[index]) : sumArray.push(array[index] + sumArray[index-1])
    }
    //Return the array containing the answer
    return sumArray
}


console.log(gradualSum(numbersToAdd1));//expect [2, 6, 51, 60]
console.log(gradualSum(numbersToAdd2));//expect [0, 7, -1, 11]
console.log(gradualSum(numbersToAdd3));//expect []

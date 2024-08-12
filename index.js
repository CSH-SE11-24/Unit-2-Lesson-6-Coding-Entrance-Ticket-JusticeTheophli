// In this entrance ticket, you will be building a "guess the number" game. 
// Create a new variable and put a number from 1-100 in
let number = "6"
console.log (number)
// Prompt the user to guess the number
let user = prompt("Guess the number")

// Cast the user input to a number



// Create a new variable called attempts and set it to 0
let attempts = 0

// Create a while loop that runs while the user guess is not equal to your number


// In the while loop, prompt the user to guess the number again (remember to cast)


// In the while loop, increase the attempts by 1
attempts++

// In the while loop, write an if statement that does the following
// If the user guess is higher, say "Too high!"
// If the user guess is lower, say "Too low!"
// If the user guess is right, say "You got it!"
let user = prompt(" Guess a number")
if(guess === number){
  Console.log("You got it!")
}else{
  console.log("Too low!")}
}else{
  console.log("Too high!")}


// After the while loop, print "It took (attempts) attempts" 
console.log("It took you" + attempts +"attempts to guess the number")

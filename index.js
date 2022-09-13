// Code your solutions in this file

for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    
}


const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    
    }
    return gifts;
}

wrapGifts(gifts);



// create a new, empty array to hold the messages;
function writeCards(namesArray, event) {
    // iterate through the input array and, inside the loop, build out the 'thank you' message for each name using string interpolation, then add that message to the new array you created
    let thankYouCards = []
    for (let i = 0; i < namesArray.length; i++) {
        thankYouCards.push(`Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`);
        
    }
    // after the loop finishes and all of the messages have been added to the new array, return the new array.
    return thankYouCards;
}

function countDown(countNumber){
    while (countNumber > 0){
        console.log(countNumber);
        countNumber -= 1;
    }
    console.log (countNumber);
}


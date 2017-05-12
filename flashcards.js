var inquirer = require("inquirer");

var card = require("./card.js");
var ClozeCard = require("./ClozeCard.js");
var score = 0;
var card1 = new card("(1) question: What is the best Arnold movie?", "Terminator 2");
var card3 = new card("(3) question: Who has the most Mr. Olympia wins?", "Ronnie Coleman");
var card4 = new card("(4) question: What is the best fried food?", "Hot wings");
var card5 = new card("(5) question: Where can you get the best hotwings?", "Anaheim");
var card6 = new card("(6) question: Where is the happiest place on Earth?", "Anaheim");

var ClozeCard1 = new ClozeCard("(7) question: _ movie", "Arnold");
var ClozeCard2 = new ClozeCard("(8) question: _country in the world", "Russia");
var ClozeCard3 = new ClozeCard("(9) question: _has the most wins", "Ronnie Coleman");
var ClozeCard4 = new ClozeCard("(10) question: _fried food", "Hot Wings");
var ClozeCard5 = new ClozeCard("(11) question: _city", "Anaheim");
var ClozeCard6 = new ClozeCard("(12) question: _happiest place on Earth", "Disneyland");


function askQuestions() {
    inquirer.prompt([{
            type: "input",
            message: card1.front,
            name: "name"
        },

        {
            type: "input",
            message: card2.front,
            name: "name1"
        }, 
        {
            type: "input",
            message: card3.front,
            name: "name2"
        }, 
        {
            type: "input",
            message: card4.front,
            name: "name3"
        }, 
        {
            type: "input",
            message: card5.front,
            name: "name4"
        }, 
        {
            type: "input",
            message: card6.front,
            name: "name5"
        }, 
        {
            type: "input",
            message: ClozeCard1.partial,
            name: "name6"
        }, 
        {
            type: "input",
            message: ClozeCard2.partial,
            name: "name7"
        }, {
            type: "input",
            message: ClozeCard3.partial,
            name: "name8"
        }, 
        {
            type: "input",
            message: ClozeCard4.partial,
            name: "name9"
        }, 
        {
            type: "input",
            message: ClozeCard5.partial,
            name: "name10"
        }

    ]).then(function(user) {

        if (JSON.stringify(user.name1.toUpperCase()) === JSON.stringify(BasicCard1.back)) {
            console.log("(1) question:Right!");
            score++;
        } 
        else {
            console.log("(1) question:Wrong! The correct answer is: " + BasicCard1.back);
        }
        if (JSON.stringify(user.name2.toUpperCase()) === JSON.stringify(BasicCard2.back)) {
            console.log("(2) question:Right!");
            score++;
        } 
        else 
        {
            console.log("(2) question:Wrong! The correct answer is: " + BasicCard2.back)
        }
        if (JSON.stringify(user.name3.toUpperCase()) === JSON.stringify(BasicCard3.back)) {
            console.log("(3) question:Right!");
            score++;
        } 
        else {
            console.log("(3) question:Wrong! The correct answer is: " + BasicCard3.back)
        }
        if (JSON.stringify(user.name4.toUpperCase()) === JSON.stringify(BasicCard4.back)) {
            console.log("(4) question:Right!");
            score++;
        } 
        else {
            console.log("(4) question:Wrong! The correct answer is: " + BasicCard4.back)
        }
        if (JSON.stringify(user.name5.toUpperCase()) === JSON.stringify(BasicCard5.back)) {
            console.log("(5) question:Right!");
            score++;
        } 
        else {
            console.log("(5) question:Wrong! The correct answer is: " + BasicCard5.back)
        }

        if (JSON.stringify(user.name6.toUpperCase()) === JSON.stringify(ClozeCard1.cloze)) {

            console.log("(6) question:Right!");
            score++;
        } 
        else {
            console.log("(6) question:Wrong! The correct answer is: " + ClozeCard1.cloze);

        }

        if (JSON.stringify(user.name7.toUpperCase()) === JSON.stringify(ClozeCard2.cloze)) {
            console.log("(7) question:Right!");
            score++;
        } 
        else {
            console.log("(7) question:Wrong! The correct answer is: " + ClozeCard2.cloze);
        }

        if (JSON.stringify(user.name8.toUpperCase()) === JSON.stringify(ClozeCard3.cloze)) {
            console.log("(8) question:Right!");
            score++;
        } 
        else {
            console.log("(8) question:Wrong! The correct answer is: " + ClozeCard3.cloze);
        }

        if (JSON.stringify(user.name9.toUpperCase()) === JSON.stringify(ClozeCard4.cloze)) {
            console.log("(9) question:Right!");
            score++;
        } 
        else {
            console.log("(9) question:Wrong! The correct answer is: " + ClozeCard4.cloze);
        }
        if (JSON.stringify(user.name10.toUpperCase()) === JSON.stringify(ClozeCard5.cloze)) {
            console.log("(10) question:Right!");
            score++;
        } 
        else {
            console.log("(10) question:Wrong! The correct answer is: " + ClozeCard5.cloze);
        }
        if (JSON.stringify(user.name11) === JSON.stringify(ClozeCard6.cloze)) {
            console.log("(11) question:Right!");
            score++;
        } 
        else {
            console.log("(11) question:Wrong! The correct answer is: " + ClozeCard6.cloze);
        }
        console.log("Score: " + score);
        inquirer.prompt([{
            type: "confirm",
            message: "Play again:",
            name: "confirm",
            default: true
        }]).then(function(user) {
            if (user.confirm) {
                askQuestion();
                score = 0;
            } else {
                process.exit;
            }
        });
    })
}

askQuestion();
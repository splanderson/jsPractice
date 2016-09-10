//We're going to create the JS for a basic quiz application.

//Let's think about the nature of this quiz app first. We're going to be creating lots of user objects, and we're
//also going to be creating lots of Question objects. Those would make two perfectly good constructors.

//Create a QuizUser constructor that accepts name, email, password, and totalScore parameters and set them appropriatly

function QuizUser(name, email, password, totalScore){
  this.name = name;
  this.email = email;
  this.password = password;
  this.totalScore = totalScore;
}

//Create a Question constructor that accepts title, answersArray, rightAnswer, and difficulty parameters

function Question(title, answersArray, rightAnswer, difficulty){
  this.title = title;
  this.answersArray = answersArray;
  this.rightAnswer = rightAnswer;
  this.difficulty = difficulty;
}

//Create a quizUsers Array which is going to hold all of our users.

var quizUsers = [];

//Let's say three people signed up for our service, create 3 instances of User and add each to the users Array

var user1 = new QuizUser ('Anne', 'anne@anne.com', 'pw1');
var user2 = new QuizUser ('Bob', 'bob@bob.com', 'pw2');
var user3 = new QuizUser ('Cole', 'cole@cole.com', 'pw3');

quizUsers.push(user1, user2, user3);

//Create a questions Array which is going to hold all of our questions

var questions = [];

//Now, let's say we wanted to create a quiz about JavaScript. Create three instances of Question which contain the following data
//title: 'T/F: Inheritance is achieved in JavaScript through Prototypes?'
//title: 'T/F: JavaScript is just a scripting version of Java'
//title: "T/F: In Javascript, == doesn't check 'type' but just the value - where === checks type and value"
//Fill in the rest of the required data as you see appropriate.

var q1 = new Question ('T/F: Inheritance is achieved in JavaScript through Prototypes?', 'True or False', 'T', 3);
var q2 = new Question ('T/F: JavaScript is just a scripting version of Java', 'True or False', 'F', 2);
var q3 = new Question ("T/F: In Javascript, == doesn't check 'type' but just the value - where === checks type and value", 'True or False', 'T', 4);

//Now push all of your instances of Question into the questions Array

questions.push(q1, q2, q3);

console.log('My users Array and my questions array are ...');
//Now loop console.log your users array and your questions array and verify that they're both holding the right data.

for(var k = 0; k < quizUsers.length; k++){
  console.log(quizUsers[k]);
}
for(var j = 0; j < questions.length; j++){
  console.log(questions[j]);
}

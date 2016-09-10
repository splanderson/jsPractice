//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

function Person(name, age){
  this.name = name;
  this.age = age;
}

//Now create three instances of Person with data you make up

var name1 = new Person ('Anne', 23);
var name2 = new Person ('Bob', 24);
var name3 = new Person ('Cole', 25);

//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

Person.prototype.sayName = function(){
  alert(this.name);
}

// name1.sayName();

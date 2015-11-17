// // constructor function week
// // function Course(name, gradingareas, finalgrade) {
// //     this.name = name;
// //     this.gradingareas = gradingareas;
// //     this.finalgrade = finalgrade;
// // }
// // // then later I want to create a new instance
// // var course1 = new Course("CS1500", gradingareas, 85);

// // course.prototype.name = "CS2000"
// // course.prototype.gradingareas = gradingareas

// // **************************************

// function Car(brand, wheels){   
//	this.brand = brand;   
// this.wheels = wheels; } 
// my_car = new Car("toyota", 4);


// //Add a method or attribute to the parent object //by using the object's prototype 
// Car.prototype.friendly_brand = function(){   return "This car's brand is " + this.brand; }

// //Now you can use that method in all instances of the object 
// my_car.friendly_brand() > "This car's brand is Toyota"


function User(){   
	this.fname = fname;  
	this.lname = lname;   
	this.email = email;   
	test.name = function(){return 
		this.fname + " " + 
		this.lname;
	} 
}
function Admin(){   
	this.admin = true 
}

Admin.prototype = new User(); 

//Admin now has all of the traits of a User as well as its //own admin boolean flag

function Animal(){
	this.breed = breed;
	this.species = species; 
	this.name = function() {return
	this.breed + " " + this.lname;
	}
}

function Mammal(){
this.mammal = true}
Mammal.protype = new Animal();




// **********************************

// 1. Create an OO JavaScript "cheat sheet" that includes:
// Creating objects using object literal constructor function Creating instances of objects accessing object attributes and methods prototypical objects

// define JSopbect w/object literal, object Method - performed on obects, methods store propertife function definitions

// Below is a variable  being assigned with names and values known as properties; we can do methods (actions) on the objects.
 var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

 // to access or call an object property can be done:
 // objectName.propertyName or objectName.propertyName

person.eyeColor;
person ["eyeColor"]

//to access the object method (action) you use the following syntex:

var person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
       return this.firstName + " " + this.lastName;
    }
};
person.eyeColor ()


The file should have comments (denoted with a //) to explain each piece of code. 2. Write a method that lists the properties of a JavaScript object. (Hint: loops!)
3. Create an object called  Multiplier
 with two methods:  multiply
 and
 getCurrentValue
.  multiply
 should initially return the number supplied * 1 and from then on whatever the current value is times the number supplied.  getCurrentValue
should return the last answer returned from multiply.


4. Create an object to represent a record player called Jukebox. Create another object to represent a Record. The Jukebox should be able to tell you what Record is currently playing, and allow you to switch the currently playing record. The currently playing Record returned should be an object that allows you to query for the title and artist of that record as well as the title and artist combined together into one string. Create instances of each object defined to prove that your object model works
5. Implement an object model that allows you to store strings that represent a Photo. Your model should include an Album object that can contain many Photo objects in its photos attribute. Each Album should allow you to add a new photo, list all photos, and access a specific photo by the order it was added. Each Photo should tell you the photo's file name and the location the photo was taken in. Create instances of each object defined to prove that your object model works.
6. Create a prototypical Person object. From this object, extend a Teacher object and a Student object. Each of these objects should have attributes and methods pertinent to what they describe. Also create a School object that should be able to store
Object Oriented JavaScript Exercises

instances of students and teachers. Make sure to write code afterwards that creates instances of these objects to make sure that what you've written works well and you're able to store the necessary data in each object.
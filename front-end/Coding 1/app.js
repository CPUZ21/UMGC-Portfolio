// function isValidPassword(password, username) {
//     if (password.length <= 8){
//         return false;
//     }
//     if(password.indexOf(' ') !== -1) {
//         return false;
//     }
//     if(password.indexOf(username) !== -1) {
//         return false;
//     }
//     return true;
// }


// function avg(arr) {
//     let total = 0;
//     for(let num of arr){
//         total += num;
//     }
//     let res = total / arr.length;
//     return res;
// }


// function isPangram(pan) {
//     if (pan.indexOf('a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z') != -1) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }
// The quick brown fox jumps over the lazy dog

//The five boxing wizards jump quickly


// function pick(arr) {
// 	//return random element from arr
// 	const idx = Math.floor(Math.random() * arr.length);
// 	return arr[idx];
// }

// function getCard() {
// 	const values = [
// 		'1',
// 		'2',
// 		'3',
// 		'4',
// 		'5',
// 		'6',
// 		'7',
// 		'8',
// 		'9',
// 		'10',
// 		'J',
// 		'Q',
// 		'K',
// 		'A'
// 	];
// 	const suits = [ 'clubs', 'spades', 'hearts', 'diamonds' ];
// 	return { value: pick(values), suit: pick(suits) };
// }
    

// function greet() {
// 	console.log('HI I LOVE YOU!')
// }

// function repeatThreeTimes(funk){
// 	funk();
// 	funk();
// 	funk();
// }



// function giveBirth(){
// 	console.log("GIVING BIRTH!!")
// 	return function cry() {
// 		return "WAAAAAHHH"
// 	}
// }

// function countDown(time){
// 	let timer = setInterval(function(){
// 	  time--;
// 	  if(time <= 0){
// 		clearInterval(timer);
// 		console.log('DONE!');
// 	  }
// 	  else {
// 		console.log(time);
// 	  }
  
// 	},1000)
//   }
  
//   function randomGame(){
// 	let num;
// 	let times = 0;
// 	let timer = setInterval(function(){
// 	  num = Math.random();
// 	  times++
// 	  if(num > .75) {
// 		clearInterval(timer);
// 		console.log("It took " + times + " try/tries.");
// 	  }
// 	},1000)
//   }

// const redbtn = document.querySelector('#red');
// redbtn.addEventListener('click',function() {
// 	makeBody('red');
// });

class Vehicle {
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    honk() {
      return "Beep.";
    }
  
    toString() {
      return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`;
    }
  }
  
  /** Cars are a type of vehicle with 4 wheels. */
  
  class Car extends Vehicle {
    constructor(make, model, year) {
      super(make, model, year);
      this.numWheels = 4;
    }
  }
  
  /** Cars are a type of vehicle with 2 wheels. */
  
  class Motorcycle extends Vehicle {
    constructor(make, model, year) {
      super(make, model, year);
      this.numWheels = 2;
    }
  
    revEngine() {
      return "VROOM!!!";
    }
  }
  
  class Garage {
    constructor(capacity) {
      this.vehicles = [];
      this.capacity = capacity;
    }
  
    add(newVehicle) {
      if (!(newVehicle instanceof Vehicle)) {
        return "Only vehicles are allowed in here!";
      }
      if (this.vehicles.length >= this.capacity) {
        return "Sorry, we're full.";
      }
      this.vehicles.push(newVehicle);
      return "Vehicle added!";
    }
  }



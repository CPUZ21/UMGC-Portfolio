function pick(arr) {
	//return random element from arr
	const idx = Math.floor(Math.random() * arr.length);
	return arr[idx];
}

function getCard() {
	const values = [
		'1',
		'2',
		'3',
		'4',
		'5',
		'6',
		'7',
		'8',
		'9',
		'10',
		'J',
		'Q',
		'K',
		'A'
	];
	const suits = [ 'clubs', 'spades', 'hearts', 'diamonds' ];
	return { value: pick(values), suit: pick(suits) };
}
    

//ON MY OWN
function difference(x,y) {
    console.log(x - y);
}
//ON MY OWN
function product(x,y) {
    console.log(x * y);
}

function printDay(num) {
    let dates = {
        1: "Sunday",
        2: "Monday",
        3: "Tuesday",
        4: "Wednesday",
        5: "Thursday",
        6: "Friday",
        7: "Saturday",
      };
      return dates[num];
    }


function lastElement(arr) {
    return arr[arr.length-1];
}
//ON MY OWN
function numberCompare(x,y) {
    if(x > y) {
        return 'First is greater';
    }

    if(x < y) {
        return 'Second is greater'
    }

    if(x === y) {
        return 'Numbers are equal'
    }
}
//ON MY OWN
function singleLetterCount(x,y) {
    return x.split(y).length-1;
}

function multipleLetterCount(str){
    str = str.toLowerCase();
    let finalObj = {};
    for(let i =0; i< str.length; i++){
      if (finalObj[str[i]] === undefined){
        finalObj[str[i]] = 1;
      } else {
        finalObj[str[i]]++;
      }
    }
    return finalObj;
  }

  // ON MY OWN
  function arrayManipulation(arry,command,location,value) {
    if (command === 'remove' && location === 'end') {
        return arry.pop();
    }

    if(command === 'remove' && location === 'beginning') {
        return arry.shift();
    }

    if(command === 'add' && location === 'beginning') {
        arry.unshift(value)
        return arry;
    }

    if(command === 'add' && location === 'end') {
        arry.push(value)
        return arry;
    }
  }


 
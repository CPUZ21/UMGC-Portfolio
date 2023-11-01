function addCommas(number) {
    var num_parts = number.toString().split(".");
    var num_part1 = num_parts[0];
    var num_part2 = num_parts[1];
  
    if (num_part1.length > 3) {
      num_part1 = num_part1.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  
    if (num_part2) {
      return num_part1 + "." + num_part2;
    } else {
      return num_part1;
    }
  }

var number = 1234567890;
var formattedNumber = addCommas(number);
console.log(formattedNumber);

module.exports = addCommas;
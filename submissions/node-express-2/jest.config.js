const time = (h, m) => {
    let count = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "twenty five", "twenty six", "twenty seven", "twenty eight", "twenty nine", "thirty"]
    if (m === 1 && h > 11) {
      return count[h] + " oh one " + "PM";
    } else
    if (m === 1 && h <= 11) {
        return count[h] + " oh one " + "AM";
      } else
    if (m === 2 && h > 11) {
      return count[h] + " oh two " + "PM";
    } else
    if (m === 2 && h <= 11) {
        return count[h] + " oh two " + "AM";
      } else
    if (m === 3 && h > 11) {
      return count[h] + " oh three " + "PM"; 
    } else
    if (m === 3 && h <= 11) {
        return count[h] + " oh three " + "AM"; 
      } else
    if (m === 4 && h > 11) {
      return count[h] + " oh four " + "PM";
    } else
    if (m === 4 && h <= 11) {
        return count[h] + " oh four " + "AM";
      } else
    if (m === 5 && h > 11) {
      return count[h] + " oh five " + "PM";
    } else 
    if (m === 5 && h <= 11) {
        return count[h] + " oh five " + "AM";
      } else 
    if (m === 6 && h > 11) {
      return count[h] + " oh six " + "PM";
    } else
    if (m === 6 && h <= 11) {
        return count[h] + " oh six " + "AM";
      } else
    if (m === 7 && h > 11) {
      return count[h] + " oh seven " + "PM";
    } else 
    if (m === 7 && h <= 11) {
        return count[h] + " oh seven " + "AM";
      } else 
    if (m === 8 && h > 11) {
      return count[h] + " oh eight " +"PM";
    } else
    if (m === 8 && h <= 11) {
        return count[h] + " oh eight " +"AM";
      } else
    if (m === 9 && h > 11) {
        return count[h] + " oh nine " + "PM";
    } else
    if (m === 9 && h <= 11) {
        return count[h] + " oh nine " + "AM";
    } else
    if (m === 10 && h > 11) {
        return count[h] + " ten "  + "PM";
    } else 
    if (m === 10 && h <= 11) {
        return count[h] + " ten " + "AM";
    } else 
    if (m === 11 && h > 11) {
        return count[h] + " eleven " + "PM";
    } else 
    if (m === 11 && h <= 11) {
        return count[h] + " eleven " + "AM";
    } else 
    if (m === 12 && h > 11) {
        return count[h] + " twelve " + "PM";
    } else 
    if (m === 12 && h <= 11) {
        return count[h] + " twelve " + "AM";
    } else
    if (m === 13 && h > 11) {
        return count[h] + " thirteen " + "PM";
    } else 
    if (m === 13 && h <= 11) {
        return count[h] + " thirteen " + "AM";
    } else 
    if (m === 14 && h > 11) {
        return count[h] + " fourteen " + "PM";
    } else
    if (m === 14 && h <= 11) {
        return count[h] + " fourteen " + "AM";
    } else
    if (m === 15 && h > 11) {
        return count[h] + " fifteen " + "PM";
    } else
    if (m === 15 && h <= 11) {
        return count[h] + " fifteen " + "AM";
    } else
    if (m === 16 && h > 11) {
        return count[h] + " sixteen " + "PM";
    } else
    if (m === 16 && h <= 11) {
        return count[h] + " sixteen " + "AM";
    } else
    if (m === 17 && h > 11) {
        return count[h] + " seventeen " + "PM";
    } else
    if (m === 17 && h <= 11) {
        return count[h] + " seventeen " + "AM";
    } else
    if (m === 18 && h > 11) {
        return count[h] + " eightteen " + "PM";
    } else
    if (m === 18 && h <= 11) {
        return count[h] + " eightteen " + "AM";
    } else
    if (m === 19 && h > 11) {
        return count[h] + " nineteen " + "PM";
    } else
    if (m === 19 && h <= 11) {
        return count[h] + " nineteen " +"AM";
    } else
    if (m === 20 && h > 11) {
        return count[h] + " twenty " + "PM";
    } else
    if (m === 20 && h <= 11) {
        return count[h] + " twenty " + "AM";
    } else
    if (m === 21 && h > 11) {
        return count[h] + " twenty one " + "PM";
    } else
    if (m === 21 && h <= 11) {
        return count[h] + " twenty one " + "AM";
    } else
    if (m === 22 && h > 11) {
        return count[h] + " twenty two " + "PM";
    } else
    if (m === 22 && h <= 11) {
        return count[h] + " twenty two " + "AM";
    } else
    if (m === 23 && h > 11) {
        return count[h] + " twenty three " + "PM";
    } else
    if (m === 23 && h <= 11) {
        return count[h] + " twenty three " + "AM";
    } else
    if (m === 24 && h > 11) {
        return count[h] + " twenty four " + "PM";
    } else
    if (m === 24 && h <= 11) {
        return count[h] + " twenty four " + "AM";
    } else
    if (m === 25 && h > 11) {
        return count[h] + " twenty five " + "PM";
    } else
    if (m === 25 && h <= 11) {
        return count[h] + " twenty five " + "AM";
    } else
    if (m === 26 && h > 11) {
        return count[h] + " twenty six " + "PM";
    } else
    if (m === 26 && h <= 11) {
        return count[h] + " twenty six " + "AM";
    } else
    if (m === 27 && h > 11) {
        return count[h] + " twenty seven " + "PM";
    } else
    if (m === 27 && h <= 11) {
        return count[h] + " twenty seven " + "AM";
    } else
    if (m === 28 && h > 11) {
        return count[h] + " twenty eight " + "PM";
    } else
    if (m === 28 && h <= 11) {
        return count[h] + " twenty eight " + "AM";
    } else
    if (m === 29 && h > 11) {
        return count[h] + " twenty nine " + "PM";
    } else
    if (m === 29 && h <= 11) {
        return count[h] + " twenty nine " + "AM";
    } else
    if (m === 30 && h > 11) {
        return count[h] + " thirty " + "PM";
    } else
    if (m === 30 && h <= 11) {
        return count[h] + " thirty " + "AM";
    } else
    if (m === 31 && h > 11) {
        return count[h] + " thirty one " + "PM";
    } else
    if (m === 31 && h <= 11) {
        return count[h] + " thirty one " + "AM";
    } else
    if (m === 32 && h > 11) {
        return count[h] + " thirty two " + "PM";
    } else
    if (m === 32 && h <= 11) {
        return count[h] + " thirty two " + "AM";
    } else
    if (m === 33 && h > 11) {
        return count[h] + " thirty three " + "PM";
    } else
    if (m === 33 && h <= 11) {
        return count[h] + " thirty three " + "AM";
    } else
    if (m === 34 && h > 11) {
        return count[h] + " thirty four " + "PM";
    } else
    if (m === 34 && h <= 11) {
        return count[h] + " thirty four " + "AM";
    } else
    if (m === 35 && h > 11) {
        return count[h] + " thirty five " + "PM";
    } else
    if (m === 35 && h <= 11) {
        return count[h] + " thirty five " + "AM";
    } else
    if (m === 36 && h > 11) {
        return count[h] + " thirty six " + "PM";
    } else
    if (m === 36 && h <= 11) {
        return count[h] + " thirty six " + "AM";
    } else
    if (m === 37 && h > 11) {
        return count[h] + " thirty seven " + "PM";
    } else
    if (m === 37 && h <= 11) {
        return count[h] + " thirty seven " + "AM";
    } else
    if (m === 38 && h > 11) {
        return count[h] + " thirty eight " + "PM";
    } else
    if (m === 38 && h <= 11) {
        return count[h] + " thirty eight " + "AM";
    } else
    if (m === 39 && h > 11) {
        return count[h] + " thirty nine " + "PM";
    } else
    if (m === 39 && h <= 11) {
        return count[h] + " thirty nine " + "AM";
    } else
    if (m === 40 && h > 11) {
        return count[h] + " forty " + "PM";
    } else
    if (m === 40 && h <= 11) {
        return count[h] + " forty " + "AM";
    } else
    if (m === 41 && h > 11) {
        return count[h] + " forty one " + "PM";
    } else
    if (m === 41 && h <= 11) {
        return count[h] + " forty one " + "AM";
    } else
    if (m === 42 && h > 11) {
        return count[h] + " forty two " + "PM";
    } else
    if (m === 42 && h <= 11) {
        return count[h] + " forty two " + "AM";
    } else
    if (m === 43 && h > 11) {
        return count[h] + " forty three " + "PM";
    } else
    if (m === 43 && h <= 11) {
        return count[h] + " forty three " + "AM";
    } else
    if (m === 44 && h > 11) {
        return count[h] + " forty four " + "PM";
    } else
    if (m === 44 && h <= 11) {
        return count[h] + " forty four " + "AM";
    } else
    if (m === 45 && h > 11) {
        return count[h] + " forty five " + "PM";
    } else
    if (m === 45 && h <= 11) {
        return count[h] + " forty five " + "AM";
    } else
    if (m === 46 && h > 11) {
        return count[h] + " forty six " + "PM";
    } else
    if (m === 46 && h <= 11) {
        return count[h] + " forty six " + "AM";
    } else
    if (m === 47 && h > 11) {
        return count[h] + " forty seven " + "PM";
    } else
    if (m === 47 && h <= 11) {
        return count[h] + " forty seven " + "AM";
    } else
    if (m === 48 && h > 11) {
        return count[h] + " forty eight " + "PM";
    } else
    if (m === 48 && h <= 11) {
        return count[h] + " forty eight " + "AM";
    } else
    if (m === 49 && h > 11) {
        return count[h] + " forty nine " + "PM";
    } else
    if (m === 49 && h <= 11) {
        return count[h] + " forty nine " + "AM";
    } else
    if (m === 50 && h > 11) {
        return count[h] + " fifty " + "PM";
    } else
    if (m === 50 && h <= 11) {
        return count[h] + " fifty " + "AM";
    } else
    if (m === 51 && h > 11) {
        return count[h] + " fifty one " + "PM";
    } else
    if (m === 51 && h <= 11) {
        return count[h] + " fifty one " + "AM";
    } else
    if (m === 52 && h > 11) {
        return count[h] + " fifty two " + "PM";
    } else
    if (m === 52 && h <= 11) {
        return count[h] + " fifty two " + "AM";
    } else
    if (m === 53 && h > 11) {
        return count[h] + " fifty three " + "PM";
    } else
    if (m === 53 && h <= 11) {
        return count[h] + " fifty three " + "AM";
    } else
    if (m === 54 && h > 11) {
        return count[h] + " fifty four " + "PM";
    } else
    if (m === 54 && h <= 11) {
        return count[h] + " fifty four " + "AM";
    } else
    if (m === 55 && h > 11) {
        return count[h] + " fifty five " + "PM";
    } else
    if (m === 55 && h <= 11) {
        return count[h] + " fifty five " + "AM";
    } else
    if (m === 56 && h > 11) {
        return count[h] + " fifty six " + "PM";
    } else
    if (m === 56 && h <= 11) {
        return count[h] + " fifty six " + "AM";
    } else
    if (m === 57 && h > 11) {
        return count[h] + " fifty seven " + "PM";
    } else
    if (m === 57 && h <= 11) {
        return count[h] + " fifty seven " + "AM";
    } else
    if (m === 58 && h > 11) {
        return count[h] + " fifty eight " + "PM";
    } else
    if (m === 58 && h <= 11) {
        return count[h] + " fifty eight " + "AM";
    } else
    if (m === 59 && h > 12) {
        return count[h] + " fifty nine " + "PM";
    } else 
    if (m == 59 && h <= 12) {
        return count[h] + " fifty nine " + "AM";
    } else 
    if (m == 0 && h == 0) {
        return " Midnight ";
    } else 
    if (m == 0 && h == 12) {
        return " Noon ";
    }

  };
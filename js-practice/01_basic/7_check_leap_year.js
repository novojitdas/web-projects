function leapYear(year){
      return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

console.log(leapYear(2012));
console.log(leapYear(300));
console.log(leapYear(621));
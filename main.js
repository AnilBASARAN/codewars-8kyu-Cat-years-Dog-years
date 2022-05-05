
var humanYearsCatYearsDogYears = function(humanYears) {
    function catYears(humany){
    if(humany == 1 ){
      return 15
    }else if(humany == 2){
      return 24
    }else if(humany > 2){
      return 24 + (humany-2)*4
    }
    }
     function dogYears(humany){
    if(humany == 1 ){
      return 15
    }else if(humany == 2){
      return 24
    }else if(humany > 2){
      return 24 + (humany-2)*5
    }
    }
     return [humanYears,catYears(humanYears),dogYears(humanYears)];




/*

8kyu-Cat years, Dog years


Kata Task
I have a cat and a dog.

I got them at the same time as kitten/puppy. That was humanYears years ago.

Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:

humanYears >= 1
humanYears are whole numbers only
Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that
Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that




BEST SOLUTİONS
------------------------------------------------------------
var humanYearsCatYearsDogYears = function(y) {
  if (y == 1) return [1, 15, 15]
  if (y == 2) return [2, 24, 24]
  return [y, (y-2) * 4 + 24, (y-2) * 5 + 24]
}

------------------------------------------------------------

const humanYearsCatYearsDogYears = humanYears => [
  humanYears,
  ( humanYears - 1 ? 16 : 11 ) + 4 * humanYears,
  ( humanYears - 1 ? 14 : 10 ) + 5 * humanYears,
];

------------------------------------------------------------

const humanYearsCatYearsDogYears = (humanYears) => {
  let catYears = 0;
  let dogYears = 0;
  
  for (let i = 1; i <= humanYears; i++) {
    if (i === 1) {
      catYears += 15;
      dogYears += 15;
    }
    else if (i === 2) {
      catYears += 9;
      dogYears += 9;
    }
    else {
      catYears += 4;
      dogYears += 5;
    }
  }
  return [humanYears,catYears,dogYears];
}
console.log(Bissextile(2020))
console.log(Bissextile(2012))
console.log(Bissextile(2029))

function Bissextile(year) {
   if ((year % 4 === 0 && year % 100 > 0) || (year % 400 === 0)) {
    // || équivaut à OR (les deux formules sont les deux moyens de calculer une année bissextile)
       return year + " est bissextile";
   } else {
       return year + " n'est pas bissextile";
   }
}
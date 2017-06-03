var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
/*
A score of 50-60 is an F
A score of 61-70 is a D
A score of 71-80 is a C
A score of 81-90 is a B
A score of 91-100 is an A

Use console.log() to output the following criteria:

How many of each grade?
What is the lowest grade?
What is the highest grade?
*/

//iterate through array to read each value and count 
//how many in each category
var countA=0, countB=0, countC=0, countD=0, countF=0;

for (var i=0; i<scores.length; i++){

var grade = scores[i];

if (grade>=91 && grade<=100){
	grade === "A";
	countA++;

}
else if (grade>=81 && grade<=90){
	grade === "B";
	countB++;
}

else if (grade>=71 && grade<=80){
	grade === "C";
	countC++;
}

else if (grade>=61 && grade<=70){
	grade === "D";
	countD++;
}

else if (grade>=50 && grade<=60){
	grade === "F";
	countF++;
}//set up so that a switch statement could use this info
//to do something else if necessary

}//end of for loop

console.log(`There are ${countA} grades of A in the scores.`);
console.log(`There are ${countB} grades of B in the scores.`);
console.log(`There are ${countC} grades of C in the scores.`);
console.log(`There are ${countD} grades of D in the scores.`);
console.log(`There are ${countF} grades of F in the scores.`);

//lowest grade
//highest grade

function getMax(array) {
  return Math.max(...scores);
}

function getMin(array){
	return Math.min(...scores);
}


console.log(`The highest score was ${getMax(scores)}.`);
console.log (`The lowest score was ${getMin(scores)}.`);
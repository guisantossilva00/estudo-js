let varA = 'A';
let varB = 'B';
let varC = 'C';
let varAx;

varAx = varA
varA = varB;
varB = varC;
varC = varAx;
console.log(varA, varB, varC)
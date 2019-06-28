// data (variables)
 var a = 10;
 var b = 5;

// functions
function print_vals(varA, varB){
 console.log(`The value of A is: ${varA} and the value of B is: ${varB}`); 
}
function add(varA, varB){
 return (varA+varB); 
}
function subtract(varA, varB){
 return  (varA-varB); 
}
function multiply(varA, varB){ 
 return  (varA*varB);
}
function divide(varA, varB){
 return  (varA/varB);
}
function do_math(varA, varB, funct){
 switch (funct){
 case  add:
   return console.log(`${varA} plus  ${varB}  equals:  ${add(varA, varB)}`); 
 case subtract:
   return console.log(`${varA} minus  ${varB}  equals:  ${subtract(varA, varB)}`);           
 case multiply:
   return console.log(`${varA} times  ${varB}  equals: ${multiply(varA, varB)}`);  
 case divide: 
   return console.log(`${varA} divided by  ${varB} equals: ${divide(varA, varB)}`); 
 } 
}


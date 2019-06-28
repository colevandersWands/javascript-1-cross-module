
var printABButton = document.getElementById("printAB");
printABButton.onclick = function() {
                                    print_vals(a, b);
                                    }
var printAddButton = document.getElementById("printAdd");
printAddButton.onclick = function() {
                                    do_math(a, b, add);
                                    }         
var printSubtractButton = document.getElementById("printSubtract");
printSubtractButton.onclick = function() {
                                         do_math(a, b, subtract);
                                         }
var printMultiplyButton = document.getElementById("printMultiply");
printMultiplyButton.onclick = function() {
                                         do_math(a, b, multiply);
                                         }
var printDivideButton = document.getElementById("printDivide");
printDivideButton.onclick = function() {
                                       do_math(a, b, divide);
                                     }


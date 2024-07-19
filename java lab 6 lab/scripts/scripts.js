/****************** YOUR NAME: 

The instructions describe the missing logic that is needed; you will translate these into JavaScript in the places indicated.

You are encouraged to use the provided naming convention for ease of review.

*/

/****************** create variables ******************/
/* create variables to hold the values for modelName and duration */

// INSERT YOUR CODE HERE

let modelName = 'XYZ'      ;     // creating variables first 
let duration = 0            ;      //like modelName and duration

/****************** helper function ******************/
/* create a function called recalculate() which will
    - create a variable to represent the calculated-cost span element. That will look something like:
        // let costLabel = document.getElementById("calculated-cost");
    - check the value of the modelName variable, and use that to calculate the new total cost:
        e.g. if modelName is currently "XYZ", duration * 100 gives us the new total cost.
        if modelName is currently "CPRG", duration * 213 gives us the new total cost.
    - set the value of the calculated-cost element's innerHTML to this new value........................................all done till here 
*/

// INSERT YOUR CODE HERE
function recalculate(){                                                                           //creating function name recalculation**//
    let costLabel = document.getElementById("calculated-cost");                                                
    if(modelName == "XYZ"){
        costLabel.innerHTML = 100*duration ;
    }
    else{
        costLabel.innerHTML = 213*duration ;

    }
}
/****************** model button logic ******************/

/* 
- first, create a variable to represent the "Switch Model" pseudo-button (hint: can use getElementById)
- second, create a function called changeModel() which checks the value of the model name variable. This function will:
    - create a variable to represent the model-text span element
    - if modelName is currently "XYZ", change the value of modelName to "CPRG", and change the innerHTML of the model-text span element to "Model CPRG"
    - if modelName is currently "CPRG", change the value of modelName to "XYZ", and change the innerHTML of the model-text span element to "Model XYZ"
    - then, recalculate() the total cost.
- finally, uncomment the following line of JavaScript to have this function run automatically whenever the pseudo-button is clicked: */
    // modelButton.addEventListener("click", changeModel);............................................all done till here..............

// INSERT YOUR CODE HERE

var modelButton = document.getElementById("model-button");            // creating a variable we can use other way to creat it also  like let modelbutton kind .
function changeModel() {
    let modelTextSpan = document.getElementById("model-text");              // for span 
    if (modelName == "XYZ") {
        modelName = "CPRG";                                           // we are doing this to  make sure that when ever are pressing model xyz so that it get change to model cprt 
        modelTextSpan.innerHTML = "Model CPRG"; }                        // innerhtml is just memory to remain 
    else if (modelName == "CPRG") {
        modelName = "XYZ";
        modelTextSpan.innerHTML = "Model XYZ";
    }
recalculate()              ;               // calling recalculate button to recalculate from above 
}
modelButton.addEventListener("click", changeModel);
/****************** duration button logic ******************/
/*  - first, create a variable to represent the "Change Duration" pseudo-button.
    - then, create a function called changeDuration() that will
        - create a variable to represent the duration-text span element
        - prompt() the user for a new duration
        - save the result of the prompt() to the duration variable
        - change the innerHTML of the duration-text span element to this new value
        - recalculate() the total cost/
    - finally, attach this function to the "Change Duration" pseudo-button, so it runs whenever the button is clicked.
*/

// INSERT YOUR CODE HERE

var changeDurationA = document.getElementById("duration-button");     // creating durationA VARIABLE 
function changeDuration(){
    var durationTextSpan = document.getElementById("duration-text");                // for span 
     duration = prompt("What is the duration Time?");
    
    durationTextSpan.innerHTML = duration
    recalculate();       // calling recalculate button to recalculate used in the first one 

}
changeDurationA.addEventListener("click", changeDuration);


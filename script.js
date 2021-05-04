// declare variable player
var player;

// set player to "x"
player = "x";

// or combined: declare variable player and set player to "x"
var player = "x";

// life sign
// alert("Hello " + player);

// declare variable hint and set it to element object with
// id "hint", using document.querySelector()
var hint = document.querySelector("#hint");

// set innerHTML of hint to "Hello " plus value 
// of player plus " - select a field!" at the end
hint.innerHTML= "Hello " + player + " - select a field";

// declare in HTML the onclick function to trigger 
// when the user clicks into a child button


function markField(mouseEvent) {

    // alert(mouseEvent.target);

    // declare variable field and set to target object of mouse event
    var field = mouseEvent.target;

    // label the field with the player's name:
    // set aria-label attribute to set background-image
    field.setAttribute("aria-label", player);

    // disable field against further mouse clicks (set DISABLED attribute)
    field.setAttribute("disabled","disabled");
     

    //change current player
    if (player == "x") player = "o";
    else player = "x";
    
    // set inner html text of hint to "next player is" plus
    // value of player plus "!"
    hint.innerHTML = "Next player is " + player + "!";

    // call function allFieldsAreSelected
    //allFieldsAreSelected(); 

    // if all fields were selected, using allFieldAreSelected(),
    // set hint, including the end of the game
    if (allFieldsAreSelected()) hint.innerHTML = "Game over!"
    
}

// declare function allFieldsAreSelected
function allFieldsAreSelected() {
    
     //alert("here we go!");

     // declare the variable fields and set it to the list of field objects,
     // usind document.querySelectorAll()
     var fields = document.querySelectorAll("#gameboard button");
     
     // alert(fields.length);

     var len = fields.length; //"len" for length

  for (var c = 0; c < len; c++) {
       // alert("c = " + c)
     
       var f = fields[c]; // get field object from the list fields
    
       // alert( f.getAttribute("aria-label"));
     
    // if there is an empty label, return false (exit function)
    if ( f.getAttribute("aria-label") == "") {

        // alert("bingo");
        return false;
     }
     
  }
    //alert("bongo");
    return true;
}




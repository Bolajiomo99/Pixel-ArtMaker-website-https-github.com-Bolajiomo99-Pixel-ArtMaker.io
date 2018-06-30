//Author: Bolaji js

// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

// Various selectors assigned to variables
let inputColor, inputHeight, inputWeight, pixelCanvas, sizePicker, resetButton;
inputColor = $( "#colorPicker" );
pixelCanvas = $( "#pixelCanvas" );
resetButton = $( "input:reset" );


//function to build the grid

function makeGrid() {
  inputHeight = $( "#inputHeight" ).val();
  inputWeight = $( "#inputWeight" ).val();
  pixelCanvas.children().remove();
  for ( let row = 0; row < inputHeight; row++ ){
    pixelCanvas.append( "<tr></tr>" );
  }
  let gridRows = $( "tr" );
  for ( let column = 0; column < inputWeight; column++ ){
      gridRows.append( "<td></td>" );
  }

 let cell = pixelCanvas.find( "td" );


/* event listener to paint our canvas with selected color
and also remove a painted cell in case of mistake.
*/

  cell.click( function () {

      let colorValue = $( "#colorPicker" ).val();

      if ( $( this ).attr("bgcolor") ){
        $( this ).removeAttr("bgcolor");
      }else{
        $( this ).attr("bgcolor", colorValue);
      }
  });

}

/*event listener to graw our canvas based of number of rows and
columns inputs.
*/

$( "#sizePicker" ).submit( function( event ) {
  event.preventDefault();
  makeGrid();
});

// Event listener to set our canvas layout to new or prevent

resetButton.click( function () {
  pixelCanvas.children().remove();
});

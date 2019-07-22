// Select color input
const colorInput = $('#colorPicker');

// Select size input
const HeightInput = $('#inputHeight');
const WidthInput = $('#inputWidth');

// When size is submitted by the user, call makeGrid()
form = $('#sizePicker');
form.submit(function (event) {
  event.preventDefault(); // this will prevent page refreshing when submit button pressed
  makeGrid(); 
});

/**
makeGrid function To remove any previous table 
Also to build new grid by loop
 */
function makeGrid() {
  let heightValue = HeightInput.val();
  let widthValue = WidthInput.val();

  let PixelCanvas = $('#pixelCanvas');
  PixelCanvas.children().remove(); 

  for (let N = 0; N < heightValue; N++) {
    PixelCanvas.append("<tr></tr>"); 
  }
  for (let M = 0; M < widthValue; M++) {
    $('tr').append("<td></td>");
  }

  // To change cell's background color depending on choosing color
  $('table').on('click', 'td', function() {
    $(this).css('backgroundColor', colorInput.val() );
  });
}
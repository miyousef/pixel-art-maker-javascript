// Select color input
const colorInput = $('#colorPicker');

// Select size input
const HeightInput = $('#inputHeight');
const WidthInput = $('#inputWidth');

// When size is submitted by the user, call makeGrid()
form = $('#sizePicker');
form.submit(function (event) {
  event.preventDefault(); // this will prevent page refreshing when submit button pressed
  makeGrid(); //call makeGrid() to build the canvas with specific size
});

function makeGrid() {
  // Preparing the input values 
  let heightValue = HeightInput.val();
  let widthValue = WidthInput.val();

  // Preparing the table
  let PixelCanvas = $('#pixelCanvas');
  PixelCanvas.children().remove(); // This will remove any previous table

  // Forming the canvas based on N(heightValue), M(widthValue)
  for (let N = 0; N < heightValue; N++) {
    PixelCanvas.append("<tr></tr>"); 
  }
  for (let M = 0; M < widthValue; M++) {
    $('tr').append("<td></td>");
  }

  // Changes the background color of the cell, with respective chosen color
  $('table').on('click', 'td', function () {
    if ($(this).attr('style')) {
      $(this).removeAttr('style')
    } else {
      $(this).attr('style', 'background-color:' + $('#colorPicker').val())
    }
  });

}
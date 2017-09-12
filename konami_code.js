const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  console.log('init() loaded');
  document.body.addEventListener( 'keydown', codeCheck );

  function codeCheck(e) {
    let indexCounter = 0;
    let keyPressed = parseInt( e.which || e.detail );
    console.log('keyPressed: ', keyPressed);
    console.log('indexCounter: ', indexCounter);
    console.log('code[indexCounter]: ', code[indexCounter]);
      debugger
    if ( keyPressed === code[indexCounter] ) {
      indexCounter++;
      // console.log('indexCounter: ', indexCounter);

      if ( indexCounter.length === code.length ) {
        alert( 'Konami!' );
      }
    } else {
      console.log('entered != else clause')
      indexCounter = 0;
    }
  }
}

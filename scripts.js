
// I like the approach of using a helper function for this
function handleTimeRemaining() {
  const timeRemainingElement = document.getElementById('time-remaining');
  timeRemainingElement.innerHTML = 'bananas';
}

document.addEventListener("DOMContentLoaded", function() {
  // use DOM manipulation and grab the select dropdown element
  const select = document.querySelector('#select');

  // looks at the current value selected in the select dropdown element
  function setTimerValue() {
    // within here, we need to call updateElapsedTime with the appropriate argument (amount of time)
    switch (this.value) {
      case '3':
          console.log('3 minutes selected');
          updateElapsedTime(180)
          break;
      case '5':
          alert('option 2 selected');
          break;
      case '8':
          confirm('You chose option 3, didn\'t you?');
          break;
      default:
        console.log('what are you doing this is not an option')
    }
  }

  if (select) {
    console.log('---select in if statement---', select)
    select.addEventListener('change', setTimerValue);
  }
  
  let startTime = 0; // Record the start time

  function updateElapsedTime(timerTimeInSeconds) {
    const currentTime = new Date().getTime();
    const elapsedTime = currentTime - startTime;

    // Calculate minutes and seconds
    const minutes = Math.floor(elapsedTime / (1000 * 60));
    const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);

    // Format the time as "mm:ss"
    const timeString = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

    /*
      Ternary operator is a shorthand for an if/else statement
      if (minutes < 10) {
        return '0';
      } else {
        return '';
      }

      the equivalent using ternary operator is
      minutes < 10 ? '0' : ''
    
    */

    // Update the UI
    document.getElementById("time-remaining").innerText = timeString;

    if (elapsedTime >= timerTimeInSeconds) {
      startTime = new Date().getTime(); // this will reset the start time
    }
    // Call the function again after 1 second
    setTimeout(updateElapsedTime, 1000);
  }

  // Initial call to start updating elapsed time
  updateElapsedTime();
});

  
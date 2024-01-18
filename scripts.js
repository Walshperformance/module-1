let startTime = 0;

function updateElapsedTime(timerTimeInSeconds) {
  const currentTime = new Date().getTime();
  const elapsedTime = currentTime - startTime;

  // Calculate minutes and seconds
  const minutes = Math.floor(elapsedTime / (1000 * 60));
  const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);

  // Format the time as "mm:ss"
  const timeString = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

  // Update the UI
  document.getElementById("time-remaining").innerText = timeString;

  if (elapsedTime / 1000 >= timerTimeInSeconds) {
    // time reached
    return;
  }

  // Call the function again after 1 second
  setTimeout(function () {
    updateElapsedTime(timerTimeInSeconds), 1000
  });
}

// Start the timer
function startTimer(timerTimeInSeconds) {
  startTime = new Date().getTime();
  updateElapsedTime(timerTimeInSeconds);
}


// looks at the current value selected in the select dropdown element
function setTimerValue() {
  // within here, we need to call updateElapsedTime with the appropriate argument (amount of time)
  switch (this.value) {
    case '3':
      console.log('3 minutes selected');
      startTimer(180)
      break;
    case '5':
      // alert('option 2 selected');
      break;
    case '8':
      // confirm('You chose option 3, didn\'t you?');
      break;
    default:
      console.log('what are you doing this is not an option')
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // use DOM manipulation and grab the select dropdown element
  // we have to add the event listener in select after the DOM has loaded
  select = document.querySelector('#select');
  select.addEventListener('change', setTimerValue);
});


let startTime = 0;
// global variable

//define const that is our starting time
//every second needs to subtract a second (counting down)
//make time human readable (00:00)
//having the timer stop at zero for each option
function updateRemainingTime(timerTimeInSeconds) {
  const timeRemaining = timerTimeInSeconds;

  console.log('---timeRemaining---', timeRemaining)

  // Calculate minutes and seconds
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;

  // Format the time as "mm:ss"
  const timeString = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

  // Update the UI
  document.getElementById("time-remaining").innerText = timeString;

  if (timeRemaining === 0) {
    // time reached
    return;
  }

  // Call the function again after 1 second
  //  setTimeout(function () {
   // updateElapsedTime(timeRemaining - 1), 1000
  // });
  setTimeout(function () {
    updateRemainingTime(timeRemaining - 1);
  }, 1000);
}

// Start the timer
function startTimer(timerTimeInSeconds) {
  startTime = timerTimeInSeconds;
  updateRemainingTime(timerTimeInSeconds);
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
      console.log('5 minutes selected');
      startTimer(300)
      break;
    case '8':
      console.log('8 minutes selected');
      startTimer(480)
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


// Grow/Shrink Circle

const growCircle = () ==> {
circleProgress.classList.add("circle-grow")
}
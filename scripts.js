
function handleTimeRemaining() {
  const timeRemainingElement = document.getElementById('time-remaining');
  timeRemainingElement.innerHTML = 'bananas';
}

// const select = document.getElementById('select');

const select = document.querySelector('#select');

function logValue() {
  console.log('---in log value---')
  switch (this.value) {
    case '3':
        console.log('option 1 selected');
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

console.log('---select---', select)
if (select) {
  console.log('---select in if statement---', select)
  select.addEventListener('change', logValue);
}


// create a function in scripts.js that will return the elapsed time
// and populate this value in the UI using DOM manipulation

document.addEventListener("DOMContentLoaded", function() {
  const timerDurations = [180, 300, 480, 600]; // Timer durations in seconds
  let currentTimerIndex = 0; // Index of the current timer duration
  let startTime; // Record the start time

  function updateElapsedTime() {
    const currentTime = new Date().getTime();
    const elapsedTime = currentTime - startTime;

    // Calculate minutes and seconds
    const minutes = Math.floor(elapsedTime / (1000 * 60));
    const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);

    // Format the time as "mm:ss"
    const timeString = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

    // Update the UI
    document.getElementById("elapsedTime").innerText = timeString;

    // Check if the current timer duration is reached
    if (elapsedTime >= timerDurations[currentTimerIndex] * 1000) {
      // Switch to the next timer duration or reset to the first one if the last is reached
      currentTimerIndex = (currentTimerIndex + 1) % timerDurations.length;
      startTime = new Date().getTime(); // Reset the start time
    }

    // Call the function again after 1 second
    setTimeout(updateElapsedTime, 1000);
  }

  // Initial call to start updating elapsed time
  updateElapsedTime();
});

  
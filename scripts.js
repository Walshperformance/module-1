
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
          startTimer(180)
          break;
      case '5':
          alert('5 minutes selected');
          startTimer(300)
          break;
      case '8':
          confirm('8 minutes selected');
          startTimer(480)
          break;
      case '10':
          confirm('10 minutes selected');
          startTimer(600)
      default:
        console.log('what are you doing this is not an option')
    }
  }

  if (select) {
    console.log('---select in if statement---', select)
    select.addEventListener('change', setTimerValue);
  }
  
  let startTime = 0; // Record the start time

  function timeRemaining(timerTimeInSeconds) {
    const currentTime = new Date().getTime();
    const remainingTime = currentTime - startTime;
    

    // Calculate minutes and seconds
    const minutes = Math.floor(remainingTime / (1000 * 60));
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    // Format the time as "mm:ss"
    const timeString = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;


    // Update the UI
    document.getElementById("time-remaining").innerText = timeString;

    if (remainingTime <= timerTimeInSeconds) {
      startTime = new Date().getTime(); // I changed this to be less than or equal to
    }
    // Call the function again after 1 second
    setTimeout(() => timeRemaining(timerTimeInSeconds), 1000);
  }
});
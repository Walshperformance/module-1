
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


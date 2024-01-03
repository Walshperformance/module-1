// setTimeout(() => {
    // console.log("Delayed for 1 second.");
  // }, "5000");
  // testTimer2("3000")

  function testTimer(time) {
    setTimeout(() => {
      console.log(`Delayed for ${time / 1000} seconds`);
    }, time);
  }

  // testTimer("5000")

  const testTimer2 = (time) => {
    setTimeout(() => {
      console.log(`Delayed for ${time / 1000} seconds`);
    }, time);
  }
  testTimer2("3000")




const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask user for countdown time
rl.question("Enter number of seconds to count down: ", (input) => {
  let time = Number(input);

  if (isNaN(time) || time <= 0) {
    console.log("Please enter a valid positive number.");
    rl.close();
    return;
  }

  console.log(`Countdown started for ${time} seconds...`);
  console.log("Press 's' to stop the countdown.");

  // Interval: displays remaining time every second
  const intervalId = setInterval(() => {
    console.log(`Remaining: ${time} seconds`);
    time--;

    if (time < 0) {
      clearInterval(intervalId);
      console.log("Countdown Complete!");
      process.exit();
    }
  }, 1000);

  // Key detection
  process.stdin.on("data", (key) => {
    if (key.toString().trim().toLowerCase() === "s") {
      clearInterval(intervalId);
      console.log("Countdown Stopped by User!");
      process.exit();
    }
  });
});

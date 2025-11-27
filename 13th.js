// Start printing "Loading..." for every 1 second
let loading = setInterval(() => {
  console.log("Loading...");
}, 1000);

// Stop after the 5 seconds
setTimeout(() => {
  clearInterval(loading);      //  this Stop the repeated loading messages
  console.log("Loaded successfully!");
}, 5000);

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function fetchData() {
  console.log('Start');
  await delay(2000);
  console.log('End');
}

fetchData();

// Start
// End

// The await expression pauses the execution of the fetchData function 
// until the delay promise resolves after 2 seconds, 
// making the code look synchronous even though it's asynchronous.
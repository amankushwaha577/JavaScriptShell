const delay = (ms) => new Promise((resolve, reject) => setTimeout(() => reject('Error!'), ms));

async function fetchData() {
  try {
    await delay(2000);
    console.log('Data fetched');
  } catch (error) {
    console.log('Caught error:', error);
  }
}

fetchData();

// OP: Caught error: Error!

// If the promise is rejected, the error will be caught by the catch block within the async function, 
// preventing unhandled promise rejections.

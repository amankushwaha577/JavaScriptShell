try {
  console.log("Trying to execute...");
  let data = fetch("https://example.com/api");  // Potential error
} catch (error) {
  console.error("Error fetching data:", error.message);
} finally {
  console.log("Execution completed.");
}
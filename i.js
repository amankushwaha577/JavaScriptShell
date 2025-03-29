try {
  setTimeout(() => {
    throw new Error("Timeout Error");
  }, 0);
} catch (error) {
  console.log("Caught:", error.message);
}
// Function to place a bid
function placeBid(productId) {
  // Get the current bid amount
  const bidElement = document.getElementById(productId);
  let currentBid = parseInt(bidElement.innerText.substring(1)); // Remove "$" and convert to number

  // Increase the bid amount by $10
  currentBid += 10;

  // Update the displayed bid amount
  bidElement.innerText = $${currentBid};
}
function calculateTotal() {
  // Get input values
  var quantity = parseInt(document.getElementById('quantity').value)
  var price = parseFloat(document.getElementById('price').value)
  var discountPercentage = parseFloat(
    document.getElementById('discountPercentage').value
  )

  // Calculate total discount
  var totalDiscount = (quantity * price * discountPercentage) / 100

  // Calculate total amount
  var totalAmount = quantity * price - totalDiscount

  // Update total discount label
  document.querySelector('.total-discount').innerText =
    'Total Discount: ' + ' ₹ ' + totalDiscount.toFixed(2)

  // Update total amount label
  document.querySelector('.total-amount').innerText =
    'Total Amount: ' + ' ₹ ' + totalAmount.toFixed(2)
}

// Attach click event listener to the button
document.querySelector('button').addEventListener('click', calculateTotal)

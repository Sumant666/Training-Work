
function sortArray() {
    const numbersInput = document.getElementById('numbersInput').value;
    const numbersArray = numbersInput.split(',').map(num => parseInt(num.trim(), 10));
  
    // Remove any empty or NaN entries from the array
    const filteredArray = numbersArray.filter(num => !isNaN(num));
  
    // Sort in ascending order
    filteredArray.sort((a, b) => a - b);
  
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = 'Sorted Array: ' + filteredArray.join(', ');
  }
  
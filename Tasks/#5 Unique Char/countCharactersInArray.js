function countUniqueCharactersInArray(inputArray) {
    const uniqueCharacters = new Set();
    
    for (const element of inputArray) {
      if (typeof element === "string") {
        for (const char of element) {
          uniqueCharacters.add(char);
        }
      } else {
        uniqueCharacters.add(element);
      }
    }
    
    return uniqueCharacters.size;
  }
  
  // Example usage:
  const inputArray = ["apple", "banana", "orange"];
  const uniqueCharacterCount = countUniqueCharactersInArray(inputArray);
  console.log("Unique character count:", uniqueCharacterCount); 
  
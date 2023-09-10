function translateToSpanish(englishWord) {
    console.log(englishWord)
    // Define a dictionary for translation
    const dictionary = {
      "hi": "Hola",
      "water": "agua",
      // Add more translations here as needed
    };
  
    // Convert the input word to lowercase for case-insensitive matching
    const lowercaseWord = englishWord.toLowerCase();
  
    // Check if the word exists in the dictionary
    if (dictionary.hasOwnProperty(lowercaseWord)) {
      return dictionary[lowercaseWord];
    } else {
      // If the word is not found in the dictionary, return it as-is
      return englishWord;
    }
  }
  
  // Example usage:
  const inputWord = "hi";
  const translatedWord = translateToSpanish(inputWord);
  console.log(`Translation of "${inputWord}" to Spanish: ${translatedWord}`);
  

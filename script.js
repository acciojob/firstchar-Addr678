function firstChar(text) {
  // your code here
	// Trim the input string to remove leading and trailing spaces
  text = text.trim();

  // Check if the trimmed string is empty
  if (text === '') {
    return '';
  }

  // Iterate through each character of the trimmed string
  for (let i = 0; i < text.length; i++) {
    // Check if the current character is not a space
    if (text[i] !== ' ') {
      // Return the first non-space character
      return text[i];
    }
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));

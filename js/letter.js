   
    const sentences = [
      "It's our second month together.",
      "No one's ever said it was easy.",
      "But I'm here... still here.",
      "I'm sure we'll have our ups and downs just like we always ask to each other.",
      "And no matter what happens, I'll hold on.",
      "Words can never express all the things I truly feel, but I'm just here to remind you that I LOVE YOU.",
      "I will always, honestly, truly, completely, love you. 💚💚💚",
    ];

    const letterDiv = document.getElementById("letter");

    let currentSentenceIndex = 0;
    let currentCharacterIndex = 0;

    function typeSentence() { 
        
      if (currentSentenceIndex < sentences.length) {
        const sentence = sentences[currentSentenceIndex];
        const pElement = document.createElement("p");
        letterDiv.appendChild(pElement);
        typeCharacters(pElement, sentence);
      }
    }

    function typeCharacters(element, sentence) {
      if (currentCharacterIndex < sentence.length) {
        element.textContent += sentence.charAt(currentCharacterIndex);
        currentCharacterIndex++;
        setTimeout(() => typeCharacters(element, sentence), 100); // Adjust typing speed as needed
      } else {
        currentSentenceIndex++;
        currentCharacterIndex = 0;
        setTimeout(typeSentence, 1000); // Delay before typing the next sentence
      }
    }

    
      
  
import { useState } from "react";
import "./App.css";

function App() {
  const [outputString, setOutputString] = useState("");

  const handleTileClick = (letter) => {
    setOutputString((prevString) => {
      const newString = prevString + letter;

      const consecutiveLetters = replaceConsecutiveLetters(newString);

      return consecutiveLetters;
    });
  };

  const replaceConsecutiveLetters = (string) => {
    let result = "";
    let count = 1;

    for (let i = 1; i <= string.length; i++) {
      if (string[i] === string[i - 1]) {
        count++;
      } else {
        if (count >= 3) {
          result += "_".repeat(Math.floor(count / 3));
        } else {
          result += string.slice(i - count, i);
        }
        count = 1;
      }
    }

    return result;
  };

  const alphabet = Array.from({ length: 26 }, (_, index) =>
    String.fromCharCode(65 + index)
  );

  return (
    <div className="App">
      <div className="grid-container">
        {alphabet.map((letter) => (
          <div
            key={letter}
            className="tile"
            onClick={() => handleTileClick(letter)}
          >
            {letter}
          </div>
        ))}
      </div>
      <div id="outputString">
        <p>Output String: {outputString}</p>
      </div>
    </div>
  );
}

export default App;

## Alphabet Tile Interaction React App

# Description:

The Alphabet Tile Interaction React App is a web application built using React.js that allows users to interact with a grid of tiles, each representing a letter of the alphabet in uppercase format. The application provides the following functionality:

- Tile Rendering: Renders a tile for each letter of the alphabet (A to Z) within a container or grid layout.

- Click Interaction: When a tile is clicked, the corresponding letter is appended to a string displayed in an HTML element with the ID outputString.

- Consecutive Letter Replacement: If three consecutive letters in the outputString are the same, they are replaced with an underscore (\_).

- Multiple Consecutive Letters: If more than three consecutive letters are the same, they are replaced with the appropriate number of underscores.

# Example Output:

Initial state: outputString is empty.
After Clicking "A", "B", "C", "F", "F", "F", "G".. outputString should display "ABC_G".
After Clicking "A" six times followed by "B", the outputString should display "\_\_B".

# Installation:

Ensure you have Node.js and npm installed on your system. Clone this repository, navigate to the project directory, and run npm install to install the necessary dependencies. Once the installation is complete, run npm start to start the development server and open the application in your default web browser.

# Live Link: https://frontend-task-2-six.vercel.app/

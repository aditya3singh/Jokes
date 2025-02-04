# Jokes
The NewJoke component is a React-based application that fetches and displays random jokes from the Official Joke API. It allows users to view a joke and fetch a new one by clicking a button. The component is designed to be simple, user-friendly, and responsive.

Key Features:
Fetching Jokes:

The component fetches a random joke from the API when the page loads (using useEffect).

Users can fetch a new joke by clicking the "Click Here for the jokes" button.

Displaying Jokes:

Each joke is displayed in two parts:

Setup: The initial part of the joke (the question or premise).

Punchline: The humorous conclusion or punchline of the joke.

Error Handling:

The component includes error handling to catch and log any issues that occur during the API request, ensuring a smooth user experience.

State Management:

The useState hook is used to manage the joke data, which is stored as an object with setup and punchline properties.

The useEffect hook ensures that a joke is fetched and displayed as soon as the component mounts.

User Interaction:

A button is provided for users to fetch a new joke dynamically, making the app interactive and engaging.

How It Works:
Initial Load:

When the component mounts, it makes an API request to fetch a random joke and displays it on the screen.

Fetching a New Joke:

When the user clicks the button, the getNewJoke function is triggered, making another API request to fetch and display a new joke.

Error Handling:

If the API request fails (e.g., due to network issues), the error is caught and logged to the console, preventing the app from crashing.

Example Output:
Setup: "Why don't scientists trust atoms?"

Punchline: "Because they make up everything!"

Technologies Used:
React: For building the user interface and managing state.

Fetch API: For making HTTP requests to the joke API.

Hooks: useState for state management and useEffect for side effects (fetching data on component mount).

Usage:
This component can be used in any React application to display random jokes. It’s ideal for entertainment purposes, learning React basics, or as a fun addition to a website.

Code Structure:
State: joke stores the current joke as an object with setup and punchline.

Functions:

getNewJoke: Fetches a new joke when the button is clicked.

getFirstJoke: Fetches the initial joke when the component mounts.

Rendering: Displays the joke setup, punchline, and a button to fetch a new joke.

![image](https://github.com/user-attachments/assets/55c584cd-3010-4a0a-99bf-34c731a7df62)


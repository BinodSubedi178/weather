Weather App
A simple weather application built with React that allows users to search for a city and view current weather details such as temperature, humidity, wind speed, and more. It fetches real-time data using the OpenWeatherMap API.

Features

City Search: Users can enter a city name to get current weather information.
Weather Display: Shows the city name, temperature in Celsius, weather description, humidity, wind speed, and temperature ranges (min/max).
Loading Spinner: Displays a spinner while fetching data.
Error Handling: If an invalid city is entered or there is a fetch error, an error message is shown.
Responsive Design: Works well on both desktop and mobile devices.
Technologies Used

React: The app is built using React for building the user interface and managing state.
OpenWeatherMap API: Used to fetch real-time weather data.
CSS: Basic styling to display weather information cleanly.

Key Concepts:
React useState and useEffect: Gained experience managing state in React and using the useEffect hook to fetch data when the city name changes.
Handling Asynchronous Code: Learned how to use async/await with fetch to retrieve data from an external API and handle responses.
Conditional Rendering: Practiced conditional rendering to display a loading spinner while data is being fetched, show weather information once the data is ready, and handle error messages when something goes wrong.
Error Handling: Learned how to properly handle and display error messages when the API request fails or when the user enters an invalid city.
Responsive Web Design: Used basic CSS to make the app mobile-friendly and responsive to different screen sizes.

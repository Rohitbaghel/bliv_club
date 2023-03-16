This project is a frontend application that displays a list of crypto coin data retrieved from the CoinGecko API. The API wrapper has been implemented to handle the rate limit of 10-50 calls per minute.

Getting Started
To run this project, follow these steps:

Clone the repository to your local machine.
Install the necessary dependencies using npm install.
Start the development server using npm start.
The application should open automatically in your default web browser. If not, navigate to http://localhost:3000.
Dependencies
This project uses the following dependencies:

React
Redux
React Redux
Axios
Lodash
React Router DOM
Folder Structure
The folder structure for this project is as follows:


Copy code
├── README.md
├── package.json
├── public
│   ├── index.html
│   └── ...
└── src
    ├── actions
    │   └── index.js
    ├── components
    │   ├── Coin.js
    │   ├── CoinList.js
    │   ├── Error.js
    │   └── Loading.js
    ├── reducers
    │   └── index.js
    ├── styles
    │   ├── index.css
    │   
    ├── utils
    │   ├── APIwrapper.js 
    ├── App.js
    ├── index.js
    └── store.js
The actions folder contains Redux actions to be dispatched to the store.
The components folder contains React components to be rendered on the UI.
The reducers folder contains Redux reducers to update the store state.
The styles folder contains CSS stylesheets for each component and a main stylesheet for the entire application.
The utils folder contains utility functions used throughout the application.
App.js is the main React component that renders the entire application.
index.js is the entry point of the application.
store.js is the Redux store for managing the application state.
API Wrapper
The CoinGecko API wrapper has been implemented in the utils/api.js file using Axios and Lodash. The throttle.js file is used to throttle the API calls to stay within the rate limit of 10-50 calls per minute.

Components
The following components have been implemented in this project:

CoinList.js: This component displays a list of crypto coin data fetched from the CoinGecko API.
Coin.js: This component displays a single crypto coin from the list.
Loading.js: This component displays a loading animation while the API data is being fetched.
Error.js: This component displays an error message if there is an issue fetching the API data.
Styling
The application has been styled using tailwindcss.A main stylesheet index.css is used to apply global styles to the entire application.

Conclusion
This project demonstrates how to implement an API wrapper to handle rate limits in a frontend application using React and Redux. The CoinGecko API was used as an example, but the wrapper can be adapted to work with other APIs as well.
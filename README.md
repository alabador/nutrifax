# Nutrifax

A web app to search for nutritional values of food, built using React and TypeScript. 


## Demo

https://nutrifax.netlify.app/
## Screenshots

![App Screenshot](./screenshot.png)


## Tech Stack

React, ChakraUI, Nutritionix REST API


## Optimizations

- Removed excessive API calls in useEffect by checking for truthy value before running the function to request from API. This increased performance time, and reduced API usage by around 80% per search. 
- Changed unwanted rendering in React by converting short circuit evaluation (&&) to ternary conditional rendering. This stopped the app from rendering out falsy values (0's) from the API to the DOM, when no values were provided.


## Run Locally

Clone the project

```bash
  git clone https://github.com/alabador/nutrifax.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```


## FAQ

#### Why is the info not showing up when searching for results?

Nutritionix API has a limit of 200 requests per day on the current plan. If there are no search results when entering a query, it may be that the limit has been reached.



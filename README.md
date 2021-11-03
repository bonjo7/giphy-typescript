# Giphy React Typescript App

The giphy application displays a list of `trending` gifs.

From the home page the user may use the search bar in order to search for other gifs.

## Prerequisites

In order to run this application you will need the following

- Node
  - To install node run `npm install -g npm`
  - To ensure it is installed run `node -v` and `npm -v`
- Giphy API Key from [Giphy](https://developers.giphy.com/)
  - Visit the giphy URL [Giphy](https://developers.giphy.com/)
  - Click `Get Started` button
  - Click `Create an App`
  - Sign Up and Login
  - Click `Create App` once signed in
  - Select `API -> Next Step`
  - Enter App Name e.g. `My First Giphy App`
  - Accept terms and conditions
  - Click create app
  - Your giphy API should be made available to you now.

## Build Steps

- Clone project `git clone git@github.com:bonjo7/giphy-typescript.git`
- Change directory for the `giphy-typescript` directory
  - `cd giphy-typescript`
- Install dependencies `npm install`
- Create a file in the root directory called `.env`
  - In this file create a variable `REACT_APP_GIPHY_API_KEY`
  - Your `.env` file should look like this `REACT_APP_GIPHY_API_KEY=<your_giphy_key>`
- Start app `npm run start`
- App should not be running on port 3000 `http://localhost:3000`

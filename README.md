# Chat bot test app

- Node v8

## Description

Test app for trying different logic variations for a basic, statically defined chat app.

## Prerequisites

## Installation Steps

First, rename `.env.example` to `.env` and set variables in this file accordingly.

- `npm install` to install dependencies and build the app

- `npm run build` to build the React web app

- `npm start` to run the app

## Development

`npm run dev` to run a development server with hot reloading

`npm test` to run unit tests 

### Server implementation

There is a very simple Express server which statically serves the React app,
with hot reloading on development.

### React / Redux implementation

All the React app files are in `src`.

The entry point is `src/index.js`. This imports styles, React containers / components and initiates the store, upon which it renders the app.

## Production

`npm start` to start the app

## Built with

- Express for backend
- React for frontend
- Redux
- Webpack

### Implementation and/or architecture

The application is configured with environment variables in `.env`.


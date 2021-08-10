# Squeak 🐶

Table of contents:

- [Squeak 🐶](#squeak-)
  - [Prerequisites](#prerequisites)
    - [Note](#note)
  - [Getting started](#getting-started)
    - [Install dependencies](#install-dependencies)
    - [Starting the full-stack app](#starting-the-full-stack-app)
    - [Start only the default frontend web-app](#start-only-the-default-frontend-web-app)
    - [Start only the default frontend mobile app](#start-only-the-default-frontend-mobile-app)
    - [Start frontend UI library app (default ui library)](#start-frontend-ui-library-app-default-ui-library)
    - [Make a build](#make-a-build)
      - [Note on builds](#note-on-builds)
  - [Running unit tests](#running-unit-tests)
  - [Running end-to-end tests](#running-end-to-end-tests)
  - [View repo dependency graph](#view-repo-dependency-graph)
    - [Learnings](#learnings)
      - [Toolchain](#toolchain)
      - [i18n](#i18n)
      - [NX](#nx)

## Prerequisites

```sh
node >=14.17.4
yarn >=1.22.11
```

- [node](https://nodejs.org/)
- [yarn](https://yarnpkg.com/getting-started/install)
- [docker](https://docs.docker.com/get-started/#download-and-install-docker)
- [docker-compose](https://docs.docker.com/docker-for-mac/install/)

### Note

- The versions aren't enforced via `package.json` engines, but still please try to use the minimum versions

- You can do easy node version management via [nvm](https://github.com/nvm-sh/nvm).

  ```sh
  # install nvm
  $ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
  # open a new shell window, and install node 14.17.4
  $ nvm install 14.17.4
  $ npm install -g yarn@1.22.1

  # use this command to set yourself to the node version specified in `.nvmrc`
  $ nvm use
  ```

## Getting started

### Install dependencies

```sh
yarn
```

### Starting the full-stack app

1. Create local database

   - Make sure `docker` is running.
   - Once docker is running, create the `postgres` db in this project by running `docker-compose`.
   - You can create can be done by running this command:

     ```sh
     yarn db-up
     ```

2. Start the app

   ```sh
   yarn start
   ```

   - This will start the [frontend-web](http://localhost:4200), [backend](http://localhost:3333/api), and [admin](http://localhost:3334) app in parallel.

     - Frontend: <http://localhost:4200>
     - Mobile <http://localhost:8081> (note you )
     - Backend: <http://localhost:3333/api>
     - Admin: <http://localhost:3334>

   - For the mobile app, it is best to start a dev server separately. It will consume data from the backend, so you should do it after running `yarn start`.

   To start the mobile app:

   ```sh
   # start react-native metro server
   yarn mobile
   ```

   - [frontend-mobile](http://localhost:8081) should start a metro server on <http://localhost:8081>
     you will need to start an ios or android emulator in addition to the metro server.

   ```sh
   # start android emulator
   yarn frontend:start:mobile:android
   ```

   ```sh
   # start ios emulator
   yarn frontend:start:mobile:ios
   ```

3. Creating/updating/deleting data

   - either open the [admin](http://localhost:3334) app,
   - or run the following curl command in your shell to seed a sample restaurant entry:

```sh
curl --location --request POST 'http://localhost:3333/api/restaurants' \
--header 'Content-Type: application/json' \
--data-raw '{
  "name": "Pizza Store",
  "city": "Berlin",
  "country": "Germamy",
  "openingHours": {
      "monday": [],
      "tuesday": [
          {
              "type": "open",
              "value": 36000
          },
          {
              "type": "close",
              "value": 64800
          }
      ],
      "wednesday": [],
      "thursday": [
          {
              "type": "open",
              "value": 36000
          },
          {
              "type": "close",
              "value": 64800
          }
      ],
      "friday": [
          {
              "type": "open",
              "value": 36000
          }
      ],
      "saturday": [
          {
              "type": "close",
              "value": 3600
          },
          {
              "type": "open",
              "value": 36000
          }
      ],
      "sunday": [
          {
              "type": "close",
              "value": 3600
          },
          {
              "type": "open",
              "value": 43333
          },
          {
              "type": "close",
              "value": 75600
          }
      ]
  }
}'
```

### Start only the default frontend web-app

```sh
# start dev server in frontend
yarn web
```

- Navigate to <http://localhost:4200>.
- The app will automatically reload if you change any of the source files.

### Start only the default frontend mobile app

```sh
# start dev server
yarn mobile
# once server is running, start either an Android or iOS emulator in another terminal

# android
yarn android

# ios
yarn ios
```

- App should appear in the iOS or Android emulator

- Note:

- If the iOS build fails, try running one more time (often it works the second time)
- If that does not work, try `yarn nx run-ios frontend-mobile` first if the build fails.

### Start frontend UI library app (default ui library)

```sh
# start dev server in Storybook
yarn web-ui
```

- Navigate to http://localhost:4400/. You will be in the [Storybook](https://storybook.js.org/) UI.
- Storybook will automatically reload if you change any of the source files.

Note: converting this into installable packages is easy to do in `nx`.

### Make a build

- Run `yarn build` for a development build
- Run `yarn build --prod` for a production build

#### Note on builds

- converting this build into installable packages is easy to do in `nx`: see [source](https://nx.dev/latest/angular/structure/buildable-and-publishable-libraries)
- the build artifacts will be stored in the `dist/` directory.

## Running unit tests

- unit tests use [Jest](https://jestjs.io)

```sh
# executes all unit tests.
yarn test
```

```sh
# execute the unit tests affected by a change (good for development and CI)
yarn affected:test
```

## Running end-to-end tests

- e2e tests use [Cypress](https://www.cypress.io)

```sh
# executes all e2e tests.
yarn e2e
```

```sh
# execute the e2e tests affected by a change (good for development and CI)
yarn affected:e2e
```

## View repo dependency graph

```sh
yarn dep-graph
```

---

### Learnings

#### Toolchain

- I used [nx](https://nx.dev) to demonstrate how I might scale an app from scratch. It also allowed me to nicely package the frontend/backend apps and associated libraries into a monorepo.

- For enterprise monorepos, I am growing to really appreciate the solution `nx` provides. I also like how the toolchain encourages good practices with file structure. I also like how it allows you to inspect how you are consuming your various libraries via `nx dep-graph`.

#### i18n

- I used `react-18next`, which I found more flexible and quicker to use than `react-intl`. However, this is a client-side rendered app, and I'd have to explore deeper to see if `react-18next` would be viable for a server-side rendered or static-site generated app.

- `react-18next` also works nicely with the React `Suspense` api, which allowed me to lazy load routes.

- I wanted to use `nextjs` and create a site with static generation, but unfortunately `next` does not support `i18n` routing with static generation: see [source](https://nextjs.org/docs/advanced-features/i18n-routing#how-does-this-work-with-static-generation)

- Theme-UI is also buggy with storybook when using the `sx` prop.
- Theme-UI typescript support does not allow enforcing theme shapes between themes. Or at least it is much more difficult to do than with `styled-components`

#### NX

- this is a great tool, but it would be even better to plan a lot beforehand, since it really is opinionated about file structure

- It makes you name everything with a very Angular way approach

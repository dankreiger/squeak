# Squeak 🐶

## Full stack react-admin demo

A possible monorepo setup, with data managed by `react-admin`

## Notes

Key necessary improvements

- Building up the test coverage. I spent most of my time on the app structure, but I did not take a TDD approach to the UI or RestAPI. I learned naming files in a monorepo is very hard.
- Building out the Cypress E2E tests
- Bringing up the unit/integration coverage for utilities and components
- Setting up a CI pipeline with standard test/build/deploy jobs, but also web-vitals and app bundle performance tests
- Building out the React Native App. Sadly I did not start it yet, but you can see there is a basic scaffold
- Integrating Jest tests into the Storybook playground for the frontend component library
- Intl on the backend
- Organize Intl much better in general and research type safety in i18n
- Naming files in a monorepo is a big challenge. In the future I must enforce one pattern at the beginning, but right now I have a mix of patterns between apps, and this is not what I want (I need help being more organized)

---

## Quick Start

If you have any issues, please quickly check the [Prerequisites](#prerequisites).

TLDR - the console will prompt you, but you'll need Docker and docker-compose :)

## Backend

1. open [Docker](https://www.docker.com/)
2. create `postgres` container and wait for the container to be ready
   ```sh
   yarn db-up
   ```
3. seed database (optional - you can also make data in the admin app)
   ```sh
   yarn db-seed
   ```
4. start app and follow prompts
   ```sh
   yarn start
   ```

### Note 
   
After running `yarn start`, I would recommend choosing the `Fullstack (web, backend, admin)` option.
If your `postgres` container is running, the prompt will open the following apps:

```sh
Web-app: http://localhost:4200
REST Api: http://localhost:3333/api
Admin: http://localhost:3334
```


## Install deps

```bash
  yarn install
```

## Start CLI

```bash
  yarn start
```

- A menu will open. Please either choose Web-App (frontend) or Fullstack (web/backend/admin)

- For the fullstack app, you should have docker installed.

- The benefit of using the fullstack app is that you may also use the admin panel to adjust data as you need.

- Note that the admin panel does not have validations implemented, so please try to fill out all the days as you might expect them to be.

Please see below for more details.

## Start Libraries

```bash
  # note the only available option right now
  # is the frontend shared component library
  yarn start:libs
```

## Running unit tests

- unit tests use [Jest](https://jestjs.io)

```sh
# executes all unit tests without the nx cache optimization
yarn runners:test:unit
```

```sh
# executes all unit tests with the nx cache optimization
yarn test
```

## Running e2e tests

I did not get to this. You will see Cypress is setup though.

## View repo dependency graph

```sh
yarn dep-graph
```

---

For a more complete idea of what this repo has to offer, please continue reading below.

Table of contents:

- [Squeak 🐶](#squeak-)
  - [Notes](#notes)
  - [Quick Start](#quick-start)
  - [Install deps](#install-deps)
  - [Start CLI](#start-cli)
  - [Start Libraries](#start-libraries)
  - [Running unit tests](#running-unit-tests)
  - [Running e2e tests](#running-e2e-tests)
  - [View repo dependency graph](#view-repo-dependency-graph)
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
  - [Running unit tests](#running-unit-tests-1)
  - [Running end-to-end tests](#running-end-to-end-tests)
  - [View repo dependency graph](#view-repo-dependency-graph-1)
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
- [docker](https://docs.docker.com/get-started/#download-and-install-docker) (full-stack version only)
- [docker-compose](https://docs.docker.com/docker-for-mac/install/) (full-stack version only)

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
   # once docker is running
   yarn db-up
   ```

2. Seed db (first-time only)

   - this will give the application a variety of dummy fixtures

   ```sh
   yarn db-seed
   ```

3. Start the app

   ```sh
   yarn start
   ```

   - This will start the [frontend-web](http://localhost:4200), [backend](http://localhost:3333/api), and [admin](http://localhost:3334) app in parallel.

     - Frontend: <http://localhost:4200>
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

4. Creating/updating/deleting data

   - open the [admin](http://localhost:3334) app,
   - or run the following curl command in your shell to seed a sample restaurant entry:

If you'd like, you can also create entries with curl commants like these:

Note that the controller is not doing validation on this data structure, so I would recommend using the admin panel Aalso there I have not implemented validation, but at least it is straight-forward to use.

```sh
curl --location --request POST  'http://localhost:3333/api/restaurants' \
--header 'Content-Type: application/json' \
--data-raw '{"name": "Sushi", "city": "New York", "country": "USA", "openingHours": {"monday":[],"tuesday":[{"type":"open","value":36000},{"type":"close","value":64800}],"wednesday":[],"thursday":[{"type":"open","value":36000},{"type":"close","value":64800}],"friday":[{"type":"open","value":64800}],"saturday":[],"sunday":[{"type":"close","value":3600},{"type":"open","value":20000},{"type":"close","value":75600}]} }'


curl --location --request POST 'http://localhost:3333/api/restaurants' \
--header 'Content-Type: application/json' \
--data-raw '{
  "name": "Sushi",
  "city": "New York",
  "country": "USA",
  "openingHours": {
    "monday":[],
    "tuesday":[
      {
        "type":"open",
        "value":36000
      },
      {
        "type":"close",
        "value":64800
      }
    ],
    "wednesday":[],
    "thursday":[
      {
        "type":"open",
        "value":36000
      },
      {
        "type":"close",
        "value":64800
      }
    ],
    "friday":[
      {
        "type":"open",
        "value":64800
      }
    ],
    "saturday":[],
    "sunday": [
      {"type":"close","value":3600},
      {"type":"open","value":20000},
      {"type":"close","value":75600}
    ]
  }
}'

```

### Start only the default frontend web-app

```sh
# start dev server in frontend
# select Web-App (frontend) from the menu
yarn start
```

- Navigate to <http://localhost:4200>.
- The app will automatically reload if you change any of the source files.

### Start only the default frontend mobile app

Note: this has not been developed yet. Only scaffolded.

```sh
# start dev server
# select Mobile (frontend) - NOT READY
yarn start

# once server is running, start either an Android or iOS emulator in another terminal

# ios emulator
yarn runners:frontend:start:mobile:ios

# android emulator
yarn runners:frontend:start:mobile:mobile
```

- App should appear in the iOS or Android emulator

- Note:

- If the iOS build fails, try running one more time (often it works the second time)
- If that does not work, try `yarn nx run-ios frontend-mobile` first if the build fails.

### Start frontend UI library app (default ui library)

```sh
# start dev server in Storybook

# select first option from this menu
yarn start:libs
```

- Navigate to http://localhost:4400/. You will be in the [Storybook](https://storybook.js.org/) UI.
- Storybook will automatically reload if you change any of the source files.

Note: converting this into publishable packages is easy to do in `nx`.

### Make a build

- Run `yarn runners:build:dev` for a development build
- Run `yarn runners:build:prod` for a production build

#### Note on builds

- converting this build into installable packages is easy to do in `nx`: see [source](https://nx.dev/latest/angular/structure/buildable-and-publishable-libraries)
- the build artifacts will be stored in the `dist/` directory.

## Running unit tests

- unit tests use [Jest](https://jestjs.io)

```sh
# executes all unit tests.
yarn npm run runners:test:unit
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
yarn test
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

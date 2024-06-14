# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

# About My App

## Fetching the client Data
After creating the initial application, I started with creating the rest call to fetch client data from the json file. As I was required to load the data via rest, I did not use an import statement to simply load the file data into the vue page directly, and didn't use the Nuxt Content module to access json data through those means.
I first stored the json file in the public folder, as the data is read only for the purpose of this application and can be easily accessed. I then created an api endpoint on the server side to fetch the data from the json file and return it. Then, in my vue code, I simply called that api endpoint so I could load in the data from the file.

## Displaying the list
## Displaying the details
## Filtering through search
## Linting and Testing
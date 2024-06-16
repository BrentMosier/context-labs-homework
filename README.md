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

There were two options for me to fetch data: via 'useFetch' or via '$fetch'. I initially tried to use 'useFetch' however I ran into issues with hydration. My approach was store the results of the rest call in a value and copy those results to a second value. I wanted to perform this copy via useFetch's 'onResponse' feature, however when I used this in practice I found multiple instances where my data faild to fully save into the filtered results, which caused breaking data inconsistencies.

## Displaying the list
Now that I had the json data in my vue file, I needed to display the data in a list. I was required to have each list element show the client name, title, and their avatar.

## Displaying the details
When clicking on a client name, it was meant to display the client details.
## Filtering through search
## Linting and Testing
Linting can be performed through
```bash
# npm
npm run lint
```

Testing can be performed with


# Potential Issues Not Addressed

# Notes and To-Dos
- testing
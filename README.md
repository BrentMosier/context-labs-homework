# Client List Display

A simple web page for displaying and filtering clients. Client data is displayed on a list which users can filter via entering text in the search field. Clicking on a particular client in the list will open a modal displaying all information about the client.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev
```

## Fetching the client Data

After initializing the base application, I started with creating the rest call to fetch client data from the json file. As I was required to load the data via rest, I did not use an import statement to simply load the file data into the vue page directly, and didn't use the Nuxt Content module to access json data.
I first stored the json file in the public folder, as the data is read only for the purpose of this application and can be easily accessed. I then created an api endpoint on the server side to fetch the data from the json file and return it. Next I created a util function to fetch the data from the server api. Then, in my vue code, I simply accessed that util function to call that api endpoint so I could load in the data from the file into my vue component.

There were two options for me to fetch data: via 'useFetch' or via '$fetch'. I initially tried to use 'useFetch' however I ran into issues with hydration. My approach was store the results of the rest call in a value and copy those results to a second value. I wanted to perform this copy via useFetch's 'onResponse' feature, however when I used this in practice I found multiple instances where my data failed to fully save into the filtered results, which caused breaking data inconsistencies.

## Displaying the list and details

Now that I had the json data in my vue file, I needed to display the data in a list. I was required to have each list element show the client 'name', 'title', and their 'avatar'. I figured the simplest way to present this information was just that: in a list. So I created a list via vuetify, and displayed the data for each client in their own row. The list is interactable, and clicking on a client opens a modal with more client details.

The client details card contains all available data about a client. It has the information present in the list, as well as showing the optional fields of 'quote' and 'nationality'. I continued the style conventions of the list and showed the information in a minimalistic, clean way. I also added a package to the project allowing me to display the country's flag

## Filtering through search

explain why filtering on client side

## Linting and Testing

Linting can be performed through
```bash
# npm
npm run lint
```

Testing can be performed through
```bash
# npm
npm run test
```

Test coverage can be measured with
```bash
# npm
npm run coverage
```

Test coverage currently sits at 98.77% statement coverage and 84.61% branch coverage.

# Assumptions Made
deprecated data is not expressley indicated, read it as data that was optional, opted to have code take care of only displaying that data when present

picked testing and linter based on them being the default within nuxt


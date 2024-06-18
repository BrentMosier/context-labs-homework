# Client List Display

A simple web page for displaying and filtering clients. Client data is displayed on a list which users can filter through entering text in the search field. Clicking on a particular client in the list will open a modal displaying all information about the client.

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

## Linting and Testing

Linting can be performed through:

```bash
# npm
npm run lint
```

Testing can be performed through:

```bash
# npm
npm run test
```

Test coverage can be measured with:

```bash
# npm
npm run coverage
```

Test coverage currently sits at 98.77% statement coverage and 84.61% branch coverage.

## Fetching the client Data

After initializing the base application, I started with creating the rest call to fetch client data from the json file. As I was required to load the data via rest, I did not use an import statement to simply load the file data into the vue page directly, and didn't use the Nuxt Content module to access json data.

I first stored the json file in the server folder for easy access. I then created an api endpoint on the server side to grab the data from the json file and return it. Next I created a util function to fetch the data from the server api. Then, in my vue code, I simply accessed that util function to call that api endpoint so I could load in the data from the json file into my vue component.

There were two options for me to fetch data: via 'useFetch' or via '$fetch'. I initially tried to use 'useFetch' however I ran into issues with hydration. My approach was store the results of the rest call in a value and copy those results to a second value. I wanted to perform this rest call via useFetch's 'onResponse' feature, however when I used this in practice I found multiple instances where my data failed to fully save into the filtered results, which caused breaking data inconsistencies. As a result I swtiched to using '$fetch' instead and have not had such issues.

## Displaying the list and details

Now that I had the json data in my vue file, I needed to display the data in a list. I was required to have each list element show the client 'name', 'title', and their 'avatar'. I figured the simplest way to present this information was just that: in a list. So I created a list via vuetify, and displayed the data for each client in their own row. I included a skeleton loader within the list so on intial page load users know that data is still being fetched and loaded in. The list is interactable, and clicking on a client opens a modal with more client details.

The client details card contains all available data about a client. It has the information present in the list, as well as showing the optional fields of 'quote' and 'nationality'. I continued the style conventions of the list and showed the information in a minimalistic, clean way. I added a package to the project allowing me to display the country's flag based on the country's code. I also added a tooltip the the flag, so it displays the country name on hover. I felt having a flag in the card was more aesthetically pleasing than more text.

I found two issues that needed to be addressed with the data itself which impacted the code I wrote. The first issue was that some of the client detail fields were optional. This meant I had to design the client details card to account for some of the data not always being there and ensuring the card didn't look "off" while some details were not displayed. I organized the layout of the information so that the core data was in the top left side and would grow outward to the right and down with information. This meant the card appears normal with minimal information, and can grow to account for more details within the card as needed.

The second issue was one of the clients names had html tags to style themselves with. I could have simply utilized v-html within vue to display the styled text, but v-html can be dangerous and opens a page up to XSS attacks. I approached this issue with the assumption that I could not trust the data, so I sanitized the strings with Dompurify to prevent XSS attacks and issues while allowing for the html tag based styling to still appear.

## Filtering through search

The next requirement was to be able to filter clients by all of their properties. I first had to choose whether the filtering logic would be handled server side or client side. I chose to implement it client side, as the json file was relatively small so the browser can handle storing the data easily. This meant I could limit the app to a single api call on the initial page load to fetch all data, then perform all filtering logic within my vue component. For filtering I took in the string from the search field, converted it to lowercase (to prevent case sensitive issues with the search) and compared the search value to all properties in every client (each of which was also converted to lower case during comparison). If a client had any property which contained the search string, that client would remain displayed in the list. For convenience, I wrote the search field so that there is a button to clear the field, and users can clear the field with the escape key. If a search value is entered which matches none of the clients, text will appear and indicate this to the user.

## Assumptions Made

Under the assignment's "extra credit" section, there is an ask to "Format response to indicate which fields might be deprecated". With the structure of the json file having no indication of data being deprecated as opposed to fields simply being optional, I opted instead to treat the fields as optional. If I were to indicate which fields were deprecated, I could have updated the call to reference that the 'quote' and 'nationality' fields may be deprecated within the json. This would allow me to update the UI to have visual indicators that certain data points may be deprecated. I mostly likely would have shown this within the cards by having an icon next to the data (or where the data would be in the case of it being missing) that on hover would have a tooltip indicating the data may be deprecated. This keeps in line stylistically with the flag tooltip where visual data in the app can be hovered on to understand what information is being conveyed.

I chose the default ESLint module for nuxt to handle my linting. I chose the default nuxt test-utils to handle my testing. I chose these as they are the default libraries to use within nuxt.

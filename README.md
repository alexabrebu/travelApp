<p align="right">
  <img width="500" src="assets/images/travela@2x.png"></img>
</p>

# Travel App

[![Built with open-wc recommendations](https://img.shields.io/badge/built%20with-open--wc-blue.svg)](https://github.com/open-wc)

<p>This is Travela, a travel app - especially about travelling in Japan (the whole concept is based on that). <br>
You can take a look at the API definitions for locations below.
Also, don't forget to check out my app on Netlify!🌸
</p>

# [My link on netlify ](https://modest-mestorf-3f8d74.netlify.app/)🌸

## Super features that I implemented for this application:

<ul>
  <li>travel cards from fetch api</li>
  <li>add new destination form (lion component)</li>
  <li>custom validators for lion-form</li>
  <li>the app has several pages, shaped as lit views</li>
  <li>broke the elements into reusable components</li>
  <li>responsive application (styles are desktop and mobile friendly)</li>
  <li>has a cool burger menu for mobile navigation</li>
  <li>Vaading routing (for both header & footer navigation bar)</li>
  <li>unit tests (& sinon testing)</li>
  <li>respected a11y aspects</li>
  <li>cool styling (grid & flex system)</li>
  <li>extra functional pages (contact, tour, hotel, credits)</li>
  <li>contact form with e-mail service</li>
  <li>carousel component @skeleton</li>
  <li>surprise! (@sakura) - temporary disabled due to Netlify issue</li>
</ul>

# API definitions for locations

### GET
`curl -X GET 'https://devschool-2020.firebaseio.com/alexandra/places.json'`

### POST

<pre><code>curl -X POST -d {
  {
   "name": "Osaka Castle",
   "type": "culture",
   "description": "Lorem ipsum",
   "imageUrl": ""
  } 'https://devschool-2020.firebaseio.com/alexandra/places.json'
}</code></pre>

### PUT

<pre><code>curl -X PUT -d {
  {
   "name": "Mount Fuji",
   "type": "nature",
   "description": "Lorem ipsum",
   "imageUrl": ""
  } 'https://devschool-2020.firebaseio.com/alexandra/places/placeID.json'
}</code></pre>


### PATCH

<pre><code>curl -X PATCH -d {
 {
   "name": "Osaka Castle",
   "type": "culture",
   "description": "Lorem ipsum",
   "imageUrl": ""
  } 'https://devschool-2020.firebaseio.com/alexandra/places/placeID.json'
}</code></pre>

### DELETE
`curl -X DELETE 'https://devschool-2020.firebaseio.com/alexandra/places/placeID.json'`


## Scripts

- `start` runs your app for development, reloading on file changes
- `start:build` runs your app after it has been built using the build command
- `build` builds your app and outputs it in your `dist` directory
- `test` runs your test suite with Web Test Runner
- `lint` runs the linter for your project

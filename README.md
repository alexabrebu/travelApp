<p align="center">
  <img width="200" src="https://imgur.com/iNro3dx"></img>
</p>


# [My link on netlify ](https://modest-mestorf-3f8d74.netlify.app/)❤


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


## Travel App

[![Built with open-wc recommendations](https://img.shields.io/badge/built%20with-open--wc-blue.svg)](https://github.com/open-wc)

## Quickstart

Welcome to TravelApp starter kit ! You will implement features for the app while learning about frontend development. 

## Scripts

- `start` runs your app for development, reloading on file changes
- `start:build` runs your app after it has been built using the build command
- `build` builds your app and outputs it in your `dist` directory
- `test` runs your test suite with Web Test Runner
- `lint` runs the linter for your project

##### Instanews's README
# Instanews App
It is a one-page, responsive website that allows users to filter top news story categories via the New York Times API. It shows the news story in grids and every story comes with a photo and a short abstract. All of they link to its URL on the NYT website.

## Technologies used
#### RWD
- Use a mobile-first approach (min-width: 600px and min-width: 1000px)
- Mobile view: 0-600px
- Tablet view: 600-1000px
- Desktop view: >1000px

#### JS
- Use Ajax to fetch data from the NYT Top Stories endpoint
- Add transitions between UI states for better user experience, such as a loading gif 
- Use a jQuery plugin Selectric for customizing select styles

#### HTML
- Use the HTML5 doctype

#### CSS/SASS
- Implement a mobile-first responsive layout using flexbox
- Use Sass as a preprocessor

## Installation
#### (branch: master)
Run `npm install` to install the current package context.
Use `gulp` for a dev server. The browser will automatically reload if you change any of the source files.

#### (branch: es6)
Run `npm install` to install the current package context.
Run `webpack-dev-server` to install webpack. Navigate to your `http://localhost:portnumber/`.


## Personal learnings
- Use jQuery Ajax methods to load content to a webpage
- Create authentication credentials and use them to access data within a third-party API
- Use Gulp for running build tasks, such as minimization, Sass compilation, and error checking
- Use Sass to keep things organized and neat

## Screenshot
#### (Desktop view)
<img src="https://user-images.githubusercontent.com/6543823/28548052-bfb9317a-7086-11e7-9028-375bbf0af576.png" alt="A screenshot of Instanews App desktop view"/>


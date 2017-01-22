AngularJS course offered by The Hong Kong University of Science and Technology

# Confusion

A Restaurant app built using AngularJS, a JavaScript framework.

## Getting Started
Clone/download the files and store json-server folder outside the main folder.


### Prerequisites

You must have nodeJS and npm installed on your system.You also need json-server, a node module.

```
sudo apt-get update
sudo apt-get install nodejs
sudo apt-get install npm

npm install json-server -g
```

### Installing

I've used gulp and grunt.

```
npm install -g gulp
npm install -g grunt-cli

```
In your wokring directory
 
```
npm install gulp --save-dev
npm install gulp-jshint jshint-stylish gulp-imagemin gulp-concat gulp-uglify gulp-minify-css gulp-usemin gulp-cache gulp-rev gulp-rename gulp-notify browser-sync del --save-dev
npm install gulp-changed --save-dev
npm install gulp-ng-annotate --save-dev
npm install browser-sync --save-dev
npm install grunt-contrib-jshint --save-dev
npm install jshint-stylish --save-dev
npm install time-grunt --save-dev
npm install jit-grunt --save-dev

```



## Running the tests

To start the server
go to json-server folder and in the terminal,type
```
json-server --watch db.json
```
App will be running on http://localhost:3000


## Future Goals<br>
Working with a database.<br>
Implementing RESTful services and angular-testing<br>






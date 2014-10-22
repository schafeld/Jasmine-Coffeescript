Jasmine-Coffeescript
====================

Experiment based on the Tutsplus tutorial on TDD with Jasmine and Coffeescript. First time working with the Github GUI app. Added Grunt to the mix. Added linting with jshint.

Tutorial scripts and templates should have been modified sufficiently to make them "my own".


### Testing
When everything is set up with Grunt simply type 
    `grunt jasmine` 
to run Jasmine specs in a terminal. 

Type 
    `grunt watch` 
to continuously cover any saved code changes.


### Inspired by:

https://code.tutsplus.com/courses/test-driven-development-with-coffeescript-and-jasmine/lessons/an-introduction-to-jasmine

http://blog.crisp.se/2013/03/31/danielsundman/test-driving-javascript-its-never-been-easier

http://travisjeffery.com/b/2013/09/testing-javascript-projects-with-grunt-jasmine-jshint/

### Usage:
`grunt` 
 or
`grunt test` 
 or
`grunt jasmine`
 or 
`grunt watch` .

### Installation:
#### Prerequisites
You need to have git, npm and grunt installed.
Verify this by typing
`git --version` 
`npm -v` 
`grunt -v` 

E.g. on Ubuntu git is installed by simply typing: 
`sudo apt-get install git`.

There are plenty of ressources on the web on installing the other tools and on other OS's.

#### Getting Started
If you got those tools already, 
clone the repo to your local machine like this: 
`git clone https://github.com/schafeld/Jasmine-Coffeescript.git`.

Change directory 
`cd Jasmine-Coffeescript/`. 

Install or update the modules listed in the package by entering 
`npm install` or `sudo npm install`. 

Run yout first Jasmine tests (specs and basic source code is set up by default): 
`grunt`.

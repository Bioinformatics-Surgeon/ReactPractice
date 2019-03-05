## Notes

- What is React?

  - React is a Jacascript library
  - React's ultimate purpose is to show content (HTML) to uses and handle user interaction
  - A front-end tool
  - It can build anything by itself but it can also work with a tremendous amount of other libriaries

- ES2015 allows for React to use Classes

  - A componet is the fundamentals of React
  - We can creat componets with funcitoins or classes

- JSX (javascript xml)

  - reacts own language that ressembles HTML
  - special language of JS

- Event Handles can be used in React

  - componet can handles envents as well

- React is split into two separate libraries

  1. "React" knows what a componet is and how to amke componets work together

  - contains the defintion of what components are

  2. "ReactDOM" know how to take a componet and make it show up in the DOM

  - shows the code in HTML

### JSX

- JavaScript Xtensible Markup Language
- A special dialect of JS (not HTML)
- Browsers don't understand JSX code but we use Babel to compile it down to ES5 JS that most all broswers can understand
- Althought JSX is similar in form and function to HTML there are acouple differecens

#### inline style:

`<div style={{backgroundColor: 'red'}}>Some Text</div>`

- inline styles can be applied by using an inline style objecy
- key represent a different property you want to style and the property represent the value of the property
- Cannot use "-" dashes must just camel case
- spaces can be represented in the 'string string string'

### NPM

- npx allows you to run one command instead of two
  5.2 and higher have this command

## Babel

- complies higher level unsported JS to **ES5** support JS

## files and folders

- scr: source file contains the components of the application
- public: contains different static file that never change
- node_module: all dependecies 1700+ in create-react-app
- package.json: list all dependies and project configiration
- package-lock.json: records the versions of all dependecies

## import statement

- bundler system called webpack
- every file is its own little universe
- if you want asscess to code you have to right an import statement
- webpack thing

### import React from 'react'

> import (we want to get code from some other file or dependency)
> React (the cariable we want to assign this import to ) this can be anything but by convention we call it this
> from (we are about to specidfy the name of the library or file we are importing from)
> 'react' (the name of the dependcy or path to the file we are importing) || or we can import by using a path name for a file

- import and require are both module systems

1. CommonJS modules uses **require**
2. ES2015 Modules uses **import**

## React componet

- they are functions or classes
  both **produce** **HTML** to show user and **handles** **feedback** from **user**

## ReactDOM

- When we want to show the component that we want to render to the page we will need to call ReactDOM.render(1, 2)

1. being what component you want to render
2. being where you want to render it, in our case the div with the id of root

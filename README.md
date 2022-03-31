# Cypress - vue-todo-list
This repository is used to store the cypress project that is used for making end-to-end test that the development of new features using cucumber



## Installation
Clone project:
```shell
https://github.com/jmachado100/Cypress.git
```

Then change into that folder:
```shell
cd Cypress
```

Install project dependencies:
```shell
npm install
```

Start up a cypress:
```shell
npx cypress open 
```


## Work already develop

#
At this moment it was developed two End-to-End automated test that are stored in the files below:

## End-to-End 
<br>

### Todo_add_todo.spec.js
This file has got tests that involve the functionality of adding new todo items to the list 

### Todo_delete_todo.spec.js
This file has got tests that involve the functionality of removing exiting todo items to the list 

#
It was also developed a bundle of BDD/Gherkin-based acceptance tests with support of cucumber library:

## BDD

### Edit.feature
This file simulates the functionality of editing a todo element that is already created

### history.feature
This file simulates the functionality of seeing the history of todo elements that were completed, added or deleted by the user







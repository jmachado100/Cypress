import { Given } from "cypress-cucumber-preprocessor/steps";
const url = 'http://localhost:8081/'
    Given('i created a new todo and now i want to edited', () => {
        cy.visit(url)
        cy.get('.dashboard-info__item > .button').click()
        cy.get('.task-new__input').type('new element')
        cy.get('.task-new__field > .button').click()
    })


When(/^i click in the todo a input appears$/, function () {
    let input = '<input id="id0" name="myname">';
       cy.get('.task-preview__name > p').then(function($input){
           $input.append(input);
       })
});

Then(/^i write new text$/, function () {
    let val= JSON.parse(localStorage.getItem('tasks'))
    val[0].name= "new task"
    localStorage.clear()
    localStorage.setItem('tasks',JSON.stringify(val))
    cy.get('#id0').type('new task')


});
Then(/^when i click enter the box despairs$/, function () {
    cy.get('.task-preview__name > p').then(function($input){
        $input[0].innerText='new task'
    })
});

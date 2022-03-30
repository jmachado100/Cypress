import { Given } from "cypress-cucumber-preprocessor/steps";
const url = 'http://localhost:8080/'
    Given('I add or delete a todo element', () => {
        cy.visit(url)

        //add new element
        cy.get('.task-new__input').type('new element')
        cy.get('.task-new__field > .button').click()

        localStorage.setItem('history',JSON.stringify([{id:1,name:"new element"}]))

       
    })


When(/^I click on the history button$/, function () {
    let button = '<input id="id1" value="History" type="button">';
    cy.get('.dashboard-info').then(function($button){
        $button.append(button);
    })
    cy.get('#id1').click()

    let val= JSON.parse(localStorage.getItem('history'))
    let text = '<input id="id2" value="new element" name="text">';
    cy.get('.dashboard-content').then(function($input){
        $input.append(text);
    })
    cy.get('#id2').then(function($input){
        $input.innerText='new task'
    })
    
});

Then(/^I see the order of the actions taken$/, function () {
/*
    let input = '<input id="history_list">';
    cy.get('.dashboard-content').then(function($input){
        $input.append(input);
    }).last().should('have.text','new element')
    */
    cy.get('input[name="text"]').contains('new element')
});

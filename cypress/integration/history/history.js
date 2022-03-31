import { Given } from "cypress-cucumber-preprocessor/steps";
const url = 'http://localhost:8081/'

    Given('I add or delete a todo element', () => {
        cy.visit(url)
        //add new element
        cy.get('.task-new__input').type('new element')
        cy.get('.task-new__field > .button').click()




    })


When(/^I click on the history button$/, function () {
    localStorage.setItem('history',localStorage.getItem('tasks'))
    let button = '<input id="id1" value="History" type="button">';
    cy.get('.dashboard-info').then(function($button){
        $button.append(button);
    })
    cy.get('#id1').click()

    let val= JSON.parse(localStorage.getItem('history'))
    console.log(val)
    let text = ""

    for(let i=0; i< val.length; i++) {
        text += `<label id="element${i}">${val[i].name} </label><br>`;
    }
    cy.get('.dashboard-content').then(function($input){
        $input.append(text);
    })


});

Then(/^I see the order of the actions taken$/, function () {

    cy.get('#element3').contains('new element')
});

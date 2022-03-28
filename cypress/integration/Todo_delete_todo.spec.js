// Todo_add_todo.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
describe('vue to-do app', () => {
    beforeEach(() => {
        // Cypress starts out with a blank slate for each test
        // so we must tell it to visit our website with the `cy.visit()` command.
        // Since we want to visit the same URL at the start of all our tests,
        // we include it in our beforeEach function so that it runs before each test
        cy.visit('http://localhost:8080/')
    })


    it('check elements', () => {
        cy.get('.task-list li').should('have.length.greaterThan',1)
        cy.get(':nth-child(1) > .tag > .tag__value').should('contain.text',3)

        cy.get('.task-list li').should('have.length',3).first().should('have.text',' Do something awesome! ')
        //task-preview is-done
    })

    it('delete elements',  () => {
        cy.get(':nth-child(1) > .task-preview > .task-preview__button-remove').click()

        cy.get('.task-list li').should('have.length',2)
        cy.get(':nth-child(1) > .tag > .tag__value').should('contain.text',2)
    });

    it('delete all elements', () => {
        cy.get('.dashboard-info__item > .button').click()
        cy.get(':nth-child(1) > .tag > .tag__value').should('contain.text',0)
        cy.get('.task-list li').should('have.length',0)
     })


    })




describe('vue to-do app', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8081/')
    })

    it('clean list', () => {
       cy.get('.dashboard-info__item > .button').click()
        cy.get(':nth-child(1) > .tag > .tag__value').should('contain.text',0)
    })

    it('check elements', () => {
        cy.get('.task-list li').should('have.length',3).first().should('have.text',' Do something awesome! ')
        cy.get(':nth-child(2) > .task-preview > .task-preview__name > p').should('have.text',' Buy toilet paper ')
        cy.get(':nth-child(2) > .task-preview > .task-preview__button-done').click()
        cy.get(':nth-child(2) > .task-preview').should('contain.class','task-preview is-done')
        cy.get(':nth-child(1) > .tag > .tag__value').should('contain.text',3)
        cy.get(':nth-child(2) > .tag > .tag__value').should('contain.text',1)

        //task-preview is-done
    })

    it('add elements ',  () => {
        cy.get('.task-new__input').type('new element')
        cy.get('.task-new__field > .button').click()
        cy.get('.task-list li').should('have.length',4).last().should('have.text', ' new element ')
        cy.get('.task-list li').should('have.length',4)
            .children().get(':nth-child(4) > .task-preview > .task-preview__button-done').click({ multiple: true })
        cy.get(':nth-child(1) > .tag > .tag__value').should('contain.text',4)
        cy.get(':nth-child(2) > .tag > .tag__value').should('contain.text',1)
        cy.get('.dashboard-info > :nth-child(2) > :nth-child(1) > .button').click()
        cy.get(':nth-child(1) > .tag > .tag__value').should('contain.text',3)
        cy.get(':nth-child(2) > .tag > .tag__value').should('contain.text',0)


    });
    })



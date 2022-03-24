// NetflixSignIn.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
describe('example to-do app', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8080/sign-in')
    })


    it('netflix log in', () => {
        const email = 'diogo.martinho.pinto@hotmail.com'
        const randomPass = (length = 8) => {
            return Math.random().toString(16).substr(2, length);
        };
        const passSignUp= randomPass(8)+"B"
        cy.get('a.link--white').click()
        cy.get('input[id=email]').type(email)
        cy.get('input[id=password]').type(passSignUp)
        cy.get('input[id=confirm-password]').type(randomPass(8)+"B")
        cy.get('.form__btns').children().get('button[type=submit]').click()
        cy.get('.form__error-list li').first().should('contain.text','Passwords do not match.')
        cy.get('input[id=confirm-password]').clear()
        cy.get('input[id=confirm-password]').type(passSignUp)
        cy.get('.form__btns').children().get('button[type=submit]').click()// no feddback from the server
        cy.get('.Header__actions').first().click()

    })

    it('netflix log in', () => {
        const email = 'fake@hotmail.com'
        const email2 = 'diogo.martinho.pinto@gmail.com'
        const password ='2210619'
        cy.get('input[id=email]').type(email)
        cy.get('input[id=password]').type(password)
        cy.get('.checkbox__wrapper').children().get('input[type=Checkbox]').should('not.be.checked')
        cy.get('.checkbox__wrapper').children().get('input[type=Checkbox]').check({force: true})
        cy.get('.checkbox__wrapper').children().get('input[type=Checkbox]').should('be.checked')
        cy.get('.form__btns').children().get('.btn--primary').click()
        cy.get('.form__error-message').should('contain.text','Sorry, we can\'t find an account with this email address. Please try again or create a new account.')
        cy.get('input[id=email]').clear()
        cy.get('input[id=email]').type(email2)
        cy.get('.form__btns').children().get('.btn--primary').click()
        cy.url().should('eq','http://localhost:8080/home')
    })
    it('netflix log out', () => {
        cy.get('.dropdown').children().get('.dropdown__list button').last().click({force: true})
        cy.url().should('eq','http://localhost:8080/')
        cy.get('.Header__actions a').first().click()
        cy.url().should('eq','http://localhost:8080/sign-in')
    })
})
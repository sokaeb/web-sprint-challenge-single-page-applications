describe('Lambda Eats App Tests', () => {
    describe('Can type into inputs and submit data', () => {
        it('can navigate to http://localhost:3000/PizzaForm', () => {
            cy.visit('http://localhost:3000/PizzaForm')
            cy.url().should('include', 'localhost')
        })
        it('can get name input and type a name', () => {
            cy.get('input[name="name"]')
                .type('Polly')
                .should('have.value', 'Polly')
        })
        it('can select size from the dropdown', () => {
            cy.get('select').select('Small').should('have.value', 'Small')
        })
        it('can check the toppings', () => {
            cy.get('input[name="pepperoni"]').click()
            cy.get('input[name="mushrooms"]').click()
            cy.get('input[name="spinach"]').click()
        })
        it('can click the submit button to submit the data', () => {
            cy.get('#submitBtn').click()
        })
    })
})